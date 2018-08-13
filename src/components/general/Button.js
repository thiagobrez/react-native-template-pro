import React from 'react';
import PropTypes from 'prop-types';
import {colors, fonts} from '../../styles';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  ActivityIndicator
} from 'react-native';

/**
 * Customizable button component.
 *
 * @param customStyle: overrides default styles
 * @param type: merges with default styles. e.g.: 'facebook'
 * @param icon: icon component
 * @param text: button text
 * @param textColor: button text color
 * @param textWeight: button text font weight
 * @param color: button color
 * @param disabled: button disabled
 * @param isLoading: shows ActivityIndicator instead of text
 * @param loadingColor: ActivityIndicator color
 * @param onPress: function to be executed at button press
 */
const Button = ({
                  customStyle,
                  type,
                  icon,
                  text,
                  textColor,
                  textWeight,
                  color,
                  disabled,
                  isLoading,
                  loadingColor,
                  onPress
                }) => {
  
  const buttonStyles = customStyle ? customStyle :
    [
      styles.button,
      styles[type],
      {backgroundColor: disabled ? colors.light : styles[type] ? styles[type].backgroundColor : color}
    ];
  
  return (
    <TouchableOpacity onPress={onPress}
                      disabled={disabled}
                      style={buttonStyles}>
      {isLoading ? <ActivityIndicator color={loadingColor} animating={isLoading}/> :
        <View style={styles.container}>
          {icon}
          {text &&
          <Text style={[styles.text, {
            marginLeft: icon ? 5 : 0,
            color: textColor || colors.lighter,
            fontWeight: textWeight || fonts.normal
          }]}>
            {text}
          </Text>
          }
        </View>
      }
    </TouchableOpacity>
  );
};

Button.propTypes = {
  customStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  type: PropTypes.string,
  icon: PropTypes.object,
  text: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: 'space-around',
    height: 50,
    borderRadius: 30,
    backgroundColor: colors.primary
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  text: {
    marginLeft: 5,
    fontSize: fonts.regular,
    textAlign: 'center'
  },
  
  //Types
  facebook: {
    backgroundColor: colors.facebook,
    borderColor: colors.facebook,
    marginHorizontal: 5
  },
  google: {
    backgroundColor: colors.google,
    borderColor: colors.google,
    marginHorizontal: 5
  },
  whiteOpacity: {
    backgroundColor: colors.whiteOpacity,
  }
});

export default Button;