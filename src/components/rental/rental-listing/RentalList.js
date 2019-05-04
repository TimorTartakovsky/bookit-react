import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/rentals/actionCreators';

class RentalList extends React.Component {
    
    componentWillMount() {
        const initRentalAction = actionCreators.initRentals();
        this.props.dispatch(initRentalAction);
    }

    generateRentals() {
        const rentals = this.props.rentals && this.props.rentals.data ? this.props.rentals.data.map((r) => 
            <RentalCard 
                key={r._id}
                rental={r}
            />
        ) : null;
        return rentals;
    }

    render() {
        return (
            <section id='rentalListing'>
                <h1 className='page-title'>Your Home All Around the World</h1>
                <div className='row'>
                    { this.generateRentals() }
                </div>
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        rentals: state.rentals,
    }
}

export default connect(mapStateToProps)(RentalList)