import React from 'react';
import { Card } from 'react-native-elements';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import themePark from '../../images/zoo.jpg';

class StoryCard extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    const title = navigation.getParam('title');
    return {
      title,
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
  // componentDidMount() {
  //   this.props.navigation.setParams({ title: this.props.story.title });
  //   console.log('hie');
  // }
  render() {
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Card
          title={this.props.story.title}
          borderRadius={20}
          image={themePark}
          imageStyle={{
            width: '100%',
          }}
          wrapperStyle={{
            padding: 0,
          }}
          containerStyle={{
            overflow: 'hidden',
          }}
        />
      </TouchableOpacity>
    );
  }
}

StoryCard.defaultProps = {
  story: {},
};

StoryCard.propTypes = {
  story: PropTypes.object,
};

export default StoryCard;
