import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function CategoryPosts() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pots de uma categoria</Text>
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
