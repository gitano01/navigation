import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

export default class Products extends Component<{}> {

	render(){
		return(
		    <View style={styles.container}>

  		    </View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
});