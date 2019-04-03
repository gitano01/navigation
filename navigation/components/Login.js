import React  from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, AsyncStorage} from "react-native";



export default class Login extends React.Component{

    static navigationOptions = {
        header: null,
    }

    constructor(props){
        super(props);
        this.state ={

            usuario:'',
            session: false,



        }

    }


    _saveSessionAsync = async () => {

        const {session} = this.state;


        AsyncStorage.setItem('session',JSON.stringify(session));





    }








    Login = async () => {

        const {usuario} = this.state;

        var cad="";

        var user= "";

        var privacy =  await AsyncStorage.getItem('privacy');


        fetch("http://192.168.13.180:3073/api/v1/usuarios/find_by_user?username=" + usuario.toString() ,{

            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            }


        })
            .then(res => res.json())
            .then(response => {

                cad = JSON.stringify(response.code);



                if (cad == "404"){


                    Alert.alert("No se encuentra el usuario");
                }else{

                    user = JSON.stringify(response.usuario.username);
                    Alert.alert("Bienvenido a Isla Natura App " +"\n"+ user );

                    this.setState({session: true});
                    this.props.navigation.navigate((privacy == 'true' ? 'Menu' : 'Aviso'));
                    this._saveSessionAsync();
                }

            })
            .done();

    }


    render() {
        /*  if(this.state({session}) == true){
              this.props.navigation.navigate('Menu')

          }else{*/


        return (


            <View style={styles.container}>




                <View style={styles.borde}>



                    <Image style={styles.image}
                           source={require('../images/icono-app-08.png')}/>

                    <TextInput style={styles.inputs} placeholder={"Usuario"}
                               onChangeText={usuario => this.setState({usuario})}/>
                    <TouchableOpacity style={styles.buttonContainer}

                                      onPress={() =>this.Login()}
                    >
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>


                </View>

                <TouchableOpacity style={styles.buttonContainer2}onPress={() => this.props.navigation.navigate('ScanQR')}>
                    <Image style={styles.image2}
                           source={require('../images/qrcode.png')}/>
                </TouchableOpacity>


            </View>

        );


    }
    //  }
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
        alignItems: 'center'

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
    buttonContainer3: {

        width:200,
        height:35,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
        borderRadius: 5,
    },

    buttonText: {
        textAlign: 'center',
        color: "#FFF",
        fontSize: 18
    }


});