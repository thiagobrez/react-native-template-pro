import React, {Component} from 'react';
import {colors, metrics, fonts} from '../../styles';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';

export default class LoginTabs extends Component {
  
  render() {
    
    const
      {navigation} = this.props,
      {navigate, state: {index}} = navigation;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('SignIn')}
                          style={[
                            styles.tab,
                            {borderBottomColor: index ? colors.transparent : colors.lighter}]}>
          <Text style={styles.tabText}>
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('SignUp')}
                          style={[
                            styles.tab,
                            {borderBottomColor: index ? colors.lighter: colors.transparent}]}>
          <Text style={styles.tabText}>
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>
    );
    
  }
  
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.transparent
  },
  tabText: {
    color: colors.lighter,
    fontWeight: fonts.boldest,
    paddingVertical: 10
  }
});