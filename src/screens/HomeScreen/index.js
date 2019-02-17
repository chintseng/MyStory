import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import StoryCard from '../../components/StoryCard';
import titleImage from '../../images/app_title.png';

class HomeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stories',
      headerStyle: {
        backgroundColor: '#FF6B6B',
        marginRight: 10,
      },
      headerTitle: (
        <Image
          source={titleImage}
          style={{ width: 160, height: 40, marginTop: 10 }}
        />
      ),
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
  handleCardClick = story => (event) => {
    this.props.navigation.navigate('StoryScreen', { story });
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: '100%' }}
          data={this.props.stories}
          renderItem={({ item }) => <StoryCard key={item.key} story={item} onPress={this.handleCardClick(item)} />}
        />
        {/* {this.props.stories.map(story => <StoryCard key={uuid()} title={story.title} />)} */}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    stories: state.story.data,
  };
};

export default connect(mapStateToProps)(HomeScreen);
