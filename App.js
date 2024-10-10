import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Modal, Image} from 'react-native';



export default function App(){

  const img = require('./assets/logo.png')

  return(
    <SafeAreaView style={styles.container}>
      <View>
          <Image source={img}/>
      </View>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#121212'
  }
})