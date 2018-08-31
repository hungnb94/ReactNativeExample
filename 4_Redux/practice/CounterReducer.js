import {combineReducers} from 'redux';
import {INCREASE, DECREASE} from "./types";


const initial = 0;

const counterReducer = (state = initial, action) => {
    switch (action.type) {
        case INCREASE:
            return ++state;
        case DECREASE:
            return --state;
        default:
            return state;
    }
};

export default combineReducers({
    counter: counterReducer,
});
