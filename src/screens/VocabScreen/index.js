import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
import styles from './styles';
import { searchVocabAPI } from '../../apis/vocab';

class VocabScreen extends React.PureComponent {
  state = {
    result: {},
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Definition',
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

  async componentDidMount() {
    const body = {
      word: this.props.navigation.state.params.word,
    };
    const result = await searchVocabAPI(body);
    console.log(result);
    this.setState({ result });
  }
  render() {
    const { word } = this.props.navigation.state.params;
    // const word = 'Happy';
    const { result } = this.state;
    return (
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 40, marginVertical: 10 }}>{word}</Text>
        <Text style={{ fontSize: 30, color: '#e08f8f', marginVertical: 10 }}>{result.Speech}</Text>
        <Text style={{ fontSize: 18, lineHeight: 25 }}>{result.Definitions}</Text>
      </View>
    );
  }
}

export default VocabScreen;

