import React, {Component} from 'react';
import {Text, View} from 'react-native';

class HelloWorld extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#ff5848', alignItems: 'center', justifyContent: 'center'}}>
                <Text>Hello world!</Text>
            </View>
        );
    }
}

export default HelloWorld;
