import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

export default class addTaxi extends Component {
  constructor() {
    super();

    this.state = {
        taxi_ID : '',

        Driver_name: '',

        License_plate: '',

        Car_Registration: '',

        Tel: '',

    };
  }

  TaxiRegistrationFunction = () => {
    fetch('http://192.168.43.60/thaitour_user/taxi_insert.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Driver_name: this.state.Driver_name,

        License_plate: this.state.License_plate,

        Car_Registration: this.state.Car_Registration,

        Tel: this.state.Tel,

      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        // Showing response message coming from server after inserting records.
        Alert.alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
    
      <View style={styles.MainContainer}>
        <Text style={styles.title}>Taxi Registration Form</Text>

        <TextInput
          placeholder="Enter Driver name"
          onChangeText={(Driver_name) => this.setState({Driver_name: Driver_name})}
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter License plate"
          onChangeText={(License_plate) => this.setState({License_plate: License_plate})}
          style={styles.TextInputStyleClass}
          
        />

        <TextInput
          placeholder="Enter Car Registration"
          onChangeText={(Car_Registration) => this.setState({Car_Registration: Car_Registration})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          
        />


        <TextInput
          placeholder="Enter Telephone Number"
          onChangeText={(Tel) => this.setState({Tel: Tel})}
          underlineColorAndroid="transparent"
          style={styles.TextInputStyleClass}
          
        />

        <Button
          title="Click Here To Register"
          onPress={this.TaxiRegistrationFunction}
          color="#2196F3"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },

  TextInputStyleClass: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    borderWidth: 1,
    borderColor: '#2196F3',
    borderRadius: 5,
  },

  title: {
    fontSize: 22,
    color: '#009688',
    textAlign: 'center',
    marginBottom: 15,
  },
});
