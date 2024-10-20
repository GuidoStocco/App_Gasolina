import React, {useState} from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Modal, Image} from 'react-native';

import Calculo from './src/Modal/Calcular';

export default function App(){

  const img = require('./assets/logo.png');
  const imgGas = require('./assets/gas.png')

  const [alcool, setAlcool] = useState('');
  const [gasolina, setGasolina] = useState('');
  const [btn, setBtn] = useState(false)

  // Outro jeito de chegar ao resultado
  // let valor = Math.floor(alcool / gasolina).toFixed(1)
  // let resultado = (Math.floor(alcool / gasolina).toFixed(1)) < 0.7 ? 'Compensa usar Álcool.' : 'Compensa usar Gasolina.'

  function abrirModal(){
    setBtn(true) 
  }

  function sairModal(){
    setBtn(false)

    setAlcool('')
    setGasolina('') 
  }

  let resultado = function(alcool, gasolina){

    const divisao = parseFloat(alcool) / parseFloat(gasolina)

    if(divisao === 1){
      return 'Qualquer um'
    } else if(divisao < 0.7){
      return 'Álcool'
    } else{
      return 'Gasolina'
    }
  }

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
          <Image source={img} style={styles.logo}/>
          <Text style={styles.imgText}>Qual Melhor Opção?</Text>
      </View>

      <View style={styles.areaCalculo}>
        <View style={styles.areaInput}>
          <Text style={styles.text}>Álcool (preço por litro):</Text>    
          <TextInput style={styles.input} placeholder='Ex: 4.60' onChangeText={(text) => setAlcool(text)}
              keyboardType='numeric' value={alcool}/>
        </View>

        <View style={styles.areaInput}>
          <Text style={styles.text}>Gasolina (preço por litro):</Text>    
          <TextInput style={styles.input} placeholder='Ex: 7.50' onChangeText={(text) => setGasolina(text)}
            keyboardType='numeric' value={gasolina}/>
        </View>
      </View>

      <TouchableOpacity style={styles.areaBtn} onPress={abrirModal}>
        <Text style={styles.textBtn}>Calcular</Text>
        <Modal visible={btn} animationType='slide' transparent={false}>
          <Calculo fechar={sairModal} imagem={imgGas}  result={resultado(alcool, gasolina)} alcool={alcool} gasolina={gasolina}
          />
        </Modal>
      </TouchableOpacity>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212'
  },
  img:{
    alignItems: 'center',
    marginTop: 50,
  },
  logo:{
    marginBottom: 35
  },
  imgText:{
    fontSize: 25,
    color:'#fff',
    fontWeight: 'bold'
  },
  areaCalculo:{
    marginTop: 70,
  },
  text:{
    color:"#fff",
    fontSize: 18,
    marginLeft: 19,
    marginBottom: 8
  },
  areaInput:{
    width: '100%',
    marginBottom: 25
  },
  input:{
    width: '90%',
    backgroundColor: '#f1f1f1',
    borderRadius: 7,
    padding: 10,
    fontSize: 18,
    alignSelf: 'center'
  },
  areaBtn:{
    width: '90%',
    backgroundColor: '#cc0000',
    borderRadius: 7,
    padding: 10,
    alignSelf: 'center'
  },
  textBtn:{
    color: '#fff',
    fontSize: 25,
    alignSelf: 'center'
  }
})