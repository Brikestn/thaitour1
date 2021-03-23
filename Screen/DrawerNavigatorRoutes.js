/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import Navigators
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

//Import External Screens
import HomeScreen from './drawerScreens/HomeScreen';
import SettingsScreen from './drawerScreens/SettingsScreen';
import Guide from './drawerScreens/Guide';
import Translate from './drawerScreens/Translate';
import Currency from './drawerScreens/Currency';
import Taxi from './drawerScreens/Taxi';
import Advertise from './drawerScreens/Advertise';
import Qrscan from './drawerScreens/Qrscan';
import addPlace from './drawerScreens/addPlace';
import addTaxi from './drawerScreens/addTaxi';
import CustomSidebarMenu from './Components/CustomSidebarMenu';
import NavigationDrawerHeader from './Components/NavigationDrawerHeader';

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Home',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SecondActivity_StackNavigator = createStackNavigator({
  First: {
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Setting Screen',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ThirdActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Guide,
    navigationOptions: ({navigation}) => ({
      title: 'Guide',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ForthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Translate,
    navigationOptions: ({navigation}) => ({
      title: 'Translate',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const FifthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Currency,
    navigationOptions: ({navigation}) => ({
      title: 'Currency',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SixthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Taxi,
    navigationOptions: ({navigation}) => ({
      title: 'Taxi',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const SeventhActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Advertise,
    navigationOptions: ({navigation}) => ({
      title: 'Advertise',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const EighthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: Qrscan,
    navigationOptions: ({navigation}) => ({
      title: 'Qrscan',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const ninethActivity_StackNavigator = createStackNavigator({
  First: {
    screen: addPlace,
    navigationOptions: ({navigation}) => ({
      title: 'addPlace',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});

const tenthActivity_StackNavigator = createStackNavigator({
  First: {
    screen: addTaxi,
    navigationOptions: ({navigation}) => ({
      title: 'addTaxi',
      headerLeft: () => <NavigationDrawerHeader navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#000000',
      },
      headerTintColor: '#fff',
    }),
  },
});


const DrawerNavigatorRoutes = createDrawerNavigator(
  {
    HomeScreen: {
      screen: FirstActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Home Screen',
      },
    },
    SettingsScreen: {
      screen: SecondActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Setting Screen',
      },
    },
    Guide: {
      screen: ThirdActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Guide',
      },
    },
    Translate: {
      screen: ForthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Translate',
      },
    },
    Currency: {
      screen: FifthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Currency',
      },
    },
    Taxi: {
      screen: SixthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Taxi',
      },
    },
    Advertise: {
      screen: SeventhActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Advertise',
      },
    },
    Qrscan: {
      screen: EighthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'Qrscan',
      },
    },
    addPlace: {
      screen: ninethActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'addPlace',
      },
    },
    addTaxi: {
      screen: tenthActivity_StackNavigator,
      navigationOptions: {
        drawerLabel: 'addTaxi',
      },
    },
  },
  {
    contentComponent: CustomSidebarMenu,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  },
);
export default DrawerNavigatorRoutes;
