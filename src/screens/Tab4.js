import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button} from '../components';
import {colors, fonts} from '../styles';
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
        <View style={styles.contentWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              Tab4
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button text='Open Overlay1'
                    textColor={colors.secondary}
                    textWeight={fonts.boldest}
                    color={colors.primary}
                    onPress={() => navigate('Overlay1')}/>
          </View>
        </View>
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
  },
  contentWrapper: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: fonts.regular,
    fontWeight: fonts.thinnest
  },
  buttonWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});