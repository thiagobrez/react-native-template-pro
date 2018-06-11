import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {colors} from '../../styles';
import {View, TextInput, StyleSheet} from 'react-native';

/**
 * @author Thiago Brezinski
 *
 * Barra de pesquisa customizável. Aceita as props containerStyle e searchBarStyle.
 * Se não forem passados, serão utilizados os estilos padrões.
 */
export default class SearchBar extends Component {
  
  constructor() {
    super();
    this._containerStyle = {};
    this._searchBarStyle = {};
  }
  
  componentWillReceiveProps(nextProps) {
    this._containerStyle = nextProps.containerStyle ?
      nextProps.containerStyle :
      styles.containerStyle;
    
    this._searchBarStyle = nextProps.style ?
      nextProps.style :
      styles.searchBarStyle;
  }
  
  render() {
    
    const {placeholder, onChangeText, value} = this.props;
    
    return (
      <View style={this._containerStyle}>
        <TextInput
          style={this._searchBarStyle}
          underlineColorAndroid={'transparent'}
          placeholder={placeholder}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    );
    
  }
  
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  containerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  searchBarStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: colors.primary
  },
  searchBarStyle: {
    margin: 5,
    height: 40,
    borderRadius: 5,
    backgroundColor: colors.lighter,
    paddingHorizontal: 5
  }
});