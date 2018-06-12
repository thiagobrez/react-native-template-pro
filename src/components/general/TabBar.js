import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors, metrics} from '../../styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navigationActions from '../../actions/navigation';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

/**
 * Custom tab bar to be used in a TabNavigator.
 */
class TabBar extends Component {
  
  state = {
    tab1Icon: 'time-outline',
    tab2Icon: 'home',
    tab2IconColor: colors.secondary,
    tab2BackgroundColor: colors.transparent,
    tab3Icon: 'cart-outline',
  };
  
  componentWillReceiveProps(receivedProps) {
    if (receivedProps.data !== this.props.data) {
      switch (receivedProps.data) {
        case 'Tab1':
          this.setState({
            tab2Icon: 'home-outline',
            tab2IconColor: colors.secondary,
            tab2BackgroundColor: 'transparent',
            tab1Icon: 'time',
            tab3Icon: 'cart-outline'
          });
          break;
        case 'Tab2':
          this.setState({
            tab2Icon: 'home',
            tab2IconColor: colors.secondary,
            tab2BackgroundColor: colors.transparent,
            tab1Icon: 'time-outline',
            tab3Icon: 'cart-outline'
          });
          break;
        case 'Tab3':
          this.setState({
            tab2Icon: 'home-outline',
            tab2IconColor: colors.secondary,
            tab2BackgroundColor: 'transparent',
            tab1Icon: 'time-outline',
            tab3Icon: 'cart'
          });
          break;
        default:
          this.setState({
            tab2Icon: 'home-outline',
            tab2IconColor: colors.secondary,
            tab2BackgroundColor: 'transparent',
            tab1Icon: 'time-outline',
            tab3Icon: 'cart-outline'
          });
          break;
      }
    }
  }
  
  render() {
    
    const {navigate} = this.props.navigation;
    const {
      tab2Icon,
      tab2IconColor,
      tab2BackgroundColor,
      tab1Icon,
      tab3Icon
    } = this.state;
    
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Tab1')}
                          style={styles.tab1}>
          <Icon name={`ios-${tab1Icon}`}
                style={styles.tab1Icon}
                size={26}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Tab2')}
                          style={[styles.tab2, {backgroundColor: tab2BackgroundColor}]}>
          <Icon name={`ios-${tab2Icon}`}
                style={[styles.tab2Icon, {color: tab2IconColor}]}
                size={26}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Tab3')}
                          style={styles.tab3}>
          <Icon name={`ios-${tab3Icon}`}
                style={styles.tab3Icon}
                size={26}/>
        </TouchableOpacity>
      </View>
    );
    
  }
  
}

TabBar.propTypes = {
  data: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.primary,
    height: metrics.tabBarHeight,
    paddingHorizontal: metrics.padding,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  tab1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab1Icon: {
    color: colors.secondary
  },
  tab2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab2Icon: {},
  tab3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tab3Icon: {
    color: colors.secondary,
  }
});

const mapStateToProps = state => ({
  data: state.navigation.data
});

const mapDispatchToProps = dispatch => bindActionCreators(navigationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TabBar);