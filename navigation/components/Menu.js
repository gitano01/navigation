import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Alert, AsyncStorage, BackHandler} from 'react-native';



export default class Menu extends React.Component{

    static navigationOptions ={
        title: 'Menú',
        headerLeft: null,
        headerStyle: {

            backgroundColor: '#FF6C00',
        },

    }

    constructor(props){
        super(props);
        this.state={

            session: false
        }


    }



    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',()=>{


            this.props.navigation.goBack();


        });
    }



    _LogOut = async () => {



        await AsyncStorage.setItem('session', 'false');
        Alert.alert('Sesión finalizada');
        this.props.navigation.navigate('Login');


    }



    render(){

        return(

            <View>
                <Text>Hola chavots que hay we!!</Text>



                <TouchableOpacity style={styles.boton} onPress={()=>this._LogOut()}>
                    <Text style={styles.texto}>
                        Cerrar Session
                    </Text>
                </TouchableOpacity>



            </View>



        );


    }


}


const styles = StyleSheet.create({


    boton:{
        width:150,
        height: 30,
        backgroundColor:'#0000FF'

    },

    texto:{

        color:"#FFFFFF"
    }



});



