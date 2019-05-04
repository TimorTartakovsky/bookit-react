import * as actions from './action';
import * as data from '../../schemas/data.json';

export const initRentals = (payload) => {
    const action = new actions.InitRentals(payload || {
        rentals: data.rentals,
    });
    return action;
}