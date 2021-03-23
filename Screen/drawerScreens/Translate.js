import React from 'react';

//Import react-navigation
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LanguageSelectionScreen from 'C:/Application/ThaiTour/Screen/TranslatePage/LanguageSelectionScreen.js';
import ContentScreen from 'C:/Application/ThaiTour/Screen/TranslatePage/ContentScreen';

const Translate = createStackNavigator({
  LanguageSelectionScreen: {
    screen: LanguageSelectionScreen,
    navigationOptions: {header: Translate},
  },
  ContentScreen: {screen: ContentScreen},
});
export default createAppContainer(Translate);
