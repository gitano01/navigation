import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state = { timer: 0 };
    }


    render() {
        return (

                    <View style={styles.container}>
                        <View style={styles.logoContainer}>
                        <Image style={styles.image2} source={require('../images/icono-app-07.jpg')}/>
                        <Text style={styles.title}>ISLA NATURA</Text>
                        <Text style={styles.title}>APP</Text>
                        </View>
                    </View>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF6C00',
        flex: 1,

    },

    title: {
        fontWeight: 'bold',
        fontSize: 28,
        color: 'black'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 180,
        borderBottomEndRadius: 180,
        flexGrow: -1,
        height:600,
        marginBottom: 100
    },
    image2:{
        width: 78,
        height: 78,
        

    },
    logo:{
        flex: 1,
        width: 300,
        height: 300,

        justifyContent: 'center',
    },

})