import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { globalStyles } from '../styles/globals';


export default function Home({navigation}) {

    const pressHandler = () => {
        navigation.navigate('ReviewDetails'); 
    }
    
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.titletext}>
                Home Screen
            </Text>
            <Button title='go to review dets' onPress={pressHandler}/>
        </View>
    )
}
