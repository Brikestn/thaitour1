// ///Import React and Hook we needed
// import React, {Component} from 'react';

// //Import all required component
// import {
//   StyleSheet,
//   TextInput,
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Keyboard,
//   TouchableOpacity,
//   KeyboardAvoidingView,
//   ImageBackground,
// } from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';
// import Loader from './Components/loader';

// class LoginScreen extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       Email: '',
//       Password: '',
//     };
//   }
//   UserLoginFunction = () => {
//     const {Email} = this.state;
//     const {Password} = this.state;

//     fetch(
//       'http://192.168.43.60/thaitour_user/user_login.php?Email='+Email+'&Password='+Password,
//     )
//       .then((response) => response.json())
//       .then((responseJson) => {
//         // If server response message same as Data Matched
//         if (responseJson === 'Data Matched') {
//           //Then open Profile activity and send user email to profile activity.
//           this.props.navigation.navigate('DrawerNavigationRoutes');
//         } else {
//           Alert.alert(responseJson);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };
//   render() {
//   return (
//     <ImageBackground
//       source={require('D:/Application/ThaiTour/Image/bg3.jpg')}
//       style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
//       <View style={styles.mainBody}>
//         <ImageBackground
//           source={require('../Image/laithai1.png')}
//           style={styles.backgroundImage}></ImageBackground>
    
//         <ScrollView keyboardShouldPersistTaps="handled">
//           <View style={{marginTop: 100}}>
//             <KeyboardAvoidingView enabled>
//               <View style={{alignItems: 'center'}}>
//                 <Image
//                   source={require('../Image/logo.png')}
//                   style={{
//                     width: '50%',
//                     height: 100,
//                     resizeMode: 'contain',
//                     margin: 30,
//                   }}
//                 />
//               </View>
//               <View style={styles.SectionStyle}>
//               <TextInput
//                     style={styles.inputStyle}
//                     onChangeText={(Email) => this.setState({Email})}
                  
//                     placeholder="Email"
//                     placeholderTextColor="#778899"
//                     autoCapitalize="none"
//                     keyboardType="email-address"
//                     returnKeyType="next"
//                     blurOnSubmit={false}
//                   />
//                 </View>
//                 <View style={styles.SectionStyle}>
//                   <TextInput
//                     style={styles.inputStyle}
//                     onChangeText={(Password) =>
//                       this.setState({Password})
//                     }
                    
//                     placeholder="Password"
//                     placeholderTextColor="#778899"
//                     keyboardType="default"
//                     onSubmitEditing={Keyboard.dismiss}
//                     blurOnSubmit={false}
//                     secureTextEntry={true}
//                   />
//                 </View>
//                 <TouchableOpacity
//                   style={styles.buttonStyle}
//                   activeOpacity={0.5}
//                   onPress={this.UserLoginFunction}>
//                   <Text style={styles.buttonTextStyle}>LOGIN</Text>
//                 </TouchableOpacity>
//               <Text
//                 style={styles.registerTextStyle}
//                 onPress={() => props.navigation.navigate('RegisterScreen')}>
//                 Register
//               </Text>
//             </KeyboardAvoidingView>
//           </View>
//         </ScrollView>
//       </View>
//     </ImageBackground>
//   );
//   }
// };
// export default LoginScreen;

// const styles = StyleSheet.create({
//   mainBody: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   SectionStyle: {
//     flexDirection: 'row',
//     height: 40,
//     marginTop: 20,
//     marginLeft: 35,
//     marginRight: 35,
//     margin: 10,
//   },
//   buttonStyle: {
//     backgroundColor: '#FFC300',
//     borderWidth: 0,
//     color: '#FFFFFF',
//     borderColor: '#7DE24E',
//     height: 40,
//     alignItems: 'center',
//     borderRadius: 30,
//     marginLeft: 35,
//     marginRight: 35,
//     marginTop: 20,
//     marginBottom: 20,
//   },
//   buttonTextStyle: {
//     color: '#FFFFFF',
//     paddingVertical: 10,
//     fontSize: 16,
//   },
//   inputStyle: {
//     flex: 1,
//     color: 'white',
//     paddingLeft: 15,
//     paddingRight: 15,
//     borderWidth: 1,
//     borderRadius: 30,
//     borderColor: 'white',
//   },
//   registerTextStyle: {
//     color: '#FFFFFF',
//     textAlign: 'center',
//     fontWeight: 'bold',
//     fontSize: 14,
//   },
//   errorTextStyle: {
//     color: 'red',
//     textAlign: 'center',
//     fontSize: 14,
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     justifyContent: 'center',
//   },
//   backgroundImage: {
//     flex: 1,
//     width: null,
//     height: null,
//     resizeMode: 'cover',
//   },
// });


//Import React and Hook we needed
import React, {useState} from 'react';

//Import all required component
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Loader from './Components/loader';

const LoginScreen = (props) => {
  let [userEmail, setUserEmail] = useState('');
  let [userPassword, setUserPassword] = useState('');
  let [loading, setLoading] = useState(false);
  let [errortext, setErrortext] = useState('');

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }
    setLoading(true);
    var dataToSend = {user_email: userEmail, user_password: userPassword};
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('https://aboutreact.herokuapp.com/login.php', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
        if (responseJson.status == 1) {
          AsyncStorage.setItem('user_id', responseJson.data[0].user_id);
          console.log(responseJson.data[0].user_id);
          props.navigation.navigate('DrawerNavigationRoutes');
        } else {
          setErrortext('Please check your email id or password');
          console.log('Please check your email id or password');
        }
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <ImageBackground
      source={require('C:/Application/ThaiTour/Image/bg3.jpg')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.mainBody}>
        <ImageBackground
          source={require('../Image/laithai1.png')}
          style={styles.backgroundImage}></ImageBackground>
        <Loader loading={loading} />
        <ScrollView keyboardShouldPersistTaps="handled">
          <View style={{marginTop: 100}}>
            <KeyboardAvoidingView enabled>
              <View style={{alignItems: 'center'}}>
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
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                  underlineColorAndroid="#FFFFFF"
                  placeholder="Enter Email" //dummy@abc.com
                  placeholderTextColor="#F6F6F7"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  ref={(ref) => {
                    this._emailinput = ref;
                  }}
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    this._passwordinput && this._passwordinput.focus()
                  }
                  blurOnSubmit={false}
                />
              </View>
              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                  underlineColorAndroid="#FFFFFF"
                  placeholder="Enter Password" //12345
                  placeholderTextColor="#F6F6F7"
                  keyboardType="default"
                  ref={(ref) => {
                    this._passwordinput = ref;
                  }}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                />
              </View>
              {errortext != '' ? (
                <Text style={styles.errorTextStyle}> {errortext} </Text>
              ) : null}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>LOGIN</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
                onPress={() => props.navigation.navigate('RegisterScreen')}>
                New Here ? Register
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
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
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: 'white',
  },
  registerTextStyle: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});
