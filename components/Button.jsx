import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { APP_COLOR, APP_FONT } from '../constants';

const Button = ({ text, handlePress, style }) => {
	return (
		<TouchableOpacity style={[styles.buttonContainer, style]} onPress={handlePress}>
			<Text style={styles.buttonText}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	buttonContainer: {
		borderRadius: 20,
		backgroundColor: APP_COLOR.blue,
		alignItems: 'center',
		paddingVertical: 12
	},
	buttonText: {
		color: APP_COLOR.white,
		fontFamily: APP_FONT.Medium,
		fontSize: 14
	}
});
