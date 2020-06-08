import React, { useState, useEffect } from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	SafeAreaView,
	ActivityIndicator,
} from 'react-native';

const App = (props) => {
	let [update, setUpdate] = useState(true);
	let [data, setData] = useState(null);
	let [loader, setLoader] = useState(false);

	useEffect(() => {
		setLoader(true);
		fetch('https://jsonplaceholder.typicode.com/users', {
			method: 'get',
		})
			.then((res) => res.json())
			.then((data) => {
				setData(data);
				setLoader(false);
			})
			.catch((err) => console.log(err));
		//.catch((err) => alert(err));
	}, [update]);

	if (loader) {
		return (
			<View style={styles.loader}>
				<ActivityIndicator color="red" size="large" />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<FlatList
					data={data}
					renderItem={({ item }) => (
						<Text style={styles.text}>{item.name}</Text>
					)}
					keyExtractor={(item) => item.id.toString()}
				/>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	loader: {
		flex: 1,
		justifyContent: 'center',
		textAlign: 'center',
	},
	text: {
		color: 'black',
		fontSize: 25,
		padding: 20,
	},
	btncontainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '50%',
	},
	input: {
		borderBottomWidth: 2,
		borderBottomColor: 'blue',
		padding: 5,
		marginVertical: 10,
		fontSize: 22,
		width: '100%',
	},
	listItem: {
		backgroundColor: 'gray',
		margin: 5,
		padding: 10,
		width: 100,
		flexDirection: 'row',
	},
});

export default App;
