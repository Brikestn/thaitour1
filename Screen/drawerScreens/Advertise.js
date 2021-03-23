/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {AppRegistry, StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';

const Advertise = () => {
  return (
    <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
      <View style={styles.slide1}>
        <Image
          style={styles.image}
          source={require('C:/Application/ThaiTour/Image/ad1.png')}
        />
      </View>
      <View style={styles.slide2}>
        <Image
          style={styles.image}
          source={require('C:/Application/ThaiTour/Image/ad2.png')}
        />
      </View>
      <View style={styles.slide3}>
        <Image
          style={styles.image}
          source={require('C:/Application/ThaiTour/Image/ad3.jpg')}
        />
      </View>
    </Swiper>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  image: {
    flexGrow: 1,
    alignSelf: 'stretch',
    width: null,
    height: null,
  },
});

export default Advertise;
