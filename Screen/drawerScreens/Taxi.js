import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ImageBackground,
} from 'react-native';
// import Gallery from 'react-native-image-gallery';

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('http://192.168.43.60/thaitour_user/taxi_print.php')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({data: responseJson});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  clickEventListener() {
    Alert.alert('Success', 'Product has beed added to cart');
  }

  render() {
    return (
      <ImageBackground
      source={require('C:/Application/ThaiTour/Image/bg3.jpg')}
      style={{flex: 1, resizeMode: 'cover', justifyContent: 'center'}}>
      <View style={styles.container}>
        <ScrollView>
          <View style={{alignItems: 'center', marginHorizontal: 30}}>
            <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#F1C40F',
                    padding: 10,
                    margin: 10,
                    borderRadius: 10,
                  }}>
                  <Image
                      style={styles.picsize}
                      source={require('C:/Application/ThaiTour/Image/taxi.jpg')}
                    />
                  <Text style={{color: '#000000', fontWeight: 'bold'}}>
                    <Text style={{color: '#000000'}}>
                     {/* TaxiInfo: {item.taxi_ID} */}
                    </Text>
                    {'\n'}ID Card Number: {item.ID_Card_Number}
                    {'\n'}Driver name: {item.Driver_name}
                    {'\n'}License plate: {item.License_plate}
                    {'\n'}Car Registration: {item.Car_Registration}
                    {'\n'}Telephone: {item.Tel}
                  </Text>
                </View>
              )}
            />
            {/* <Text style={styles.name}>Super Black T-Shirt</Text>
            <Text style={styles.price}>$ 12.22</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec
            </Text> */}
          </View>
        </ScrollView>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  productImg: {
    width: 200,
    height: 200,
  },
  name: {
    fontSize: 28,
    color: '#696969',
    fontWeight: 'bold',
  },
  price: {
    marginTop: 10,
    fontSize: 18,
    color: 'green',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: '#696969',
  },
  star: {
    width: 40,
    height: 40,
  },
  btnColor: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginHorizontal: 3,
  },
  btnSize: {
    height: 40,
    width: 40,
    borderRadius: 40,
    borderColor: '#778899',
    borderWidth: 1,
    marginHorizontal: 3,
    backgroundColor: 'white',

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  starContainer: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentColors: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  contentSize: {
    justifyContent: 'center',
    marginHorizontal: 30,
    flexDirection: 'row',
    marginTop: 20,
  },
  separator: {
    height: 2,
    backgroundColor: '#eeeeee',
    marginTop: 20,
    marginHorizontal: 30,
  },
  shareButton: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: '#00BFFF',
  },
  shareButtonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  addToCarContainer: {
    marginHorizontal: 30,
  },
  picsize: {
    height: 200,
    width: 200,
  },
});
// import React, { Component } from 'react';

// import { StyleSheet, View, Alert, TextInput, Button, Text, Platform, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';

// import { StackNavigator } from 'react-navigation';

// class MainActivity extends Component {

//   static navigationOptions =
//   {
//      title: 'MainActivity',
//   };

// constructor(props) {

//    super(props)

//    this.state = {

//      taxi_ID: '',
//      Driver_name: '',
//      License_plate: '',
//      Car_Registration: '',
//      Tel: '',
//    }

//  }

//  InsertStudentRecordsToServer = () =>{

//       fetch('http://192.168.43.60/thaitour_user/taxi_insert.php', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({

//         Driver_name : this.state.Driver_name,

//         License_plate : this.state.License_plate,

//         Car_Registration: this.Car_Registration,
        
//         Tel: this.Tel

//       })

//       }).then((response) => response.json())
//           .then((responseJson) => {

//             // Showing response message coming from server after inserting records.
//             Alert.alert(responseJson);

//           }).catch((error) => {
//             console.error(error);
//           });

// }

//  GoTo_Show_StudentList_Activity_Function = () =>
//   {
//     this.props.navigation.navigate('Second');
    
//   }

//  render() {
//    return (

// <View style={styles.MainContainer}>


//        <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Student Registration Form </Text>
 
//        <TextInput
         
//          placeholder="Enter Driver Name"

//          onChangeText={ TextInputValue => this.setState({ Driver_name : TextInputValue }) }

//          underlineColorAndroid='transparent'

//          style={styles.TextInputStyleClass}
//        />

//       <TextInput
         
//          placeholder="Enter License Plate"

//          onChangeText={ TextInputValue => this.setState({ License_plate : TextInputValue }) }

//          underlineColorAndroid='transparent'

//          style={styles.TextInputStyleClass}
//        />

//       <TextInput
         
//          placeholder="Enter Car Registration"

//          onChangeText={ TextInputValue => this.setState({ Car_Registration : TextInputValue }) }

//          underlineColorAndroid='transparent'

//          style={styles.TextInputStyleClass}
//        />

//        <TextInput

//          placeholder="Enter Telephone Number"

//          onChangeText={ TextInputValue => this.setState({ Tel : TextInputValue }) }

//          underlineColorAndroid='transparent'

//          style={styles.TextInputStyleClass}
//        />

//       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.InsertStudentRecordsToServer} >

//         <Text style={styles.TextStyle}> INSERT TAXI RECORD TO SERVER </Text>

//       </TouchableOpacity>

//       <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.GoTo_Show_StudentList_Activity_Function} >

//         <Text style={styles.TextStyle}> SHOW ALL INSERTED TAXI RECORDS IN LISTVIEW </Text>

//       </TouchableOpacity>
 

// </View>
           
//    );
//  }
// }

// class ShowStudentListActivity extends Component {

//   constructor(props) { 

//     super(props);

//     this.state = {

//       isLoading: true

//     }
//   }

//   static navigationOptions =
//   {
//      title: 'ShowTaxiListActivity',
//   };

//   componentDidMount() {
    
//        return fetch('http://192.168.43.60/thaitour_user/taxi_print.php')
//          .then((response) => response.json())
//          .then((responseJson) => {
//            let ds = new FlatList.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
//            this.setState({
//              isLoading: false,
//              dataSource: ds.cloneWithRows(responseJson),
//            }, function() {
//              // In this block you can do something with new state.
//            });
//          })
//          .catch((error) => {
//            console.error(error);
//          });
//      }
    
//      GetStudentIDFunction=(taxi_ID,Driver_name,License_plate,Car_Registration,Tel)=>{

//           this.props.navigation.navigate('Third', { 

//             taxi_ID : taxi_ID,
//             Driver_name : Driver_name,
//             License_plate : License_plate,
//             Car_Registration : Car_Registration,
//             Tel : Tel

//           });

//      }

//      ListViewItemSeparator = () => {
//        return (
//          <View
//            style={{
//              height: .5,
//              width: "100%",
//              backgroundColor: "#000",
//            }}
//          />
//        );
//      }

//      render() {
//       if (this.state.isLoading) {
//         return (
//           <View style={{flex: 1, paddingTop: 20}}>
//             <ActivityIndicator />
//           </View>
//         );
//       }
   
//       return (
   
//         <View style={styles.MainContainer_For_Show_StudentList_Activity}>
   
//           <FlatList
   
//             dataSource={this.state.dataSource}
   
//             renderSeparator= {this.ListViewItemSeparator}
   
//             renderRow={ (rowData) => <Text style={styles.rowViewContainer} 

//                       onPress={this.GetStudentIDFunction.bind(
//                         this, rowData.taxi_ID,
//                          rowData.Driver_name, 
//                          rowData.License_plate, 
//                          rowData.Car_Registration, 
//                          rowData.Tel
//                          )} > 

//                       {rowData.Driver_name} 
                      
//                       </Text> }
   
//           />
   
//         </View>
//       );
//     }

// }

// class EditStudentRecordActivity extends Component {
  
//   constructor(props) {
    
//        super(props)
    
//        this.state = {
    
//          taxi_ID: '',
//          Driver_name: '',
//          License_plate: '',
//          Car_Registration: '',
//          Tel: '',
    
//        }
    
//      }

//      componentDidMount(){

//       // Received Student Details Sent From Previous Activity and Set Into State.
//       this.setState({ 
//         taxi_ID : this.props.navigation.state.params.taxi_ID,
//         Driver_name: this.props.navigation.state.params.Driver_name,
//         License_plate: this.props.navigation.state.params.License_plate,
//         Car_Registration: this.props.navigation.state.params.Car_Registration,
//         Tel: this.props.navigation.state.params.Tel,
//       })

//      }
  
//     static navigationOptions =
//     {
//        title: 'EditTaxi',
//     };

//     UpdateStudentRecord = () =>{
      
//             fetch('http://192.168.43.60/thaitour_user/taxi_update.php', {
//             method: 'POST',
//             headers: {
//               'Accept': 'application/json',
//               'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
      
//               taxi_ID : this.state.taxi_ID,

//               Driver_name : this.state.Driver_name,
      
//               License_plate : this.state.License_plate,
      
//               Car_Registration : this.state.Car_Registration,
      
//               Tel: this.state.Tel
      
//             })
      
//             }).then((response) => response.json())
//                 .then((responseJson) => {
      
//                   // Showing response message coming from server updating records.
//                   Alert.alert(responseJson);
      
//                 }).catch((error) => {
//                   console.error(error);
//                 });
      
//       }


//     DeleteStudentRecord = () =>{
        
//           fetch('https://reactnativecode.000webhostapp.com/Student/DeleteStudentRecord.php', {
//           method: 'POST',
//           headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
        
//             taxi_ID : this.state.taxi_ID
        
//           })
        
//           }).then((response) => response.json())
//           .then((responseJson) => {
        
//             // Showing response message coming from server after inserting records.
//             Alert.alert(responseJson);
        
//           }).catch((error) => {
//              console.error(error);
//           });

//           this.props.navigation.navigate('First');

//       }

//     render() {

//       return (
   
//    <View style={styles.MainContainer}>
   
//           <Text style={{fontSize: 20, textAlign: 'center', marginBottom: 7}}> Edit Student Record Form </Text>
    
//           <TextInput
            
//             placeholder="Driver Name Shows Here"
            
//             value={this.state.Driver_Name}
   
//             onChangeText={ TextInputValue => this.setState({ Driver_Name : TextInputValue }) }
   
//             underlineColorAndroid='transparent'
   
//             style={styles.TextInputStyleClass}
//           />
   
//          <TextInput
            
//             placeholder="License Plate Class Shows Here"

//             value={this.state.License_plate}
   
//             onChangeText={ TextInputValue => this.setState({ License_plate : TextInputValue }) }
   
//             underlineColorAndroid='transparent'
   
//             style={styles.TextInputStyleClass}
//           />
   
//          <TextInput
            
//             placeholder="Car Registration Shows Here"

//             value={this.state.Car_Registration}
   
//             onChangeText={ TextInputValue => this.setState({ Car_Registration : TextInputValue }) }
   
//             underlineColorAndroid='transparent'
   
//             style={styles.TextInputStyleClass}
//           />
   
//           <TextInput
   
//             placeholder="Telephone Number Shows Here"

//             value={this.state.Tel}
   
//             onChangeText={ TextInputValue => this.setState({ Tel : TextInputValue }) }
   
//             underlineColorAndroid='transparent'
   
//             style={styles.TextInputStyleClass}
//           />
   
//          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.UpdateStudentRecord} >
   
//             <Text style={styles.TextStyle}> UPDATE STUDENT RECORD </Text>
   
//          </TouchableOpacity>
   
//          <TouchableOpacity activeOpacity = { .4 } style={styles.TouchableOpacityStyle} onPress={this.DeleteStudentRecord} >
   
//             <Text style={styles.TextStyle}> DELETE CURRENT RECORD </Text>
   
//          </TouchableOpacity>
    
   
//    </View>
              
//       );
//     }

// }

// export default Taxi = StackNavigator(

//   {

//     First: { screen: MainActivity },

//     Second: { screen: ShowStudentListActivity },

//     Third: { screen: EditStudentRecordActivity }

//   });

// const styles = StyleSheet.create({

//   MainContainer :{

//     alignItems: 'center',
//     flex:1,
//     paddingTop: 30,
//     backgroundColor: '#fff'

//   },

//   MainContainer_For_Show_StudentList_Activity :{
    
//     flex:1,
//     paddingTop: (Platform.OS == 'ios') ? 20 : 0,
//     marginLeft: 5,
//     marginRight: 5
    
//     },

//   TextInputStyleClass: {

//   textAlign: 'center',
//   width: '90%',
//   marginBottom: 7,
//   height: 40,
//   borderWidth: 1,
//   borderColor: '#FF5722',
//   borderRadius: 5 ,

//   },

//   TouchableOpacityStyle: {

//     paddingTop:10,
//     paddingBottom:10,
//     borderRadius:5,
//     marginBottom:7,
//     width: '90%',
//     backgroundColor: '#00BCD4'

//   },

//   TextStyle:{
//     color:'#fff',
//     textAlign:'center',
//   },

//   rowViewContainer: {
//     fontSize: 20,
//     paddingRight: 10,
//     paddingTop: 10,
//     paddingBottom: 10,
//   }

// });