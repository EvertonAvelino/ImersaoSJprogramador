import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import api from '../../services/api'

import CategoryItem from '../../components/CategoryItem'
import { getFavorite, setFavorite } from '../../services/favorite'
import FavoritePost from '../../components/FavoritePost'
import PostsItem from '../../components/PostsItem'

export default function Home() {
    const navigation = useNavigation();
    const [categories, setCategories] = useState([])
    const [favCategory, setFavCategory] = useState([])

    const [posts, setPosts] = useState([])


    useEffect(() => {
        //console.log(api)
        async function loadData() {
            await getListsPosts();

            const category = await api.get('/api/categories?populate=*')
            setCategories(category.data.data)
        }
        loadData()
    }, [])

    useEffect(() => {
        async function favorite() {
            const response = await getFavorite();
            setFavCategory(response)
        }
        favorite()
    }, [])

    async function getListsPosts() {
        const response = await api.get('/api/posts?populate=*&sort=createdAt:desc')
        setPosts(response.data.data)
    }

    //favoritando categoria
    async function randleFavorite(id) {
        const response = await setFavorite(id);
        setFavCategory(response)
        //alert("Categoria Favoritada!")

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
            <View style={styles.main}>
                {favCategory.length !== 0 && (
                    <FlatList
                        style={{ marginTop: 50, maxHeight: 100, paddingStart: 18 }}
                        contentContainerStyle={{ paddingEnd: 18, }}
                        data={favCategory}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={item => String(item.id)}
                        renderItem={(item) => (<FavoritePost data={item} />)}
                    />
                )}
                <Text
                    style={[
                        styles.title,
                        { marginTop: favCategory.length > 0 ? 14 : 46, }
                    ]}
                >Conteúdos em Alta</Text>
                <FlatList
                    style={{ flex: 1, paddingHorizontal: 18, }}
                    contentContainerStyle={{ paddingEnd: 18, }}
                    data={posts}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => String(item.id)}
                    renderItem={(item) => (<PostsItem data={item} />)}
                />
            </View>
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
    },
    main: {
        backgroundColor: '#fff',
        flex: 1,
        marginTop: -30,
    },
    title: {
        fontSize: 21,
        paddingHorizontal: 18,
        marginBottom: 14,
        fontWeight: 'bold',
        color: '#162133',
    }
})
