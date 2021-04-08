import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/globals';


export default function Home({ navigation }) {

    /*
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
    */

    const [reviews, setReviews] = useState ([
        { title: "Alala", rating: 5, body: 'lorem ipsum', key: '1' },
        { title: "Blblb", rating: 4, body: 'lorem ipsum', key: '2' },
        { title: "Clclc", rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item )}>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}
