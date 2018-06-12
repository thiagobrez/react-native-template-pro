import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab3 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Tab3</Text>
      </View>
    );
    
  }
  
}

Tab3.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});