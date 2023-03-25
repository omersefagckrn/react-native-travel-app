import { Stack } from 'expo-router';

import Icons from '../../components/Icons';
import { APP_COLOR, APP_FONT, APP_ICONS } from '../../constants';

const Layout = () => {
	return (
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
					headerLeft: () => <Icons style={{ width: 12, height: 20 }} iconUrl={APP_ICONS.arrowleft} />
				}}
			/>
			<Stack.Screen name='register/index' />
			<Stack.Screen name='forgotpassword/index' />
			<Stack.Screen name='verification/index' />
		</Stack>
	);
};

export default Layout;
