import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class CreateStoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Shipment List',
      headerStyle: {
        backgroundColor: '#fca17d',
      },
      headerRight: (<Icon
        name="camera-alt"
        // onPress={() => {
        //   navigation.navigate('CreateStoryScreen');
        // }}
        underlayColor="transparent"
      />),
    };
  };
  render() {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}

export default CreateStoryScreen;
