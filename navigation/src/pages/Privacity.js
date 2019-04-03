import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  CheckBox,
  TouchableOpacity
} from 'react-native';

import CheckboxFormX from 'react-native-checkbox-form';
const dataCheck = [
   {
     label: 'Estoy de Acuerdo',
     value: 1
   }
]


export default class Privacity extends Component<{}> {

  constructor(){
    super();
    this.state={
        check:false,
        disabled:true
    }
    this.textos={
      avisoTitulo: "Aviso de Privacidad",
      avisoTextoNegritaUno: "“AVISO DE PRIVACIDAD.- LA ISLA HUATULCO SA DE CV, ",
      avisoTextoNegritaDos: "“Boulevard Benito Juárez, MZ 7, LT 9 , C.P. 80989, en Huatulco, Oaxaca, México;"
  }
}

checkBoxTest() {
    this.setState({check: !this.state.check})
    this.setState({disabled:!this.state.disabled})
}

	render(){
		return(
      <View style={styles.container}>
        <ScrollView >
          <View style={styles.contenedor}>
            <Text style={styles.avisoTitulo}>{this.textos.avisoTitulo}{'\n'}</Text>
              <Text style={styles.avisoTextoNegrita}>
                {this.textos.avisoTextoNegritaUno} {' '}
                <Text style={styles.avisoTextoNormal}> (en adelante, el “Responsable”) le informa que sus datos personales serán utilizados
                  para las siguientes finalidades primarias: (1) Identificar y verificar los datos personales registrados (2),
                  gestionar y dar seguimiento a compras de servicios turísticos, hospedaje, alimentos y bebidas, tours, eventos,
                  (3) Estadística y registro histórico de candidatos que lo apoyaran en su servicio, (4) Informarle posibles
                  cambios de dichos productos o servicios (4) realizar los cargos correspondientes a sus compras de los artículos
                  mencionados en (2), (5) dar seguimiento a los productos y servicios solicitados hasta que el cliente final
                  los reciba, (6) Dar servicio de pos venta con fines de calidad en servicio (7) elaborar informes estadísticos.
                </Text>
                {'\n'}{'\n'}
                <Text style={styles.avisoTextoNormal}>Y para las siguientes finalidades secundarias:
                  (7) Dar seguimiento a la legislación aplicable de operación de La Isla Huatulco sa de cv,
                  así como requerimientos de autoridades federales y locales. (8) informarle sobre promociones y eventos,
                  sugerencia de todos los productos y servicios ofertados. Para mayor información acerca del tratamiento y
                  de los derechos que puede hacer valer, usted puede acceder al Aviso de Privacidad completo a través de
                  nuestro Responsable de Datos en la siguiente dirección: {' '}
                </Text>
                <Text style={styles.avisoTextoNegritaDos}>{this.textos.avisoTextoNegritaDos}{' '}</Text>
                <Text style={styles.avisoTextoNormal}>en los siguientes Teléfonos: 5559655660, 958-5870847 para poder otorgarle un código de recepción referente
                  a la petición. www.laislahuatulco.com</Text>
              </Text>
          </View>

          <View style={styles.contenedorCheckbox}>
            {/* <CheckBox style={styles.checkBox} value={this.state.check} onChange={()=> this.checkBoxTest()}/> */}
            <CheckboxFormX 
                style= {{width: 350 - 30}}
                dataSource={dataCheck}
                iconSize={16}
                />
            {/* <Text style={styles.textoCheck} onPress={()=> this.checkBoxTest()}>Estoy de Acuerdo.</Text> */}
          </View>

          <View style={styles.contenedorBotones}>
            <TouchableOpacity style={styles.botonCancelar}>
              <Text style={styles.textoBoton}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonAceptar}>
              <Text style={styles.textoBoton}>Aceptar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
		)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  avisoTitulo: {
    color: '#4D4D4D',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 20
  },
  avisoTextoNegrita: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15
  },
  avisoTextoNormal: {
    color: '#616161',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 15
  },
  contenedorCheckbox:{
    flex: 1,
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center',
    marginTop: 15,
    backgroundColor: '#E7E7E7'
  },
  contenedorBotones:{
    flex: 1,
    justifyContent: 'center',
    flexDirection:'row',
    alignItems:'center'
  },
  botonCancelar: {
    width:100,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5E605D',
    borderRadius: 5,
    marginTop:25,
    marginBottom:25,
  },
  botonAceptar: {
    width:100,
    height:40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4BAA2B',
    borderRadius: 5,
    marginTop:25,
    marginLeft:25,
    marginBottom:25,
  },
  textoBoton:{
    color: '#FFF',
    fontSize: 20
  },
  textoCheck:{
    color: '#616161',
    fontSize: 20
  }
});