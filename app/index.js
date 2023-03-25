import { useRouter } from 'expo-router';
import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const Home = () => {
	const router = useRouter();
	return (
		<>
			<SafeAreaView>
				<Text
					onPress={() => {
						router.push('/auth/login');
					}}
				>
					Homess
				</Text>
			</SafeAreaView>
		</>
	);
};

export default Home;

const styles = StyleSheet.create({});
