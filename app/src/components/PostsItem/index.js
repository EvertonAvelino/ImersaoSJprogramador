import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function PostsItem({ data }) {
	const navigation = useNavigation();
	//console.log(data.item.attributes.Description)
	function handleDetail() {
		navigation.navigate("Detail", { id: data?.item?.id });
	}
	return (
		<TouchableOpacity
			style={styles.container}
			onPress={handleDetail}
		>
			<View style={styles.header}>
				<Image
					style={styles.cover}
					source={{ uri: `http://192.168.0.14:1337${data?.item?.attributes?.Cover?.data?.attributes?.formats?.thumbnail?.url}` }}
				/>
			</View>
			<View style={styles.body}>
				<Text style={styles.title}>
					{data.item.attributes.Title}
				</Text>
				<Text style={styles.description} numberOfLines={2}>
					{data.item.attributes.Description}
				</Text>
			</View>
		</TouchableOpacity>
	)

};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		borderWidith: 1,
		borderColor: '#EFEFEF',
		borderRadius: 4,
		marginBottom: 14,
		paddingHorizontal: 12,
		paddingVertical: 14,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
	},
	header: {
		marginHorizontal: 8,
	},
	cover: {
		width: 90,
		height: 90,
		borderRadius: 4,
		//paddingLeft: 50,
	},
	body: {
		width: "70%",
	},
	title: {
		fontHeight: 'bold',
		fontSize: 14,
		marginBottom: 4,
	},
	description: {

	}
})
