import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

export default class Home extends Component {

  render() {
    
    return (
      <View>
        <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
          <Text>
            Home
          </Text>
        </TouchableOpacity>
      </View>
    );
    
  }
  
}

Home.propTypes = {};

const styles = StyleSheet.create({});