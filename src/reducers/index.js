import { rentalReducer } from './rentalReducer';
import { userReducer } from './userReducer';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const initApplicationStore = () => {
    const reducer = combineReducers({
        rentals: rentalReducer,
        userData: userReducer,
        form: formReducer,
    });
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
    return store;
}