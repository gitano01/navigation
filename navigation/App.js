import React from 'react';
import Splash from './components/Splash';
import Navigator from './components/AppNavigator';


export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           

            currentScreen: 'Splash'};

        setTimeout( ()=>{this.setState({currentScreen: 'Login'})},500)
        }



    render(){

        const {currentScreen} = this.state
        let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Navigator/>
        return(
            
            mainScreen
            /*<Navigator style={{backgroundColor:"green"}}/>*/
        );
    }

}

