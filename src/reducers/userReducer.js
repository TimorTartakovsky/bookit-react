import * as actions from '../actions/register/actions';

const initRentalsState = {
    user: {
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
        default: return state;
    }
}