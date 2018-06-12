import React from 'react';
import PropTypes from 'prop-types';
import {colors} from '../../styles';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

/**
 * Customizable button component.
 *
 * @param customStyle: overrides default styles
 * @param type: button type. merges with default styles. e.g.: 'facebook'
 * @param onPress: function to be executed at button press
 * @param children: button child components
 */
const Button = ({customStyle, type, onPress, children}) => {
	
	const buttonStyles = customStyle ? customStyle : [styles.button, styles[type]];
	
	return (
		<TouchableOpacity onPress={onPress}
											style={buttonStyles}>
			<Text style={styles.text}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

Button.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func,
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

const styles = StyleSheet.create({
	button: {
		justifyContent: 'space-around',
		minWidth: 100,
		height: 40,
		borderRadius: 5,
		margin: 10,
		borderWidth: 1,
		borderColor: colors.primary,
		backgroundColor: colors.primary
	},
	text: {
		fontSize: 20,
		textAlign: 'center',
		color: colors.white,
	},
 
	//Button type styles
	facebook: {
		backgroundColor: colors.facebook,
		borderColor: colors.facebook
	},
});

export default Button;