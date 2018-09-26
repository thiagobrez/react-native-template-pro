# react-native-template-pro

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?)](https://github.com/thiagobrez/react-native-template-pro/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/thiagobrez/react-native-template-pro.svg)](https://github.com/thiagobrez/react-native-template-pro/blob/master/LICENSE)

![Usage demo](https://github.com/thiagobrez/react-native-template-pro/blob/master/demo.gif)

A React Native template with a nice folder structure, navigation, database, async and debugging tools support.

### :bookmark_tabs: Requirements

---

* React Native [properly installed](https://facebook.github.io/react-native/docs/getting-started.html) (building projects with native code)
* Reactotron [properly installed](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
* Knowledge on [Redux](https://redux.js.org/) and [Redux-Saga](https://github.com/redux-saga/redux-saga)
* Knowledge on [Realm](https://realm.io/docs/javascript/latest) database

### :arrow_forward: Installation

---

`react-native init MyMillionDollarApp --template pro`

`cd MyMillionDollarApp`

`react-native run-ios` or `react-native run-android` 

### :package: What's included

---

* **Folder structure**
* [Reactotron](https://github.com/infinitered/reactotron): debugging
* [Redux](https://redux.js.org/): state management
* [Redux Saga](https://github.com/redux-saga/redux-saga): async calls
* [React Navigation](https://reactnavigation.org/): routing and navigation
* [Realm](https://realm.io/docs/javascript/latest): mobile database
* [Prop Types](https://www.npmjs.com/package/prop-types): typing for component props
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): huge set of customizable icons
* [React Native Linear Gradient](https://github.com/react-native-community/react-native-linear-gradient): gradient styles
* [Formik](https://github.com/jaredpalmer/formik) & [Yup](https://github.com/jquense/yup): easy form handling

### :computer: Jetbrains Webstorm snippets

---

See [how to create and use](https://blog.jetbrains.com/webstorm/2018/01/using-and-creating-code-snippets/)

* **comp** (stateful component)
```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export default class $ComponentName$ extends Component {
  render() {
    return (
      <View>
        <Text>$ComponentName$</Text>
        $END$
      </View>
    );
  }
}

$ComponentName$.propTypes = {};
const styles = StyleSheet.create({});
```

* **rcomp** (stateful redux component)
```javascript
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as $storeProp$Actions from '../actions/$storeProp$';
import {View, Text, StyleSheet} from 'react-native';

class $ComponentName$ extends Component {
  
  render() {
    
    return (
      <View>
        <Text>$ComponentName$</Text>
        $END$
      </View>
    );
    
  }
  
}

$ComponentName$.propTypes = {
  //TODO: data
  error: PropTypes.shape({
    $storeProp$: PropTypes.bool
  }),
  loading: PropTypes.shape({
    $storeProp$: PropTypes.bool
  }),
};

const styles = StyleSheet.create({

});

const mapStateToProps = state => ({
  data: {
    $storeProp$: state.$storeProp$.data
  },
  error: {
    $storeProp$: state.$storeProp$.error
  },
  loading: {
    $storeProp$: state.$storeProp$.loading
  },
});

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      $storeProp$: bindActionCreators($storeProp$Actions, dispatch),
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)($ComponentName$);
```

* **scomp** (stateless component)
```javascript
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

const $ComponentName$ = () => (
    <View>
      <Text>$ComponentName$</Text>
      $END$
    </View>
);

$ComponentName$.propTypes = {};

export default $ComponentName$;
```

* **con** (console.display)

```javascript
console.display('$var$', $var$);
```

* **tron** (console.tron)

```javascript
console.tron('$var$');
```

### :pushpin: Roadmap

---

- [x] Integrate mobile database
- [ ] Fully integrate react-navigation to redux
- [∞] Add more reusable components

### :warning: Known issues

---

* [Unknown named module: 'NativeModules'](https://github.com/infinitered/reactotron/issues/724) - **RN 0.56**

### :pencil2: Contributing

---

This is an initial release, feel free to submit your issues or PR's!

### :clipboard: License

---

[MIT](https://github.com/thiagobrez/react-native-template-pro/blob/master/LICENSE)