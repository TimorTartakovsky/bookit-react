import React from 'react';
import { Link } from 'react-router-dom';

export const RentalCard = (props) => {
    const { rental } = props;
    return (
        <div className='col-md-3 col-xs-6'>
            <Link to={`/rental/${rental.id}`}>
                <div className='card rental-card'>
                    <img className='card-img-top' src={rental.image || 'http://via.placeholder.com/350x250'} alt=''></img>
                    <div className='card-block'>
                        <h6 className='card-subtitle'>{rental.shared ? 'Shared Apartment' : 'Whole Apartment'} &#183; {rental.city}</h6>
                        <h4 className='card-title'>{rental.title}</h4>
                        <p className='card-text'>{rental.dailyRate} &#183; Free Cancelation</p>
                        {/* <a href='/#' className='card-link'>More Info</a> */}
                    </div>
                </div>
            </Link>
        </div>
    )
}