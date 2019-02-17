import React from 'react';
import { Card } from 'react-native-elements';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import themePark from '../../images/zoo.jpg';

class StoryCard extends React.PureComponent {
  render() {
    return (
      <Card
        title={this.props.title}
        borderRadius={20}
        image={themePark}
        imageStyle={{
          width: '100%',
        }}
        imageProps={{resizeMode: 'cover'}}
        imageWrapperStyle={{resizeMode: 'cover'}}
      />
    );
  }
}

StoryCard.defaultProps = {
  title: '',
};

StoryCard.propTypes = {
  title: PropTypes.string,
};

export default StoryCard;