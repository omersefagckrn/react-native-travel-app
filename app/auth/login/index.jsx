import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Button, Icons, Input } from '../../../components';
import { APP_COLOR, APP_ICONS } from '../../../constants';
import styles from './style';

import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { Dialog } from 'react-native-alert-notification';

const Login = () => {
	const router = useRouter();
	const onSubmit = (values) => {
		if (values.email !== '' && values.password !== '' && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
			Dialog.show({
				type: 'SUCCESS',
				title: 'Login Success',
				textBody: 'Congratulations, you are being redirected to login successfully :)',
				autoClose: 200,
				onPressButton: () => {
					Dialog.hide();
				},
				onHide: () => {
					router.push('/');
				}
			});
		} else {
			return Dialog.show({
				type: 'DANGER',
				title: 'Error',
				textBody: 'Please check your email or password!',
				button: 'Close',
				onPressButton: () => {
					Dialog.hide();
				}
			});
		}
	};
	return (
		<ScrollView style={styles.container}>
			<Formik validateOnBlur={false} validateOnChange={false} initialValues={{ email: '', password: '' }} onSubmit={(values) => onSubmit(values)}>
				{({ handleChange, handleSubmit, values }) => (
					<>
						<Input
							value={values.email}
							onChangeText={handleChange('email')}
							keyboardType={'email-address'}
							style={{ marginBottom: 18 }}
							placeholder='E-mail'
						/>
						<Input
							value={values.password}
							onChangeText={handleChange('password')}
							secureTextEntry
							style={{ marginBottom: 18 }}
							placeholder='Password'
						/>
						<Button handlePress={handleSubmit} color={APP_COLOR.blue} text='Login' />
					</>
				)}
			</Formik>

			<TouchableOpacity style={styles.forgotPasswordContainer}>
				<Text style={styles.forgotPassword}>Forgot Password?</Text>
			</TouchableOpacity>

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
				<Text style={styles.dontHaveAccountText}>Don't have an account yet?</Text>

				<TouchableOpacity>
					<Text style={styles.dontHaveAccountRegisterText}>Register Here</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
};

export default Login;
