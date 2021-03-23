import React, { Component } from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import Loader from './Components/loader';

export default class RegisterScreen extends Component {
  constructor() {
    super();

    this.state = {
      Password: '',

      Adress: '',

      City: '',

      Country: '',

      TelNo: '',

      Email: '',
    };
  }

  UserRegistrationFunction = () => {
    fetch('http://192.168.43.60/thaitour_user/user_regis.php', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({

        Password: this.state.Password,

        Adress: this.state.Adress,

        City: this.state.City,

        Country: this.state.Country,

        TelNo: this.state.TelNo,

        Email: this.state.Email,
        
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
    <ImageBackground 
    source={require('C:/Application/ThaiTour/Image/bg1.jpg')}
    style={{flex: 1,
      resizeMode: "cover",
      justifyContent: "center"}} 
    >
    <View style={{ flex: 1}}>
      
      <ScrollView keyboardShouldPersistTaps="handled">
        <View style={{ alignItems: 'center' }}>
          <Image
            source={require('../Image/logo.png')}
            style={{
              width: '50%',
              height: 100,
              resizeMode: 'contain',
              margin: 30,
            }}
          />
        </View>
        
        <KeyboardAvoidingView enabled>
        <View style={styles.SectionStyle}>
          <Text style={styles.title}>User Registration Form</Text>
        </View>
        <View style={styles.SectionStyle}>

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Email"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(Email) => this.setState({Email: Email})}
          underlineColorAndroid="transparent"
         
         
        />
        </View>
        <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Password"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(Password) => this.setState({Password: Password})}
         
          secureTextEntry={true}
        />
        </View>
        <View style={styles.SectionStyle}>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Adress"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(Adress) => this.setState({Adress: Adress})}
          
          
        />
        </View>
        <View style={styles.SectionStyle}>

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter City"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(City) => this.setState({City: City})}
          underlineColorAndroid="transparent"
          
          
        />
        </View>
        <View style={styles.SectionStyle}>

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Country"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(Country) => this.setState({Country: Country})}
          underlineColorAndroid="transparent"
         
          
        />
        </View>
        <View style={styles.SectionStyle}>

        <TextInput
          style={styles.inputStyle}
          placeholder="Enter Telephone Number"
          underlineColorAndroid="#F6F6F7"
          onChangeText={(TelNo) => this.setState({TelNo: TelNo})}
          underlineColorAndroid="transparent"
          
          
        />
        </View>
        
        

        <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={this.UserRegistrationFunction}>
            <Text style={styles.buttonTextStyle}>REGISTER</Text>
          </TouchableOpacity>
       
      
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
    </ImageBackground>
  );
  }
};

const styles = StyleSheet.create({
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  buttonStyle: {
    backgroundColor: '#FFC300',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
  },
  inputStyle: {
    flex: 1,
    color: '#000000',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
    backgroundColor: '#FFFFFF'
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  successTextStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    padding: 30,
  },
});
