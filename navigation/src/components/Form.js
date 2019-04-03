import React, { Component } from 'react';
import {
  StyleSheet, Text, View,
  TextInput, TouchableOpacity, Alert
} from 'react-native';

export default class Form extends React.Component{

  constructor(props){
      super(props);
  }




    render(){

		return(
      <View style={styles.container}>
        <View style={styles.infoContainer}>
        <Text style={styles.infoText}>O</Text>
            <Text style={styles.infoText}>Ingresa tu usuario:</Text>
            <TextInput style={styles.input}
              placeholderTextColor='rgba(255,255,255,0.8)'
              autoCorrect={false}
                       />
            <TouchableOpacity style={styles.buttonContainer} onPress={()=> this.props.navigation.navigate('Privacity', {screen: Privacity})} >
                <Text style={styles.infoText}>Entrar</Text>
            </TouchableOpacity>
      </View>
  </View>
		)
	}



}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
},
infoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 30,
    height: 200,
    padding: 0,
    paddingHorizontal: 50,
},
input: {
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    marginBottom: 20,
},
buttonContainer: {
    paddingVertical: 15
},
infoText: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20
}
});