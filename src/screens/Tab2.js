import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab2 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
          <Text>Welcome to react-native-template-pro</Text>
          <Text>HelloWorld</Text>
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
  }
});