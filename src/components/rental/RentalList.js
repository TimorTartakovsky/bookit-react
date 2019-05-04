import React from 'react';
import { RentalCard } from './RentalCard';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/rentals/actionCreators';

class RentalList extends React.Component {
    
    componentWillMount() {
        const initRentalAction = actionCreators.initRentals();
        this.props.dispatch({...initRentalAction});
    }

    generateRentals() {
        return this.props.rentals.data.map((r) => 
            <RentalCard 
                key={r.id}
                rental={r}
            />
        );
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