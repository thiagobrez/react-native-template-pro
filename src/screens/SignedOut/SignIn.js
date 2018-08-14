import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {withFormik} from 'formik';
import {colors, fonts} from '../../styles';
import {Button} from '../../components';
import {login} from '../../rest/requests';
import {LOGIN_SCHEMA, LOGIN_INITIAL_VALUES} from '../../util/form';
import {
  View,
  Text,
  StyleSheet,
  TextInput
} from 'react-native';

class SignIn extends Component {
  
  constructor(props) {
    super(props);
    
    this.inputs = {};
  }
  
  render() {
  
    const {values, touched, errors, isSubmitting, setFieldValue, handleSubmit} = this.props;
    
    return (
      <View style={styles.loginContainer}>
        <View style={styles.formError}>
          {
            touched.email && errors.email &&
            <Text style={styles.formText}>
              {errors.email}
            </Text>
          }
        </View>
        <View style={[
          styles.loginInputWrapper,
          {backgroundColor: touched.email && errors.email ? colors.redOpacity : colors.darkOpacity}
        ]}>
          <View style={styles.loginInputIconWrapper}>
            <Icon name={'ios-contact'}
                  size={26}
                  color={colors.light}/>
          </View>
          <TextInput style={styles.loginInput}
                     placeholder='Email'
                     textContentType='emailAddress'
                     keyboardType='email-address'
                     placeholderTextColor={colors.light}
                     clearButtonMode='while-editing'
                     returnKeyType='next'
                     blurOnSubmit={false}
                     value={values.email}
                     autoCapitalize='none'
                     ref={input => this.inputs['email'] = input}
                     onSubmitEditing={() => this.inputs['password'].focus()}
                     onChangeText={text => setFieldValue('email', text)}/>
        </View>
        <View style={styles.formError}>
          {
            touched.password && errors.password &&
            <Text style={styles.formText}>
              {errors.password}
            </Text>
          }
        </View>
        <View style={[
          styles.loginInputWrapper,
          {backgroundColor: touched.password && errors.password ? colors.redOpacity : colors.darkOpacity}
        ]}>
          <View style={styles.loginInputIconWrapper}>
            <Icon name={'ios-unlock'}
                  size={26}
                  color={colors.light}/>
          </View>
          <TextInput style={styles.loginInput}
                     placeholder='Password'
                     textContentType='password'
                     placeholderTextColor={colors.light}
                     clearButtonMode='while-editing'
                     returnKeyType='done'
                     secureTextEntry={true}
                     value={values.password}
                     autoCapitalize='none'
                     ref={input => this.inputs['password'] = input}
                     onSubmitEditing={handleSubmit}
                     onChangeText={text => setFieldValue('password', text)}/>
        </View>
        <View style={styles.serverError}>
          {
            errors.message &&
            <Text style={styles.formText}>
              {errors.message}
            </Text>
          }
        </View>
        <View style={styles.signInButtonWrapper}>
          <Button text='Sign In'
                  textColor={colors.dark}
                  textWeight={fonts.boldest}
                  color={colors.lighter}
                  isLoading={isSubmitting}
                  onPress={handleSubmit}/>
        </View>
      </View>
    );
    
  }
  
}

SignIn.propTypes = {};

export default withFormik({
  mapPropsToValues: () => LOGIN_INITIAL_VALUES,
  validationSchema: LOGIN_SCHEMA,
  handleSubmit: (values, {props, setSubmitting, setErrors}) => {
    setSubmitting(true);
    login(values)
      .then(ret => {
        
        // Add validation
        
        setSubmitting(false);
        props.screenProps.navigation.navigate('SignedIn');
      })
      .catch(err => {
        setSubmitting(false);
        setErrors({message: err.message});
      });
  }
})(SignIn);

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  formError: {
    flex: 1,
    alignSelf: 'flex-start',
    justifyContent: 'flex-end',
    marginHorizontal: 45,
  },
  formText: {
    color: colors.lighter,
  },
  serverError: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center'
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
  }
});