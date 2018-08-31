import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Result from './Result';
import Buttons from './Buttons';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import counterReducer from './CounterReducer';


const store = createStore(counterReducer);

export default class Main extends Component {

    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <Result/>
                    </View>
                    <View style={{flex: 1}}>
                        <Buttons/>
                    </View>
                </View>
            </Provider>
        )
    }
}
