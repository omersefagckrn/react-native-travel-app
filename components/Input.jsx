import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { APP_COLOR, APP_FONT } from '../constants';

const Input = ({ style, value, onChangeText, placeholder, keyboardType, secureTextEntry }) => {
	return (
		<TextInput
			selectionColor={APP_COLOR.black}
			secureTextEntry={secureTextEntry}
			placeholderTextColor={APP_COLOR.black}
			value={value}
			onChangeText={onChangeText}
			placeholder={placeholder}
			keyboardType={keyboardType}
			style={[styles.input, style]}
		/>
	);
};

export default Input;

const styles = StyleSheet.create({
	input: {
		backgroundColor: APP_COLOR.white,
		borderRadius: 10,
		paddingVertical: 17,
		paddingHorizontal: 20,
		fontFamily: APP_FONT.Regular,
		fontSize: 14,
		borderColor: APP_COLOR.black,
		borderWidth: 0.5
	}
});
