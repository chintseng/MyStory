import React from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'yellow' }}>
        <Text style={{ color: 'black' }}>
          hello there
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
