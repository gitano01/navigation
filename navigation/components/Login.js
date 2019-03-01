
import React  from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, ToastAndroid} from "react-native";


export default class Login extends React.Component{

    static navigationOptions = {
        header: null,
        
            

    }
   
    constructor(props){
        super(props);
        this.state ={

            user:"",
            flag: false

        } 

      


    }

    InputCheck = () =>{

        var userIn = "victor";
        var pattern= /^[a-zA-Z0-9_\@]*$/;
        const {user} = this.state;
        const {flag} = this.state;
        (user == "") ? ToastAndroid.show("El campo usuario no debe estar vacío", ToastAndroid.BOTTOM):
            pattern.test(user)? (user == userIn ) ? this.navegar(flag) :
                ToastAndroid.show("El usuario no coincide", ToastAndroid.BOTTOM):ToastAndroid.show("El formato no es el adecuado", ToastAndroid.BOTTOM)




    }

    navegar(band){
        
              
        
        if (band == false){
            this.props.navigation.navigate('Aviso') 
            
        
        }else{this.props.navigation.navigate('Menu') }
        this.setState({flag:true})
        ToastAndroid.show(band.toString(),ToastAndroid.SHORT)
    }


  render() {

    

        return (


            <View style={styles.container} >


                <View style={styles.borde}>
                    <Image style={styles.image} source={require('../images/icono-app-08.png')}/>
                    
                    <TextInput style={styles.inputs} placeholder={"Usuario"} onChangeText={ user => this.setState({user})}/>
                    <TouchableOpacity style={styles.buttonContainer}

                                      onPress={this.InputCheck}
                    >
                        <Text  style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity style={styles.buttonContainer2}
                                  onPress={() => this.props.navigation.navigate('ScanQR')}
                >
                    <Image style={styles.image2} source={require('../images/qrcode.png')}/>
                </TouchableOpacity>


            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6C00',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#000'
    },
    instructions: {
        textAlign: 'center',
        color: '#000',
        marginBottom: 5,
    },
    borde: {

        borderColor: "#9dcee9",
        borderWidth:1,
        borderRadius: 5,
        width: 250,
        height:300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FFF",
        opacity: 0.7,


    },

    inputs :{


        width: 200,
        height: 40,
        backgroundColor: "#FFF",
        borderRadius: 5,
        borderWidth: 1,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',

    },

    boton: {

        width:200,
        height:30,
        backgroundColor: "#1B94F4",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:25,
        borderRadius: 5,


    },



    image:{
        width: 78,
        height: 78,
        zIndex: 1,
        top:5,
        position: 'relative',
        marginBottom:15,

    },
    image2:{
        width: 78,
        height: 78,
        

    },


    buttonContainer: {

        width:200,
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF6C00',
        borderRadius: 5,
         },

    buttonContainer2: {

        width:90,
        height:89,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE9900',
        borderRadius: 5,
        marginTop:25,
        borderWidth: 0.5,
        borderColor:"white"
    },
    buttonText: {
        textAlign: 'center',
        color: "#FFF",
        fontSize: 18
    }


});

