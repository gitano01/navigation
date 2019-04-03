import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  Image
} from 'react-native';

import ButtonQR from '../components/ButtonQR';
import Form from '../components/Form';
import Logo from '../components/Logo';

export default class Login extends React.Component{

    render(){
		return(
      <ImageBackground source={require('../images/Login.jpg')} style={{width: '100%', height: '100%'}}>
		    <Logo/>
        <Text style={styles.textoSesion}>Inicia Sesión</Text>
          <ButtonQR/>
        <Form/>
      </ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  textoSesion:{
    textAlign: 'center',
    color: '#fff',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 20
  }
});

