import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

//Buscar categoria favoritada
export async function getFavorite() {
	const data = await AsyncStorage.getItem('@favCategory')

	if (data !== null) {
		const response = await api.get(`api/categories/${data}?fields=name&populate=posts,posts.cover`)
		console.log(response)

	} else {
		return []
	}

}

//Favoritar uma categoria
export async function setFavorite(category) {
	await AsyncStorage.setItem('@favCategory', String(category))
}


