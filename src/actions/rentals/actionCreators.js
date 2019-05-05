import * as actions from './actions';
import * as urlParams from '../../consts/request-const';
import axiosService from '../../services/axios-service';

const axiosInstance = axiosService.getInstance();

export const initRentals = (payload) => {
    return function(dispatch) {
        const url = `${urlParams.RENTALS_ROUTE}`;
        axiosInstance.get(url).then((rental) => {
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
        const url = `${urlParams.RENTALS_ROUTE}/${id}`;
        axiosInstance.get(url).then((rental) => {
            dispatch({...fetchRentalById(rental.data._id)});
        });
    }
}