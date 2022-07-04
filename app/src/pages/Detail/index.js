import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import api from '../../services/api'

export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();

    useEffect(() => {
        async function getPost() {
            const response = await api.get(`api/posts/${route.params?.id}?populate=*,category,Opcoes`);
            //console.log(response.data.data)
        }
        getPost();
    }, [])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{route.params?.id}</Text>
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
        color: '#000',
        fontSize: 24
    }
})
