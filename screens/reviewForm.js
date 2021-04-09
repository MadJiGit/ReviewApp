import React from 'react';
import { StyleSheet, View, Button, TextInput } from 'react-native';
import { globalStyles } from '../styles/globals.jsx';
import { Formik } from 'formik';


export default function ReviewForm() {
    // export const ReviewForm = () => {

    return (
        <View style={globalStyles.container}>
            <Formik
                initialValues={{ title: '', body: '', rating: '', }}
                onSubmit={( values ) => {
                    // console.log(values);
                }}
            >
                { props  => (
                    <View>
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Review title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            multiline
                            placeholder='Review details'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                        />
                        <TextInput 
                            style={globalStyles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                        />
                        <Button 
                            title='submit'
                            color='maroon'
                            onPress={props.handleSubmit}
                            keyboardType='numeric'
                        />
                    </View>
                )}
            </Formik>
        </View>
    );
}