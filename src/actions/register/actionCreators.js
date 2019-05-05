import * as actions from './actions';
import axios from 'axios';
import * as urlParams from '../../consts/request-const';
import authService from '../../services/auth-service';

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

// export const checkoutAuthentication = () => {
//     return function(dispatch) {
//         debugger;
//         const token = authService.getToken();
//         if (token && authService.isValid(token)) {
//             const action = new actions.LoginUser({
//                 token: token,
//             });
//             dispatch({...action})
//         }  
//     }
// }


export const loginUser = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.API_VERSION}${urlParams.USERS_ROUTE}${urlParams.AUTH_USER_URL}`;
        axios.post(url, { ...payload }).then(
            (loginUser) => {
                const { token } = loginUser.data;
                localStorage.setItem(urlParams.authTokenStorageKey, token);
                const action = new actions.LoginUser({
                    token: token,
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