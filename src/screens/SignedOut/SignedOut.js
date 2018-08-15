import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {colors, fonts} from '../../styles';
import {Button} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigatorLoginTabs} from '../../navigators';
import {
  ImageBackground,
  Text,
  StyleSheet,
  View
} from 'react-native';

export default class SignedOut extends Component {
  
  render() {
    
    const {navigation} = this.props;
    
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: 'https://images.unsplash.com/photo-1496096265110-f83ad7f96608?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35840c5a386390076c95d47b745ae459&auto=format&fit=crop&w=1650&q=80'}}
                         blurRadius={5}
                         style={styles.container}>
          <LinearGradient style={styles.container}
                          start={{x: 1, y: 0}}
                          end={{x: 0, y: 1}}
                          colors={colors.regularGradient}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>
                HelloWorld
              </Text>
            </View>
            <View style={styles.mainContainer}>
              <View style={styles.tabsContainer}>
                <NavigatorLoginTabs screenProps={{navigation}}/>
              </View>
              <View style={styles.dividerContainer}>
                <View style={styles.divider}/>
                <View style={styles.dividerTextWrapper}>
                  <Text style={styles.dividerText}>
                    or
                  </Text>
                </View>
                <View style={styles.divider}/>
              </View>
              <View style={styles.socialLoginContainer}>
                <Button type='facebook'
                        icon={<Icon name='logo-facebook' size={26} style={styles.facebookIcon}/>}>
                </Button>
                <Button type='google'
                        icon={<Icon name='logo-google' size={26} style={styles.googleIcon}/>}>
                </Button>
              </View>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
    
  }
  
}

SignedOut.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  titleContainer: {
    flex: 1.5,
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: fonts.boldest,
    textAlign: 'center',
    color: colors.white,
  },
  mainContainer: {
    flex: 5,
    marginHorizontal: 10,
  },
  tabsContainer: {
    flex: 4,
  },
  loginInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: colors.darkOpacity,
    borderRadius: 25
  },
  loginInputIconWrapper: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
  },
  loginInput: {
    flex: 1,
    height: 50,
    marginHorizontal: 10,
    color: colors.lighter,
  },
  signInButtonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInButton: {
    flex: 1,
  },
  dividerContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  divider: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: colors.lighter,
    width: '100%'
  },
  dividerTextWrapper: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dividerText: {
    color: colors.lighter
  },
  socialLoginContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  facebookIcon: {
    color: colors.lighter
  },
  googleIcon: {
    color: colors.lighter
  }
});