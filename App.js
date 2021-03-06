/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import StartNavigation from './src/screens/StartNavigation';

export default class App extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  };
  render() {
    return (
      // <View style={styles.container}>
      //   <RNCamera
      //     ref={(ref) => {
      //     this.camera = ref;
      //   }}
      //     style={styles.preview}
      //     type={RNCamera.Constants.Type.back}
      //     flashMode={RNCamera.Constants.FlashMode.off}
      //     permissionDialogTitle="Permission to use camera"
      //     permissionDialogMessage="We need your permission to use your camera phone"
      //     onGoogleVisionBarcodesDetected={({ barcodes }) => {
      //     console.log(barcodes);
      //   }}
      //   />
      //   <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
      //     <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
      //       <Text style={{ fontSize: 14 }}> SNAP </Text>
      //     </TouchableOpacity>
      //   </View>
      // </View>
      <StartNavigation />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
