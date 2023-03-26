import { Stack, useRouter } from 'expo-router';
import { AlertNotificationRoot } from 'react-native-alert-notification';

import { APP_COLOR, APP_FONT } from '../../constants';

import Ionicons from '@expo/vector-icons/Ionicons';

const Layout = () => {
	const route = useRouter();
	return (
		<AlertNotificationRoot
			dialogConfig={{
				closeOnOverlayTap: true,
				autoClose: true
			}}
		>
			<Stack>
				<Stack.Screen
					name='login/index'
					options={{
						headerTitle: 'Login',
						headerTitleStyle: {
							color: APP_COLOR.black,
							fontFamily: APP_FONT.SemiBold,
							fontSize: 14
						},
						headerStyle: {
							backgroundColor: APP_COLOR.white
						},

						headerLeft: () => <Ionicons onPress={() => route.push('/dashboard/home')} name='ios-arrow-back' size={24} color={APP_COLOR.black} />
					}}
				/>
				<Stack.Screen name='register/index' />
				<Stack.Screen name='forgotpassword/index' />
				<Stack.Screen name='verification/index' />
			</Stack>
		</AlertNotificationRoot>
	);
};

export default Layout;
