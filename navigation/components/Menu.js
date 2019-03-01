import React from 'react';
import {View, Text} from 'react-native';
import Aviso from './AvisoP';



export default class Menu extends React.Component{

    static navigationOptions ={
        title: 'Menú',
        headerStyle: {
            backgroundColor: '#FF6C00',
          },
          
    }
    render(){

        return(

            <View>
                <Text>Hola chavots</Text>
            </View>



        );


    }


}