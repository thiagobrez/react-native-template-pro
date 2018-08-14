import * as yup from 'yup';

/**
 * Adds 'sameAs' method to Yup for verifying if two or more input fields match.
 */
yup.addMethod(yup.mixed, 'sameAs', function (ref, message) {
  return this.test('sameAs', message, function (value) {
    let other = this.resolve(ref);
    
    return !other || !value || value === other;
  })
});

export const LOGIN_SCHEMA = yup.object().shape({
  email: yup.string()
    .email('Email is invalid!')
    .required('Email is required!'),
  password: yup.string()
    .min(6, 'Minimum 6 characters!')
    .required('Password is required!'),
});

export const SIGNUP_SCHEMA = yup.object().shape({
  email: yup.string()
    .email('Email is invalid!')
    .required('Email is required!'),
  password: yup.string()
    .min(6, 'Minimum 6 characters!')
    .required('Password is required!'),
  passwordConfirmation: yup.string()
    .sameAs(yup.ref('password'), 'Passwords do not match!')
    .required('Password confirmation is required!')
});