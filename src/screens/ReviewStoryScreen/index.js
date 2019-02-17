import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { SafeAreaView, View, Button as RNButton, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Input, Button } from 'react-native-elements';
import styles from './styles';
import { createStory } from '../../store/actions/story';

class ReviewStoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    // const onCameraClick = navigation.getParam('onCameraClick');
    return {
      title: 'Review',
      headerStyle: {
        backgroundColor: '#fca17d',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerLeft: (
        <RNButton
          onPress={() => navigation.pop()}

          title="Retake"
          color="#000000"
          backgroundColor="rgba(1, 1, 1, 0)"
        />
      ),
    };
  };
  state = {
    controls: {
      title: {
        value: '',
        valid: true,
      },
    },
  }
  handleTouchablePress = () => {
    Keyboard.dismiss();
  }

  handleInputChange = key => (value) => {
    this.setState(prevState => ({
      ...prevState,
      controls: {
        ...prevState.controls,
        [key]: {
          ...prevState.controls[key],
          value,
          valid: true,
        },
      },
    }));
  }
  handleSubmitClick = () => {
    const { controls: { title: { value: title } } } = this.state;
    this.props.onCreateStory(title);
  }
  render() {
    const { images } = this.props;
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FCA17D' }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={{ flex: 1 }}>
            <View style={{ flex: 4 }}>
              <ImageSlider onPress={this.handleTouchablePress} images={images.map(image => ({ uri: image.uri }))} />
            </View>
            <TouchableWithoutFeedback onPress={this.handleTouchablePress}>
              <View style={{ flex: 2, paddingTop: 20 }}>
                <Input
                  placeholder="Story Title"
                  style={{ marginVertical: 20, padding: 16 }}
                  onChangeText={this.handleInputChange('title')}
                />
                <Button
                  style={{ marginVertical: 20, padding: 16 }}
                  title="Sumit"
                  onPress={this.handleSubmitClick}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.image.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateStory: title => dispatch(createStory(title)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewStoryScreen);
