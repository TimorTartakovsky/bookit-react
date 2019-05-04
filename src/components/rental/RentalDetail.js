import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/rentals/actionCreators';

class RentalDetail extends React.Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        const fetchSelectedRental = actionCreators.fetchRentalById(id);
        this.props.dispatch({...fetchSelectedRental});
    }

    render() {
        const selectedRental = this.props.selectedRental || {};
        return (
                <div>
                    <h1>{ selectedRental.title }</h1>
                    <h1>{ selectedRental.city }</h1>
                    <h1>{ selectedRental.description }</h1>
                    <h1>{ selectedRental.dailyRate }</h1>
                </div>
                )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRental: state.rentals.selectedRental,
    }
}

export default connect(mapStateToProps)(RentalDetail)