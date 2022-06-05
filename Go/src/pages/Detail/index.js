import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Detail() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pagina de detalhes</Text>
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
