import React from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from "./Home";
import Friends from "./Friends";

export default createStackNavigator({
    Home: {
        screen: Home,
    },
    Friends: {
        screen: Friends,
    },
});
