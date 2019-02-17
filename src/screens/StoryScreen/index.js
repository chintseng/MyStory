import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import ImageSlider from 'react-native-image-slider';
import Tts from 'react-native-tts';
import styles from './styles';
import themePark from '../../images/zoo.jpg';
import { parseDocumentAPI } from '../../apis/vocab';
import soundImage from '../../images/sound.png';
import vocabImage from '../../images/vol.png';

class StoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.story.title,
      headerStyle: {
        backgroundColor: '#FF6B6B',
        marginRight: 10,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'black',
      headerRight: (<Icon
        name="camera-alt"
        onPress={() => {
          navigation.navigate('CreateStoryScreen');
        }}
        underlayColor="transparent"
      />),
    };
  };
  handleVocabClick = async () => {
    const { navigation } = this.props;
    const body = {
      document: navigation.state.params.story.content,
    };
    const response = await parseDocumentAPI(body);
    navigation.navigate('VocabListScreen', { vocabs: response.words });
  }
  handleVoiceClick = () => {
    Tts.speak(this.props.navigation.state.params.story.content);
  }
  render() {
    const { story } = this.props.navigation.state.params;
    // const images =
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 6 }}>
          <ImageSlider onPress={this.handleTouchablePress} images={story.mock ? [themePark] : story.images.map(image => ({ uri: image.uri }))} />
        </View>
        <View style={{ flex: 2, padding: 16 }}>
          <Text style={{ fontSize: 20 }}>{story.content}</Text>
        </View>
        <View style={{
          flex: 1, backgroundColor: '#292f36', display: 'flex', flexDirection: 'row',
}}
        >
          <TouchableOpacity
            onPress={this.handleVoiceClick}
            style={{
              width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          ><Image style={{ width: 30, height: 30 }} source={soundImage} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.handleVocabClick}
            style={{
              width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center',
            }}
          ><Image style={{ width: 30, height: 30 }} source={vocabImage} />
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default StoryScreen;

