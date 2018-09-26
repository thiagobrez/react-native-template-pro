import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, StyleSheet} from 'react-native';

const StaticHeaderIcon = ({name, size, color, onPress}) => (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={name} size={size} color={color}/>
    </TouchableOpacity>
);

StaticHeaderIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    paddingHorizontal: 10
  },
});

export default StaticHeaderIcon;