//This is an example code to Scan QR code//
import React, { Component } from 'react';
//import react in our code.
import { Text, View, StatusBar,
     Linking,  Alert} from 'react-native';
// import all basic components
import { CameraKitCameraScreen} from 'react-native-camera-kit';





export default class ScanQR extends Component {

    static navigationOptions ={  title:'Escanea el codigo QR',
        headerStyle: {
            backgroundColor: '#FF6C00',
        },

    }

    ///

    constructor(props){
        super(props);
        this.state={
            qrvalue:''

        }
    }

  //  state = {isPermitted:false}
   /* constructor(props) {
        super(props);
       /* var that=this;
        async function requestCameraPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,{
                        'title': 'CameraExample App Camera Permission',
                        'message': 'CameraExample App needs access to your camera '
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    requestExternalWritePermission();
                } else {
                    alert("CAMERA permission denied");
                }
            } catch (err) {
                alert("Camera permission err",err);
                console.warn(err)
            }
        }
        async function requestExternalWritePermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,{
                        'title': 'CameraExample App External Storage Write Permission',
                        'message': 'CameraExample App needs access to Storage data in your SD Card '
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    requestExternalReadPermission();
                } else {
                    alert("WRITE_EXTERNAL_STORAGE permission denied");
                }
            } catch (err) {
                alert("Write permission err",err);
                console.warn(err)
            }
        }
        async function requestExternalReadPermission() {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,{
                        'title': 'CameraExample App Read Storage Write Permission',
                        'message': 'CameraExample App needs access to your SD Card '
                    }
                )
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    that.setState({isPermitted:true})
                } else {
                    alert("READ_EXTERNAL_STORAGE permission denied");
                }
            } catch (err) {
                alert("Read permission err",err);
                console.warn(err)
            }
        }
        requestCameraPermission();*/

    ///

    onOpenlink() {
        //Function to open URL, If scanned
        Linking.openURL(this.state.qrvalue);
        //Linking used to open the URL in any browser that you have installed
    }
    onBarcodeScan(qrvalue) {
        //called after te successful scanning of QRCode/Barcode
        this.setState({ qrvalue: qrvalue });
    }
    onContinueScan() {
        //To continue Scanning
        this.setState({ qrvalue: '' });
    }


   async componentDidMount() {
        //Setting up Status Bar
        StatusBar.setBarStyle('light-content');
       //const isUserAuthorizedCamera = await CameraKitCamera.requestDeviceCameraAuthorization();
      // const isCameraAuthorized = await CameraKitCamera.checkDeviceCameraAuthorizationStatus();
        }




    Login = () => {


        var cad="";
        var band= false;

        fetch("http://192.168.13.20:3055/api/v1/usuarios/find_by_user?username=" + this.state.qrvalue.toString() ,{

            headers:{
                'Accept':'application/json',
                'Content-Type' : 'application/json'
            }


        })
            .then(res => res.json())
            .then(response => {

                    cad = JSON.stringify(response.code);

                    //band = JSON.stringify(response.activo)



                    if (cad == "404"){
                        Alert.alert("No se ha encontrado al usuario");
                    }else{
                        Alert.alert("Bienvenido a Isla Natura App " +"\n"+ this.state.qrvalue.toString());
                        this.props.navigation.navigate("Aviso");
                    }

                })
            .done();

    }



    render() {
    //   if (this.state.isPermitted) {
            //If qrvalue is set then return this view
            if (this.state.qrvalue) {
                //Alert.alert(this.state.qrvalue.toString());
                this.Login();

            }
            //Initial/After Reset return this view
            return (
                <View style={{flex: 1}}>
                    <CameraKitCameraScreen


                        onReadCode={event =>
                            this.onBarcodeScan(event.nativeEvent.codeStringValue)
                        }
                    />
                </View>
            );
        /*} else {
            return (

                <ActivityIndicator/>
            )
        }*/
    }
    }