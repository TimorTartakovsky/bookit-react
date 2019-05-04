import React from 'react';

export class RentalDetail extends React.Component {

    render() {
        const { id } = this.props.match.params;
        return (
            <h1>Rental Detail {id}</h1>
        )
    }
}
