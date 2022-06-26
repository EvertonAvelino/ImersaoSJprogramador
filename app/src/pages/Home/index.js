import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import api from '../../services/api'

import CategoryItem from '../../components/CategoryItem'


export default function Home() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([])


    useEffect(() => {
        //console.log(api)
        async function loadData() {
            const category = await api.get('/api/categories?populate=*')
            setCategories(category.data.data)
        }
        loadData()
    }, [])

    //favoritando categoria
    function randleFavorite(id) {
        alert('Categoria favoritada: ' + id)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.name}>DevBlog</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Search')}
                >
                    <Feather name="search" size={24} color='#fff' />
                </TouchableOpacity>
            </View>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.categories}
                contentContainerStyle={{ paddingRight: 12 }}
                data={categories}
                keyExtractor={item => String(item.id)}
                renderItem={(item) => (
                    <CategoryItem
                        data={item}
                        favorite={() => { randleFavorite(item.item.id) }}
                    />
                )}
            />
            {/* <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={styles.categories}
                contentContainerStyle={{ paddingRight: 12 }}
                data={categories}
                keyExtractor={item => String(item.id)}
                renderItem={(item) => (
                    <CategoryItem
                        data={item}
                        favorite={() => { randleFavorite(item.item.id) }}
                    />
                )}
            /> */}
        </SafeAreaView>
    )

};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#232630'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 18,
        marginTop: 18,
        marginBottom: 24
    },
    name: {
        fontSize: 24,
        color: '#fff',
        fontWeight: 'bold'
    },
    categories: {
        maxHeight: 115,
        backgroundColor: '#EFEFEF',
        marginHorizontal: 18,
        borderRadius: 8,
        zIndex: 9,
    }
})
