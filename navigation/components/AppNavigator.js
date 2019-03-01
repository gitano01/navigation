import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import AuthLoadingScreen from './AuthLoadingScreen';
import Login from './Login';
import ScanQR from "./ScanQR";
import Menu from "./Menu";
import AvisoP from "./AvisoP";


const AppStack = createStackNavigator({
        
    
    Aviso:{screen: AvisoP},
    Menu: {screen: Menu},
     },
    /*{
        initialRouteName: 'Login'
    },*/
    );

const AuthStack = createStackNavigator({Login: {screen: Login}, ScanQR:{screen: ScanQR}});


const Navigator = createAppContainer(createSwitchNavigator({

    AuthLoadingScreen: {screen: AuthLoadingScreen},
    AuthStack: {screen: AuthStack}, 
    AppStack: {screen: AppStack},
    }    
));

export default Navigator;