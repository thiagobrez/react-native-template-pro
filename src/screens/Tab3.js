import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Realm from 'realm';
import {SomethingSchema} from '../realm/schemas';
import {Button} from '../components';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab3 extends Component {
  
  state = {
    realm: null
  };
  
  /**
   * Persists a new object of 'Something' to the database.
   */
  createSomething = () => {
    Realm.open({schema: [SomethingSchema]})
      .then(realm => {
        realm.write(() => {
          realm.create('Something', {
            property1: 'prop1',
            property3: [1, 2, 3]
          });
        });
        this.setState({realm});
      });
  };
  
  render() {
    
    const somethings = this.state.realm ?
      `There are ${this.state.realm.objects('Something').length} Somethings in the database` :
      'Database is empty :/';
    
    return (
      <View style={styles.container}>
        <Text>Tab3</Text>
        <Text>{somethings}</Text>
        <Button onPress={this.createSomething}>
          Create Something
        </Button>
      </View>
    );
    
  }
  
}

Tab3.propTypes = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});