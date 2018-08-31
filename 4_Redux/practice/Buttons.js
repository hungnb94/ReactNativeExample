import React, {Component} from 'react';
import {View, Button, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {increaseCounter, decreaseCounter} from './CounterActions';

class Buttons extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text
                    style={{backgroundColor: '#11ff00', fontSize: 30, padding: 10, width: '90%', textAlign: 'center'}}
                    onPress={() => this.props.increaseCounter()}
                >
                    Increase
                </Text>

                <Text
                    style={{marginTop: 20, backgroundColor: '#11ff00', fontSize: 30, padding: 10, width: '90%', textAlign: 'center'}}
                    onPress={() => this.props.decreaseCounter()}
                >
                    Decrease
                </Text>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators( {increaseCounter, decreaseCounter}, dispatch)
);

export default connect(null, mapDispatchToProps)(Buttons);
