import { Stack, useRouter } from 'expo-router';

import { APP_COLOR, APP_FONT } from '../../constants';

import Ionicons from '@expo/vector-icons/Ionicons';

const Layout = () => {
	const route = useRouter();
	return (
		<Stack>
			<Stack.Screen
				name='login/index'
				options={{
					headerTitle: 'Login',
					headerTitleStyle: {
						color: APP_COLOR.white,
						fontFamily: APP_FONT.SemiBold,
						fontSize: 14
					},
					headerStyle: {
						backgroundColor: APP_COLOR.blue
					},

					headerLeft: () => <Ionicons onPress={() => route.back()} name='ios-arrow-back' size={24} color={APP_COLOR.white} />
				}}
			/>
			<Stack.Screen name='register/index' />
			<Stack.Screen name='forgotpassword/index' />
			<Stack.Screen name='verification/index' />
		</Stack>
	);
};

export default Layout;
