import { Tabs } from 'expo-router';

const Layout = () => {
	return (
		<Tabs>
			<Tabs.Screen
				options={{
					title: 'Home',
					headerShown: false
				}}
				name='home/index'
			/>
			<Tabs.Screen
				options={{
					title: 'Booking',
					headerShown: false
				}}
				name='booking/index'
			/>
		</Tabs>
	);
};

export default Layout;
