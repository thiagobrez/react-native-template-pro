import {
  GET_SOMETHING,
  CREATE_USER,
  LOGIN
} from './endpoints';

/**
 * Request template.
 */
export const getSomething = async param => {
  console.display('GET_SOMETHING', GET_SOMETHING);
  return null;
  // let res = await fetch(`${GET_SOMETHING}?param=${param}`);
  // return await res.json();
};

export const register = async values => {
  try {
    // const
    //   res = await fetch(CREATE_USER, {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: values.email,
    //       password: values.password,
    //     }),
    //   }),
    //   ret = JSON.parse(res._bodyText);
    
    // Persist user if success
    // AsyncStorage.setItem('user', JSON.stringify(ret.data));
  
    return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 2000);
    });
  } catch (err) {
    console.display('Register error', err, true);
  }
};

export const login = async values => {
  try {
    // const
    //   res = await fetch(LOGIN, {
    //     method: 'POST',
    //     headers: {
    //       Accept: 'application/json',
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({
    //       email: values.email,
    //       password: values.password,
    //     }),
    //   }),
    //   ret = JSON.parse(res._bodyText);
  
    // Persist user if success
    // AsyncStorage.setItem('user', JSON.stringify(ret.data));
    
    return await new Promise((resolve, reject) => {
      setTimeout(() => resolve(true), 2000);
    });
  } catch (err) {
    console.display('Login error', err, true);
  }
};