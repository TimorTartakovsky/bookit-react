import * as actions from './actions';
import axios from 'axios';
import * as urlParams from '../../consts/request-const';

export const initRentals = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.API_VERSION}${urlParams.RENTALS_ROUTE}`;
        axios.get(url).then((rental) => {
            const action = new actions.InitRentals(payload || {
                rentals: rental.data,
            });
            dispatch({...action})
        });
    }
}

export const fetchRentalById = (id) => {
    const action = new actions.FetchRentalById({ id });
    return action;
}

export const fetchRentalByIdAsync = (id) => {
    return function(dispatch) {
        const url = `${urlParams.API_VERSION}${urlParams.RENTALS_ROUTE}/${id}`;
        axios.get(url).then((rental) => {
            dispatch({...fetchRentalById(rental.data._id)});
        });
    }
}