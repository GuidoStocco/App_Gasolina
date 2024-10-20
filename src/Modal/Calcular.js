import React, {useState} from 'react';
import {View, Text, Button, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Calculo({fechar, imagem, result, gasolina, alcool,valor}){
    // const imgGas = require('./assets/gas.png');
    const [btnVoltar, setBtnVoltar] = useState(true)
    

    return(
        <View style={styles.containerModal}>
            <View style={styles.logoGas}>
                <Image source={imagem} style={styles.imgGas}/>
                <Text style={styles.resultado}>{result === true ? `Compensa usar ${result}` : 'Coloque algum valor'}</Text>
            
                <View style={styles.showResult}>
                    <Text style={styles.showPrice}>Com os preços:</Text>
                    <Text style={styles.result}>Álcool: R${alcool}</Text>
                    <Text style={styles.result}>Gasolina: R${gasolina}</Text>
                    
                </View>

            

            </View>
            <TouchableOpacity style={styles.calcularDnv} onPress={fechar}>
                <Text style={styles.btnCalcular}>Calcular Novamente</Text>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    containerModal:{
        flex: 1,
        backgroundColor: '#121212'
    },
    logoGas:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgGas:{
        marginTop: 90
    },
    resultado:{
        marginTop: 30,
        fontSize: 28,
        color: '#33cc33'
    },      
    showResult:{
        marginTop: 30,
        alignItems: 'center'
    },
    showPrice:{
        color: '#fff',
        fontSize: 25,
        marginBottom: 10
    },
    result:{
        color: '#ccc',
        fontSize: 18,
        marginTop: 6
    },
    calcularDnv:{
        width: '90%',
        marginTop: 40,
        alignSelf: 'center',
        backgroundColor: '#121212',
        borderRadius: 7,
        padding: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ff1a1a'
    },
    btnCalcular:{
        color: '#ff1a1a',
        fontSize: 25
    },
    resultValor:{
        fontSize: 20,
        marginTop: 30,
        color: '#f1f1f1'
    }
})