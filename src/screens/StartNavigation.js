import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CreateStoryScreen from './CreateStoryScreen';
import ReviewStoryScreen from './ReviewStoryScreen';
import StoryScreen from './StoryScreen';
import DismissableStackNavigator from './DismissableStackNav';
import VocabListScreen from './VocabListScreen';
import VocabScreen from './VocabScreen';

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  StoryScreen: {
    screen: StoryScreen,
  },
  VocabListScreen: {
    screen: VocabListScreen,
  },
  VocabScreen: {
    screen: VocabScreen,
  },
}, {
  initialRouteName: 'HomeScreen',
});

const CreateStoryStack = DismissableStackNavigator({
  CreateStoryScreen: {
    screen: CreateStoryScreen,
  },
  ReviewStoryScreen: {
    screen: ReviewStoryScreen,
  },
});

const ModalStack = createStackNavigator({
  AppStack,
  CreateStoryStack,
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(ModalStack);

