import React, {Component} from 'react';

import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

export default class Project extends Component {
  constructor() {
    super();

    this.state = {
        Place_ID  : '',

        Place_Name: '',

        Address: '',

        Type: '',

        Tel: '',

    };
  }

  placeRegistrationFunction = () => {
    fetch('http://192.168.43.60/thaitour_user/place_insert.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Place_Name: this.state.Place_Name,

        Address: this.state.Address,

        Type: this.state.Type,

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
        <Text style={styles.title}>Place Registration Form</Text>

        <TextInput
          placeholder="Enter Place Name"
          onChangeText={(Place_Name) => this.setState({Place_Name: Place_Name})}
          style={styles.TextInputStyleClass}
        />

        <TextInput
          placeholder="Enter Address"
          onChangeText={(Address) => this.setState({Address: Address})}
          style={styles.TextInputStyleClass}
          
        />

        <TextInput
          placeholder="Enter Type"
          onChangeText={(Type) => this.setState({Type: Type})}
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
          onPress={this.placeRegistrationFunction}
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
