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

const ModalStack = createStackNavigator({
  AppStack,
  CreateStoryScreen,
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(ModalStack);

