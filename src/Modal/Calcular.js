import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

export default function Calculo({fechar}){

    const [btnVoltar, setBtnVoltar] = useState(true)


    return(
        <View>
            <Text>Guido stocco</Text>
            <Button title='Voltar' onPress={fechar} />
        </View>
    );
};
