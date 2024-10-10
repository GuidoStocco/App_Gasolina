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
  }
})