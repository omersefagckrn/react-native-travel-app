import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icons, Input } from '../../../components';
import { APP_COLOR, APP_ICONS } from '../../../constants';
import styles from './style';

const Login = () => {
	return (
		<ScrollView style={styles.container}>
			<Input keyboardType={'email-address'} style={{ marginBottom: 18 }} placeholder='Email' />
			<Input secureTextEntry style={{ marginBottom: 18 }} placeholder='Password' />

			<TouchableOpacity style={styles.forgotPasswordContainer}>
				<Text style={styles.forgotPassword}>Forgot Password?</Text>
			</TouchableOpacity>

			<Button color={APP_COLOR.blue} text='Login' />

			<View style={styles.orLoginWithContainer}>
				<View style={styles.orLoginWithHr} />
				<Text style={styles.orLoginWithText}>or login with</Text>
				<View style={styles.orLoginWithHr} />
			</View>

			<View style={styles.connectAnotherAccountContainer}>
				<TouchableOpacity style={styles.connectAnotherIconAppleContainer}>
					<Icons style={styles.connectAnotherIconApple} iconUrl={APP_ICONS.apple} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.connectAnotherIconFacebookContainer}>
					<Icons style={styles.connectAnotherIconFacebook} iconUrl={APP_ICONS.facebook} />
				</TouchableOpacity>
				<TouchableOpacity style={styles.connectAnotherIconGoogleContainer}>
					<Icons style={styles.connectAnotherIconGoogle} iconUrl={APP_ICONS.google} />
				</TouchableOpacity>
			</View>

			<View style={styles.dontHaveAccountContainer}>
				<Text style={styles.dontHaveAccountText}>don't have an account yet?</Text>

				<TouchableOpacity>
					<Text style={styles.dontHaveAccountRegisterText}>Register Here</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Login;
