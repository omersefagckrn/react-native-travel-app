import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

const Layout = () => {
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
	return (
		<Stack>
			<Stack.Screen options={{ headerShown: false }} name='index' />
			<Stack.Screen options={{ headerShown: false }} name='auth' />
		</Stack>
	);
};

export default Layout;
