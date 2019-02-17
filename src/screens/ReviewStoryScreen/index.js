import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { SafeAreaView, View, Button as RNButton, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import submitImage from '../../images/submit_b.png';
import styles from './styles';
import { createStory } from '../../store/actions/story';

class ReviewStoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    // const onCameraClick = navigation.getParam('onCameraClick');
    return {
      title: 'Review',
      headerStyle: {
        backgroundColor: '#FF6B6B',
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerLeft: (
        <RNButton
          onPress={() => navigation.pop()}
          title="cancel"
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
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FF6B6B' }}>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <View style={{ flex: 1 }}>
            <View style={{ flex: 4 }}>
              <ImageSlider onPress={this.handleTouchablePress} images={images.map(image => ({ uri: image.uri }))} />
            </View>
            <TouchableWithoutFeedback onPress={this.handleTouchablePress}>
              <View style={{
 flex: 2, paddingTop: 20, marginRight: 20, marginLeft: 20,
}}
              >
                <Input
                  placeholder="Story Title"
                  style={{ marginVertical: 20, padding: 16 }}
                  onChangeText={this.handleInputChange('title')}
                  inputContainerStyle={{ borderBottomWidth: 2, borderColor: '#292F36' }}
                />
                <TouchableOpacity style={{ alignSelf: 'center', paddingTop: 30, margin: 10 }}>
                  <Image source={submitImage} style={{ width: 200, height: 100 }} />
                </TouchableOpacity>
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
