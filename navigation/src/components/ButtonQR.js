import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Platform
} from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";

export default class ButtonQR extends React.Component{
    constructor(props){
        super(props);
    }

	render(){

		return(
		    <View style={styles.container}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() => this.props.navigation.navigate("") }>
            <Text style={styles.buttonText}>
              <Icon name={Platform.OS === "ios" ? "ios-camera" : "md-camera"} color="#FFF" size={25}/> CÓDIGO QR
            </Text>
          </TouchableOpacity>
  		  </View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  buttonContainer: {
    backgroundColor: '#4baa2b',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 2,
},
buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
}
});