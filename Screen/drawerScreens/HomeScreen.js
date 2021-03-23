/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, Image, Button, Redirect} from 'react-native';
import {ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

const HomeScreen = ({navigation}) => {
  global.currentScreenIndex = 'HomeScreen';
  return (
    <ImageBackground
      source={require('C:/Application/ThaiTour/Image/thai.jpg')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={{flex: 1, alignItems: 'center', marginTop: 100}}>
        <Image
          source={require('C:/Application/ThaiTour/Image/logo.png')}
          style={{
            width: '45%',
            height: 100,
            resizeMode: 'contain',
            margin: 30,
          }}
        />
        <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="Guide"
            color="#000000"
            onPress={() => navigation.navigate('Guide')}
          />
        </View>
        <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="Translate"
            color="#000000"
            onPress={() => navigation.navigate('Translate')}
          />
        </View>
        <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="Currency"
            color="#000000"
            onPress={() => navigation.navigate('Currency')}
          />
        </View>
        <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="Taxi"
            color="#000000"
            onPress={() => navigation.navigate('Taxi')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;
