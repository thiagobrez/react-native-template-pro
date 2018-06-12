import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab1 extends Component {
  
  render() {
    
    return (
      <View style={styles.container}>
        <Text>Tab1</Text>
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
  }
});