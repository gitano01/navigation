import React from "react";
import {
    ScrollView,
    Text,
    StyleSheet,
    View,
    TouchableOpacity,
    Alert,
    CheckBox,
    AsyncStorage,
    BackHandler
} from "react-native";
import ScanQR from './ScanQR';


export default class AvisoP extends React.Component{

    static navigationOptions ={  title:'Aviso de privacidad',
        headerLeft: null,
    headerStyle: {
        backgroundColor: '#FF6C00',
      },
      
    }

    constructor(){
        super();
        this.state={
            check:false,
            disabled:true,
            session: false

        }
    }
    componentDidMount(){
        BackHandler.addEventListener('hardwareBackPress',()=>{


            this._LogOut();


        });
    }


    checkBoxTest() {

        
        this.setState({check: !this.state.check})
       

        this.setState({disabled:!this.state.disabled})

    }


    _savePrivacy = async() => {



        const {check} = this.state;

        await AsyncStorage.setItem('privacy', JSON.stringify(check));

        Alert.alert('successfull');

        this.props.navigation.navigate('Menu')



    }

    _LogOut = async () => {

        const {session} = this.state;

        await AsyncStorage.setItem('session', JSON.stringify(session));

        this.props.navigation.navigate('Login');


    }



    render(){
        return (

            <ScrollView >
                <View style={styles.contenedor}>
                    <Text style={styles.texto}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vehicula ipsum a arcu cursus vitae congue. Sed risus ultricies tristique nulla.</Text>
                    <Text style={styles.texto}>Ultricies integer quis auctor elit sed vulputate mi. Quam nulla porttitor massa id. Ipsum dolor sit amet consectetur adipiscing. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Aenean et tortor at risus viverra adipiscing. Eget mi proin sed libero. Aliquam id diam maecenas ultricies mi eget mauris pharetra et.</Text>
                    <Text style={styles.texto}> Turpis nunc eget lorem dolor. Morbi tincidunt ornare massa eget.
                        Rhoncus urna neque viverra justo.{'\n'}
                        Amet consectetur adipiscing elit ut aliquam.</Text>
                    <Text style={styles.texto}> Non tellus orci ac auctor augue mauris augue.
                        Odio pellentesque diam volutpat commodo sed egestas.
                        Turpis cursus in hac habitasse platea dictumst quisque sagittis purus.
                        Convallis aenean et tortor at. Aliquet eget sit amet tellus cras adipiscing enim.
                        Vel risus commodo viverra maecenas.</Text>
                    <Text style={styles.texto}> Aliquet enim tortor at auctor urna.
                        Sed augue lacus viverra vitae congue eu consequat.
                        Sit amet nisl suscipit adipiscing.
                        Dignissim sodales ut eu sem integer.

                    Sodales ut etiam sit amet.{'\n'}</Text>
                    <Text>{}</Text>
                    <View style={{flexDirection:'row'}}>
                    <CheckBox style={styles.checkBox} value={this.state.check} onChange={()=> this.checkBoxTest()}/>
                        <Text onPress={()=> this.checkBoxTest()}>Aceptar terminos y condiciones</Text>
                    </View>
                </View>
                <View style={styles.contenedor2}>

                <TouchableOpacity style={styles.buttonContainer2}
                                      onPress={ () =>{ this._LogOut()}}
                    >
                        <Text style={styles.buttonText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.buttonContainer3} onPress={ () =>{this._savePrivacy()}}
                disabled={this.state.disabled}>
                    <Text style={styles.buttonText}>Siguiente</Text>
                </TouchableOpacity>

                </View>


            </ScrollView>




        );




}




}
const styles = StyleSheet.create({

    contenedor:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    contenedor2:{
        flex: 1,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        flexDirection:'row',
        alignItems:'center'
    },

    texto:{


            color: '#000',
            marginTop:10,
            textAlign: 'left',
            paddingLeft: 15,
            paddingRight:15

    },
    buttonContainer2: {

        width:100,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cc3300',
        borderRadius: 5,
        marginTop:25,
        marginBottom:25,
    },

    buttonContainer3: {

        width:100,
        height:40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#325270',
        borderRadius: 5,
        marginTop:25,
        marginLeft:25,
        marginBottom:25,
    },

    buttonText:{

        color: '#FFF'
    },

    checkBox:{
        color: '#FE9900',
    }



});