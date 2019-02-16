import React from 'react';
import { Card } from 'react-native-elements';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import themePark from '../../images/mock/theme-park.png';

class StoryCard extends React.PureComponent {
  render() {
    return (
      <Card
        title={this.props.title}
        image={themePark}
        imageStyle={{
          width: '100%',
        }}
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
