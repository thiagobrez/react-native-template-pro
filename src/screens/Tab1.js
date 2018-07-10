import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fonts} from '../styles';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab1 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Tab1</Text>
      </View>
    );
    
  }
  
}

Tab1.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: fonts.thinnest
  }
});