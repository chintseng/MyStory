import React from 'react';
import ImageSlider from 'react-native-image-slider';
import { SafeAreaView, View, Button as RNButton, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { Input } from 'react-native-elements';
import submitImage from '../../images/submit_b.png';
import styles from './styles';
import { createStory } from '../../store/actions/story';
import { resetImage } from '../../store/actions/image';
import { STORY_CREATING } from '../../store/loadingTypes';

class ReviewStoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    // const { onResetImages } = navigation.state.params;
    // console.log(navigation.state.params);
    const onResetImages = navigation.state.params ? navigation.state.params.onResetImages : null;
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
          onPress={() => {
            onResetImages();
            navigation.pop();
          }}
          title="cancel"
          color="#000000"
          backgroundColor="rgba(1, 1, 1, 0)"
        />
      ),
    };
  };
  constructor(props) {
    super(props);
    props.navigation.setParams({ onResetImages: props.onResetImages });
    this.state = {
      controls: {
        title: {
          value: '',
          valid: true,
        },
      },
    };
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
  handleSubmitClick = async () => {
    const { controls: { title: { value: title } } } = this.state;
    await this.props.onCreateStory(title);
    this.props.onResetImages();
    this.props.navigation.dismiss();
  }
  render() {
    const { images, isLoading } = this.props;
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
                <TouchableOpacity onPress={this.handleSubmitClick} style={{ alignSelf: 'center', paddingTop: 30, margin: 10 }}>
                  {isLoading ? <ActivityIndicator size="large" color="white" /> : <Image source={submitImage} style={{ width: 200, height: 100 }} />}
                  {/* <ActivityIndicator size="large" color="white" /> */}
                  {/* <Image source={submitImage} style={{ width: 200, height: 100 }} /> */}
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
    isLoading: state.ui.isLoading[STORY_CREATING],
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateStory: title => dispatch(createStory(title)),
    onResetImages: () => dispatch(resetImage()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReviewStoryScreen);
