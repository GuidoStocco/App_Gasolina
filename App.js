import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Modal, Image} from 'react-native';



export default function App(){

  const img = require('./assets/logo.png')

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.img}>
          <Image source={img} style={styles.logo}/>
          <Text style={styles.imgText}>Qual Melhor Opção?</Text>
      </View>

      <View style={styles.areaCalculo}>
        <View style={styles.areaInput}>
          <Text style={styles.text}>Álcool (preço por litro):</Text>    
          <TextInput style={styles.input} placeholder='Ex: 4.60' onChangeText={(text) => {}}
              keyboardType='numeric'/>
        </View>

        <View style={styles.areaInput}>
          <Text style={styles.text}>Gasolina (preço por litro):</Text>    
          <TextInput style={styles.input} placeholder='Ex: 7.50' onChangeText={(text) => {}}
            keyboardType='numeric'/>
        </View>
      </View>
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
  }
})