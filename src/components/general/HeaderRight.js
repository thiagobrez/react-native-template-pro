import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import {metrics, colors} from '../../styles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as navigationActions from '../../actions/navigation';
import {StyleSheet, TouchableOpacity} from 'react-native';

/**
 * @author Thiago Brezinski
 *
 * Componente para o canto superior direito de StackNavigators. Ao ser pressionado,
 * redireciona para uma rota específica. Se a rota for um overlay, não é renderizado.
 */
class HeaderRight extends Component {
	
	state = {
		icon: 'settings-outline'
	};
	
	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			switch (nextProps.data) {
				case 'Tab4':
					this.setState({icon: 'settings'});
					break;
				default:
					this.setState({icon: 'settings-outline'});
					break;
			}
		}
	}
	
	render() {

		if(this.props.data === 'Overlay1') return null;

		const {icon} = this.state;
		const {navigate} = this.props.navigation;
		
		return (
			<TouchableOpacity style={styles.container} onPress={() => navigate('Tab4')}>
				<Icon name={`ios-${icon}`}
							style={styles.icon}
							size={26}/>
			</TouchableOpacity>
		);
	}
}

HeaderRight.propTypes = {
  data: PropTypes.string
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: metrics.headerRightPadding
	},
	icon: {
		color: colors.secondary
	},
});

const mapStateToProps = state => ({
	data: state.navigation.data
});

const mapDispatchToProps = dispatch => bindActionCreators(navigationActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HeaderRight);