import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity, Modal } from 'react-native';
import { globalStyles } from '../styles/globals';
import Card from '../shared/card';
import { MaterialIcons } from '@expo/vector-icons';


export default function Home({ navigation }) {

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState ([
        { title: "Alala", rating: 5, body: 'lorem ipsum', key: '1' },
        { title: "Blblb", rating: 4, body: 'lorem ipsum', key: '2' },
        { title: "Clclc", rating: 3, body: 'lorem ipsum', key: '3' },
    ]);

    return (
        <View style={globalStyles.container}>
            <Modal visible={ modalOpen } animationType='slide' >
                <View style={styles.modlalContent}>
                    <MaterialIcons 
                        style={{
                           ...styles.modalToggle, 
                           ...styles.modalClose,
                        }}
                        name='close'
                        size={24}
                        onPress={() => setModalOpen(false)}
                    />
                    <Text style={styles.modalText}> Hellooooo </Text>
                </View>
            </Modal>

            <MaterialIcons 
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={reviews}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item )}>
                        <Card>
                            { <Text style={globalStyles.titleText}>{ item.title }</Text> }
                        </Card>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    modlalContent: {
        flex: 1,
    },
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalClose: {
        marginTop: 50,
    },
    modlalContent: {

    },
    modalText: {

    },
});