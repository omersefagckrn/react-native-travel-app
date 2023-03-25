import { Image, TouchableOpacity } from 'react-native';

const Icons = ({ style, iconUrl, handlePress }) => {
	return (
		<TouchableOpacity onPress={handlePress}>
			<Image style={style} resizeMode='cover' source={iconUrl} />
		</TouchableOpacity>
	);
};

export default Icons;
