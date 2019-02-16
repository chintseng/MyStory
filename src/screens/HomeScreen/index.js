import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

class HomeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const onCameraClick = navigation.getParam('onCameraClick');
    return {
      title: 'Shipment List',
      headerStyle: {
        backgroundColor: '#fca17d',
      },
      headerRight: (<Icon
        name="camera-alt"
        onPress={() => {
          navigation.navigate('CreateStoryScreen');
        }}
        underlayColor="transparent"
      />),
    };
  };
  constructor(props) {
    super(props);
    this.props.navigation.setParams({ onCameraClick: this.onCameraClick });
  }
  onCameraClick = () => {
    console.log('camera');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ color: 'black' }}>
          hello there
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
