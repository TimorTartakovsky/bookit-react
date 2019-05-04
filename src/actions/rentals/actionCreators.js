import * as actions from './actions';
import * as data from '../../schemas/data.json';

export const initRentals = (payload) => {
    const action = new actions.InitRentals(payload || {
        rentals: data.rentals,
    });
    return action;
}

export const fetchRentalById = (id) => {
    if (!Number.isInteger(id)) {
        try {
            const parsedId = Number.parseInt(id);
            const action = new actions.FetchRentalById({ id: parsedId });
            return action;
        } catch (e) {
            console.error(`fetchRentalById received NaN data in arguments.`);
        }
    }
    const action = new actions.FetchRentalById({ id });
    return action;
}