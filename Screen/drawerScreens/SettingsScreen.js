/* This is an Login Registration example from https://aboutreact.com/ */
/* https://aboutreact.com/react-native-login-and-signup/ */

//Import React
import React from 'react';

//Import all required component
import {View, Text, Image, Button, Redirect} from 'react-native';
import {ImageBackground} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';


const SettingsScreen = ({navigation}) => {
  return (
    <ImageBackground
    source={require('C:/Application/ThaiTour/Image/bg1.jpg')}
    style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
    <View style={{ flex: 1, alignItems: 'center', marginTop: 100 }}>
     <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="addPlace"
            color="#000000"
            onPress={() => navigation.navigate('addPlace')}
          />
        </View>
        <View style={[{width: '70%', margin: 10}]}>
          <Button
            title="addTaxi"
            color="#000000"
            onPress={() => navigation.navigate('addTaxi')}
          />
        </View>
    </View>
    </ImageBackground>
  );
};
export default SettingsScreen;

// import React, {Component} from 'react';

// import {StyleSheet, View, TextInput, Button, Text, Alert} from 'react-native';

// export default class Project extends Component {
//   constructor() {
//     super();

//     this.state = {
//       Password: '',

//       Adress: '',

//       City: '',

//       Country: '',

//       TelNo: '',

//       Email: '',
//     };
//   }

//   UserRegistrationFunction = () => {
//     fetch('http://192.168.43.60/thaitour_user/user_regis.php', {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({

//         Password: this.state.Password,

//         Adress: this.state.Adress,

//         City: this.state.City,

//         Country: this.state.Country,

//         TelNo: this.state.TelNo,

//         Email: this.state.Email,
        
//       }),
//     })
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // Showing response message coming from server after inserting records.
//         Alert.alert(responseJson);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   render() {
//     return (
//       <View style={styles.MainContainer}>
//         <Text style={styles.title}>User Registration Form</Text>

//         <TextInput
//           placeholder="Enter UserName"
//           onChangeText={(UserName) => this.setState({UserName: UserName})}
//           style={styles.TextInputStyleClass}
//         />

//         <TextInput
//           placeholder="Enter Password"
//           onChangeText={(Password) => this.setState({Password: Password})}
//           style={styles.TextInputStyleClass}
//           secureTextEntry={true}
//         />

//         <TextInput
//           placeholder="Enter Adress"
//           onChangeText={(Adress) => this.setState({Adress: Adress})}
//           style={styles.TextInputStyleClass}
          
//         />

//         <TextInput
//           placeholder="Enter City"
//           onChangeText={(City) => this.setState({City: City})}
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyleClass}
          
//         />

//         <TextInput
//           placeholder="Enter Country"
//           onChangeText={(Country) => this.setState({Country: Country})}
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyleClass}
          
//         />

//         <TextInput
//           placeholder="Enter Telephone Number"
//           onChangeText={(TelNo) => this.setState({TelNo: TelNo})}
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyleClass}
          
//         />

//         <TextInput
//           placeholder="Enter Email"
//           onChangeText={(Email) => this.setState({Email: Email})}
//           underlineColorAndroid="transparent"
//           style={styles.TextInputStyleClass}
         
//         />

//         <Button
//           title="Click Here To Register"
//           onPress={this.UserRegistrationFunction}
//           color="#2196F3"
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   MainContainer: {
//     justifyContent: 'center',
//     flex: 1,
//     margin: 10,
//   },

//   TextInputStyleClass: {
//     textAlign: 'center',
//     marginBottom: 7,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#2196F3',
//     borderRadius: 5,
//   },

//   title: {
//     fontSize: 22,
//     color: '#009688',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
// });
