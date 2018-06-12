import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

export default class Tab4 extends Component {
  
  render() {
    
    const {navigate} = this.props.navigation;
    
    return (
      <View>
        <Text>Tab4</Text>
        <Text onPress={() => navigate('Overlay1')}>Open Overlay1</Text>
      </View>
    );
    
  }
  
}

Tab4.propTypes = {};