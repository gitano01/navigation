import React from 'react';
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';
import Login from './Login';
import ScanQR from "./ScanQR";
import Menu from "./Menu";
import AvisoP from "./AvisoP";
import AuthLoadingScreen from './AuthLoadingScreen';





const AppStack = createStackNavigator({


        

    Menu: {screen: Menu}


     }
    );

const AuthStack = createStackNavigator({Login: {screen: Login}, Aviso:{screen: AvisoP},ScanQR: {screen: ScanQR},});


const Navigator = createAppContainer(createSwitchNavigator(
    {

        AuthLoading: {screen: AuthLoadingScreen},
        AuthStack: {screen: AuthStack},
        AppStack: {screen: AppStack}
    },
    {
    initialRouteName: 'AuthLoading',
    }
));

export default Navigator;