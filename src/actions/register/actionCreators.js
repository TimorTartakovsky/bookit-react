import * as actions from './actions';
import axios from 'axios';
import * as urlParams from '../../consts/request-const';

export const registerUser = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.API_VERSION}${urlParams.USERS_ROUTE}${urlParams.REGISTER_USER_URL}`;
        axios.post(url, { ...payload }).then(
            (registeredUser) => {
                const action = new actions.RegisterUser({
                    user: registeredUser.data,
                });
                dispatch({...action})
            },
            (error) => {
                const action = new actions.RegistrationError({
                    error: error.response && error.response.data,
                });
                dispatch({...action})
            });
    }
}

export const loginUser = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.API_VERSION}${urlParams.USERS_ROUTE}${urlParams.AUTH_USER_URL}`;
        axios.post(url, { ...payload }).then(
            (loginUser) => {
                const action = new actions.LoginUser({
                    user: loginUser.data,
                });
                dispatch({...action})
            },
            (error) => {
                const action = new actions.LoginUserError({
                    error: error.response && error.response.data,
                });
                dispatch({...action})
            });
    }
}