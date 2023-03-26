import { Dimensions, StyleSheet } from 'react-native';
import { APP_COLOR, APP_FONT } from '../../../constants';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: '100%',
		backgroundColor: APP_COLOR.white,
		paddingVertical: 20,
		paddingHorizontal: 20
	},
	forgotPasswordContainer: {
		alignItems: 'flex-end',
		marginBottom: 20
	},
	forgotPassword: {
		color: APP_COLOR.blue,
		fontFamily: APP_FONT.Medium,
		fontSize: 12
	},
	orLoginWithContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 18
	},
	orLoginWithHr: {
		flex: 1,
		height: 0.5,
		backgroundColor: APP_COLOR.black
	},
	orLoginWithText: {
		color: APP_COLOR.black,
		fontFamily: APP_FONT.Regular,
		fontSize: 12,
		marginHorizontal: 10
	},
	connectAnotherAccountContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		marginVertical: 20
	},
	connectAnotherIconAppleContainer: {
		width: 44,
		height: 44,
		padding: 14,
		borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
		backgroundColor: APP_COLOR.black,
		justifyContent: 'center',
		alignItems: 'center'
	},
	connectAnotherIconApple: {
		width: 13,
		height: 16.5
	},
	connectAnotherIconFacebookContainer: {
		width: 44,
		height: 44,
		padding: 14,
		borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
		backgroundColor: APP_COLOR.blueDark,
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 21
	},
	connectAnotherIconFacebook: {
		width: 8,
		height: 16
	},
	connectAnotherIconGoogleContainer: {
		width: 44,
		height: 44,
		padding: 14,
		borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
		backgroundColor: APP_COLOR.blue,
		justifyContent: 'center',
		alignItems: 'center'
	},
	connectAnotherIconGoogle: {
		width: 16,
		height: 16
	},
	dontHaveAccountContainer: {
		flexDirection: 'row',
		textAlign: 'center',
		alignItems: 'center',
		justifyContent: 'center'
	},
	dontHaveAccountText: {
		color: APP_COLOR.black,
		fontFamily: APP_FONT.Regular,
		fontSize: 10
	},
	dontHaveAccountRegisterText: {
		color: APP_COLOR.blue,
		fontFamily: APP_FONT.Medium,
		fontSize: 10,
		marginLeft: 2,
		textDecorationLine: 'underline'
	}
});

export default styles;
