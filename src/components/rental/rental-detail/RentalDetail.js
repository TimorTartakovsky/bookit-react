import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../actions/rentals/actionCreators';
import { RentalDetailInfo } from './RentalDetailInfo';
import { RentalMap } from './RentalMap';

class RentalDetail extends React.Component {

    componentWillMount() {
        const { id } = this.props.match.params;
        const fetchSelectedRental = actionCreators.fetchRentalByIdAsync(id);
        this.props.dispatch(fetchSelectedRental);
    }

    render() {
        const rental = this.props.selectedRental || {};
        return (
                <section id='rentalDetails'>
                    <div className='upper-section'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img src={rental.image} alt=''></img>
                            </div>
                            <div className='col-md-6'>
                               <RentalMap location={`${rental.city}, ${rental.street}`}/> 
                            </div>
                        </div>
                    </div>
            
                    <div className='details-section'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <RentalDetailInfo rental={rental} />
                            </div>
                            <div className='col-md-4'> BOOKING</div>
                        </div>
                    </div>
                </section>
                )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedRental: state.rentals.selectedRental,
    }
}

export default connect(mapStateToProps)(RentalDetail)