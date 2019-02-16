import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';
import CreateStoryScreen from './CreateStoryScreen';

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
}, {
  initialRouteName: 'HomeScreen',
});

const CreateStoryStack = createStackNavigator({
  CreateStoryScreen: {
    screen: CreateStoryScreen,
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

