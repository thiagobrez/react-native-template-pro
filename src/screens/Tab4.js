import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../components';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab4 extends Component {
  
  render() {
    
    const {navigate} = this.props.navigation;
    
    return (
      <View style={styles.container}>
        <Text>Tab4</Text>
        <Button onPress={() => navigate('Overlay1')}>
          Open Overlay1
        </Button>
      </View>
    );
    
  }
  
}

Tab4.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});