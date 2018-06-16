# react-native-template-pro
React Native template with a nice folder structure, navigation, async and debugging tools.

### Requirements
* React Native [properly installed](https://facebook.github.io/react-native/docs/getting-started.html) (building projects with native code).
* Reactotron [properly installed](https://github.com/infinitered/reactotron/blob/master/docs/installing.md).
* Knowledge on [Redux](https://redux.js.org/) and [Redux-Saga](https://github.com/redux-saga/redux-saga)

### Installation
`react-native init MyMillionDollarApp --template pro`

`cd MyMillionDollarApp`

`yarn add --dev reactotron-react-native reactotron-redux reactotron-redux-saga`

or

`npm install --save-dev reactotron-react-native reactotron-redux reactotron-redux-saga`

### What's included
* **Folder structure**
* [Reactotron](https://github.com/infinitered/reactotron): debugging
* [Redux](https://redux.js.org/): state management
* [Redux Saga](https://github.com/redux-saga/redux-saga): async calls
* [React Navigation](https://reactnavigation.org/): routing and navigation
* [Prop Types](https://www.npmjs.com/package/prop-types): typing for component props
* [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons): huge set of customizable icons

### Jetbrains Webstorm snippets
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
[] Integrate mobile database

[] Add more reusable components


### Contributing
This is an initial release, feel free to submit a PR!

### License

MIT