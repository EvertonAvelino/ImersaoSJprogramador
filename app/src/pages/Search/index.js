import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Search() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagina Search</Text>
        </View>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#fff',
        fontSize: 24
    }
})
