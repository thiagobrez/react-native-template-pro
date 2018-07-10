import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fonts} from '../styles';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab2 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to react-native-template-pro
        </Text>
        <Text style={styles.text}>
          HelloWorld
        </Text>
      </View>
    );
    
  }
  
}

Tab2.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: fonts.bigger,
    fontWeight: fonts.thinnest
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: fonts.thinnest
  }
});