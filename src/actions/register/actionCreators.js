import * as actions from './actions';
import * as urlParams from '../../consts/request-const';
import axiosService from '../../services/axios-service';

const axiosInstance = axiosService.getInstance();

export const registerUser = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.USERS_ROUTE}${urlParams.REGISTER_USER_URL}`;
        axiosInstance.post(url, { ...payload }).then(
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
        const url = `${urlParams.USERS_ROUTE}${urlParams.AUTH_USER_URL}`;
        axiosInstance.post(url, { ...payload }).then(
            (loginUser) => {
                const { token } = loginUser.data;
                localStorage.setItem(urlParams.authTokenStorageKey, token);
                const action = new actions.LoginUser({
                    token: token,
                });
                dispatch({...action})
            },
            (error) => {
                debugger;
                const action = new actions.LoginUserError({
                    error: error.response && error.response.data,
                });
                dispatch({...action})
            });
    }
}