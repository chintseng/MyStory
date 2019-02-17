import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import StoryCard from '../../components/StoryCard';

class HomeScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Stories',
      headerStyle: {
        backgroundColor: '#FF6B6B',
        marginRight: 10,
      },
      headerTitle: (
        <Image source={require('../../images/title.png')}
        style={{width: 200, height: 50, marginTop: 16}}/>
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
  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          style={{ width: '100%' }}
          data={this.props.stories}
          renderItem={({ item }) => <StoryCard key={item.key} title={item.title} />}
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
