//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, StatusBar, Dimensions,TouchableHighlight, Alert, ToastAndroid} from 'react-native';
// import all basic components
import { CameraKitCameraScreen, } from 'react-native-camera-kit';
//import CameraKitCameraScreen we are going to use.

export default class ScanQR extends Component {
    static navigationOptions = {
        title:'Escanea el código QR', 
        headerStyle: {
            backgroundColor: '#FF6C00',
          },
          

    }
    constructor() {
        super();
        this.state = {
            //variable to hold the qr value
            qrvalue: '',
        };
    }
    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        
        this.setState({ qrvalue: qrvalue });
        

            


    }
    onContinueScan() {
        //To continue Scanning
        this.setState({ qrvalue: '' });
    }
    componentDidMount() {
        //Setting up Status Bar
        StatusBar.setBarStyle('light-content');
    }
    render() {
        //let displayModal;
        //If qrvalue is set then return this view
        if (this.state.qrvalue) {
            var comparador="victor"
            var cadena= this.state.qrvalue.toString;
            this.props.navigation.navigate('Aviso')

            //(comparador === cadena ) ? this.props.navigation.navigate('Aviso') : this.props.navigation.navigate('Login')

            

            /*if(comparador == this.state.qrvalue.toString){
                this.props.navigation.navigate('Aviso') 
            }else{
                this.props.navigation.navigate('Login') 
            }*/

           /* displayModal = (
                <View
                    style={{
                        backgroundColor: '#000000',
                        position: 'absolute',
                        height: Dimensions.get('window').height,
                        width: Dimensions.get('window').width,
                    }}>

                    <View style={{ alignSelf: 'center' }}>
                        <Text style={{color:'white'}}>{'\n\n'}
                            Datos encontrados:{'\n'}
                            <Text style={{ color: '#FE9900' }}>{this.state.qrvalue}</Text>
                        </Text>
                    </View>
                    <TouchableHighlight  /*onPress = {() =>  {Alert.alert('Anuncio de privacidad')}} onPress = {()=>this.props.navigation.navigate('Aviso')} style={{
                        marginTop: 180,
                        alignSelf: 'center',
                        padding: 10,
                        backgroundColor: '#FE9900',
                    }}>

                    <View>
                        <Text style={{ color: '#FFFFFF', fontSize: 12 }}>Siguiente</Text>
                    </View>
                    </TouchableHighlight>
                    <TouchableHighlight
                        onPress={() => this.onContinueScan()}
                        style={{
                            marginTop: 10,
                            alignSelf: 'center',
                            padding: 10,
                            backgroundColor: '#FE9900',
                        }}>
                        <View>
                            <Text style={{ color: '#FFFFFF', fontSize: 12 }}>
                                Escanear de nuevo
                            </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            );
            return displayModal;*/
        }
        //Initial/After Reset return this view
        return (
            <View style={{ flex: 1 }}>
                <CameraKitCameraScreen

                    scanBarcode={true}
                    //Can restrict for the QR Code only
                    laserColor={'red'}
                    //Color can be of your choice
                    frameColor={'white'}
                    //If frame is visible then frame color
                    colorForScannerFrame={'black'}
                    //Scanner Frame color
                    onReadCode={event =>
                        this.onBarcodeScan(event.nativeEvent.codeStringValue)
                    }
                />
            </View>
        );
    }
}

