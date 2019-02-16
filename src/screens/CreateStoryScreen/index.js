import React from 'react';
import { View, Text, TouchableOpacity, Button } from 'react-native';
import styles from './styles';
import { RNCamera } from 'react-native-camera';
import { connect } from 'react-redux';
import { addNewImage } from '../../store/actions/image';

class CreateStoryScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    // const onCameraClick = navigation.getParam('onCameraClick');
    return {
      title: 'Camera',
      headerStyle: {
        backgroundColor: '#fca17d',
      },
      headerLeft: (
        <Button
          onPress={() => navigation.pop()}

          title="Cancel"
          color="#000000"
          backgroundColor="rgba(1, 1, 1, 0)"
        />
      ),
    };
  };
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      this.props.onAddNewImage(data);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', backgroundColor: '#FCA17D' }}>
          <View style={{flex: 1}} />
          <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'center'}}>
            <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
              <Text style={{ fontSize: 14 }}> SNAP </Text>
            </TouchableOpacity>
          </View>
          <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                }}>
            <Text style={{ fontSize: 20, color: '#FFFFFF' }}>{this.props.images.length} / 5</Text>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.image.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAddNewImage: (imageData) => (dispatch(addNewImage(imageData)))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateStoryScreen);
