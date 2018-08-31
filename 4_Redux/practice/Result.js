import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';

class Result extends Component {

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 100}}>
                    {this.props.counter}
                </Text>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    const {counter} = state;
    return {counter};
};

export default connect(mapStateToProps)(Result);
// export default (Result);
