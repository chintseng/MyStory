import React from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Shipment List',
      headerStyle: {
        backgroundColor: '#fca17d',
      },
      headerRight: (<LogoutButton onLogout={onLogout} />),
    };
  };
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
