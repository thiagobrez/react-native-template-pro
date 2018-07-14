# react-native-template-pro

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?)](https://github.com/thiagobrez/react-native-template-pro/graphs/commit-activity)
[![GitHub license](https://img.shields.io/github/license/thiagobrez/react-native-template-pro.svg)](https://github.com/thiagobrez/react-native-template-pro/blob/master/LICENSE)

![Usage demo](https://github.com/thiagobrez/react-native-template-pro/blob/master/demo.gif)

A React Native template with a nice folder structure, navigation, database, async and debugging tools support.

### Requirements

---

* React Native [properly installed](https://facebook.github.io/react-native/docs/getting-started.html) (building projects with native code)
* Reactotron [properly installed](https://github.com/infinitered/reactotron/blob/master/docs/installing.md)
* Knowledge on [Redux](https://redux.js.org/) and [Redux-Saga](https://github.com/redux-saga/redux-saga)
* Knowledge on [Realm](https://realm.io/docs/javascript/latest) database

### Installation

---

`react-native init MyMillionDollarApp --template pro`

`cd MyMillionDollarApp`

`react-native run-ios` or `react-native run-android` 

### What's included

---

* **Folder structure**
* [Reactotron](https://github.com/infinitered/reactotron): debugging
* [Redux](https://redux.js.org/): state management
* [Redux Saga](https://github.com/redux-saga/redux-saga): async calls
* [React Navigation](https://reactnavigation.org/): routing and navigation
* [Realm](https://realm.io/docs/javascript/latest): mobile database
* [Prop Types](https://www.npmjs.com/package/prop-types): typing for component props
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): huge set of customizable icons

### Jetbrains Webstorm snippets

---

See [how to create and use](https://blog.jetbrains.com/webstorm/2018/01/using-and-creating-code-snippets/)
* Stateful component
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

* Stateful Redux component
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
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  error: PropTypes.boolean,
  loading: PropTypes.boolean,
};

const styles = StyleSheet.create({});

const mapStateToProps = state => ({
  data: state.$storeProp$.data,
  error: state.$storeProp$.error,
  loading: state.$storeProp$.loading
});
const mapDispatchToProps = dispatch => bindActionCreators($storeProp$Actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)($ComponentName$);
```

* Stateless component
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

### Roadmap

---

- [x] Integrate mobile database
- [ ] Fully integrate react-navigation to redux
- [ ] Add more reusable components

### Known issues

---

* [Unknown named module: 'NativeModules'](https://github.com/infinitered/reactotron/issues/724) - **RN 0.56**

### Contributing

---

This is an initial release, feel free to submit your issues or PR's!

### License

---

[MIT](https://github.com/thiagobrez/react-native-template-pro/blob/master/LICENSE)