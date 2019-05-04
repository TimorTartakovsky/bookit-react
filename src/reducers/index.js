import * as redux from 'redux';
import { rentalReducer } from './rentalReducer';

export const initApplicationStore = () => {
    const reducer = redux.combineReducers({
        rentals: rentalReducer,
    })
    const store = redux.createStore(reducer);
    return store;
}