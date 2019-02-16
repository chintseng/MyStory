import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './HomeScreen';

const AppStack = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
}, { initialRouteName: 'HomeScreen' });

export default createAppContainer(AppStack);

