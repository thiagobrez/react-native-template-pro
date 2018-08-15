import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Realm from 'realm';
import {SomethingSchema} from '../realm/schemas';
import {colors, fonts} from '../styles';
import {Button} from '../components';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default class Tab3 extends Component {
  
  state = {
    realm: new Realm()
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
    
    const somethings = !this.state.realm.empty ?
      `Number of Somethings in the database: ${this.state.realm.objects('Something').length}` :
      'Database is empty :/';
    
    return (
      <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>
              {somethings}
            </Text>
          </View>
          <View style={styles.buttonWrapper}>
            <Button text='Create Something'
                    textColor={colors.secondary}
                    textWeight={fonts.boldest}
                    color={colors.primary}
                    onPress={this.createSomething}/>
          </View>
        </View>
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