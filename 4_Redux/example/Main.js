import React from 'react';
import AppNavigator from './AppNavigator';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import friendReducer from './FriendReducer';


const store = createStore(friendReducer);

export default class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}
