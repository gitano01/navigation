//This is an example code to Scan QR code//
import React, { Component } from 'react';
import {  View, StatusBar,
    Linking, Alert } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';


export default class ScanQR extends Component {

    static navigationOptions ={  title:'Escanea el codigo QR',
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
    /*onContinueScan() {
        //To continue Scanning
        this.setState({ qrvalue: '' });
    }*/
    componentDidMount() {
        //Setting up Status Bar
        StatusBar.setBarStyle('light-content');
    }



    render() {

        //If qrvalue is set then return this view
        if (this.state.qrvalue) {
            Alert.alert(this.state.qrvalue.toString());


        }
        //Initial/After Reset return this view
        return (
            <View style={{ flex: 1 }}>
                <CameraKitCameraScreen
                    showFrame={false}
                    //Show/hide scan frame
                    scanBarcode={true}
                    //Can restrict for the QR Code only
                    laserColor={'blue'}
                    //Color can be of your choice
                    frameColor={'yellow'}
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

