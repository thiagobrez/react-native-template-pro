import React from 'react';
import {colors} from '../../styles';
import {View} from 'react-native';

/**
 * @author Thiago Brezinski
 *
 * Separador de ListItems.
 */
const Separator = () => (
  <View
    style={{
      height: 2,
      backgroundColor: colors.transparent,
    }}
  />
);

export default Separator;