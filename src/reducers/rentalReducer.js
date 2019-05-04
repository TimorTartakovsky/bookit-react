import * as data from '../schemas/data.json';
import * as actions from '../actions/rentals/action';
const initRentalsState = {
    data: data.rentals,
};

export const rentalReducer = (state = initRentalsState, action) => {
    switch (action.type) {
        case actions.InitRentals.type:
            return {...state, ...{ data: action.payload.rentals }}; 
        default: return state;
    }
}