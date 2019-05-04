import * as actions from '../actions/rentals/actions';

const initRentalsState = {
    data: [],
    selectedRental: {},
};

export const rentalReducer = (state = initRentalsState, action) => {
    switch (action.type) {
        case actions.InitRentals.Type:
            return {...state, ...{ data: action.payload.rentals }}; 
        case actions.FetchRentalById.Type:
            const rental = state.data.find(r => r._id === action.payload.id);
            return {...state, ...{ selectedRental: rental }};
        default: return state;
    }
}