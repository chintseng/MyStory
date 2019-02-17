import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-native-elements';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

class VocabListScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Vobaculary',
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
  handleVocabPress = word => () => {
    this.props.navigation.navigate('VocabScreen', { word });
  }
  render() {
    const { vocabs } = this.props.navigation.state.params || [];
    console.log(vocabs);
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: '100%' }}
          data={vocabs}
          renderItem={({ item }) => (
            <TouchableOpacity style={{ borderBottomColor: '#d6d6d6' }} onPress={this.handleVocabPress(item)}>
              <View style={{ padding: 16, borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 20 }}>{item}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

export default VocabListScreen;
