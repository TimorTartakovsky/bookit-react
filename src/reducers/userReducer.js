import * as actions from '../actions/register/actions';

const initRentalsState = {
    token: '',
    user: {
        isAuth: false,
        username: '',
        email: '',
    },
    registrationErrors: undefined, 
};

export const userReducer = (state = initRentalsState, action) => {
    switch (action.type) {
        case actions.RegisterUser.Type:
            return {...state, ...{ user: action.payload.user }};
        case actions.RegistrationError.Type:
            return {...state, ...{ registrationErrors: action.payload.error }};
        case actions.LoginUser.Type:
            debugger;
            return {...state, ...{ token: action.payload.token }};
        case actions.LoginUserError.Type:
            return {...state, ...{ registrationErrors: action.payload.error }};
        default: return state;
    }
}