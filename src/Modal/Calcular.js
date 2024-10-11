import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function Calculo(){

    const [btnVoltar, setBtnVoltar] = useState(false)

    return(
        <View>
            <Text>Guido stocco</Text>
            <Button title='Voltar' onPress={() => {}} />
        </View>
    );
};
