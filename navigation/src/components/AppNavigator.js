import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Login from '../pages/Login';
import ScanQR from "../pages/ScanQR";
import Privacity from "../pages/Privacity";
import Swipper from "../pages/Swipper";



const AppStack = createStackNavigator({

        Swipper: {screen: Swipper},
        Login:{screen:Login},
        Aviso:{screen: Privacity},
        ScanQR: {screen: ScanQR}
    },
    {
        initialRouteName: 'Swipper'
    },
);

const Navigator = createAppContainer(AppStack)
export default Navigator;