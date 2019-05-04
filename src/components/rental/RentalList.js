import React from 'react';
import { RentalCard } from './RentalCard';
import * as data from '../../schemas/data.json';

export class RentalList extends React.Component {
    
    constructor() {
        super();
        this.state = {
            rentals: data.rentals,
        }
    }
    
    generateRentals() {
        return this.state.rentals.map((r) => 
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