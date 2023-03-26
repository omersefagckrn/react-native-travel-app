import { useFonts } from 'expo-font';
import { Redirect } from 'expo-router';
import React from 'react';

const Home = () => {
	const [fontsLoaded] = useFonts({
		PoppinsExtraBold: require('../assets/fonts/Poppins-ExtraBold.ttf'),
		PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
		PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
		PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
		PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
		PoppinsLight: require('../assets/fonts/Poppins-Light.ttf')
	});

	if (!fontsLoaded) {
		return null;
	}
	return <Redirect href='/dashboard/home' />;
};

export default Home;
