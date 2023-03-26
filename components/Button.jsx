import React from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { APP_COLOR, APP_FONT } from '../constants';

const Button = ({ text, color, handlePress, disabled = false }) => {
	return (
		<TouchableOpacity disabled={disabled} style={styles.buttonContainer(color)} onPress={handlePress}>
			{disabled ? <ActivityIndicator color={APP_COLOR.white} size='small' /> : <Text style={styles.buttonText}>{text}</Text>}
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	buttonContainer: (color) => ({
		borderRadius: 20,
		paddingVertical: 12,
		backgroundColor: color ? color : APP_COLOR.blue,
		alignItems: 'center'
	}),
	buttonText: {
		color: APP_COLOR.white,
		fontFamily: APP_FONT.Medium,
		fontSize: 14
	}
});
