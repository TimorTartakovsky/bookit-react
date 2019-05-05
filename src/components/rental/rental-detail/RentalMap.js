import React from 'react';
import { MapWithGeocode } from '../../map/GoogleMap';

export class RentalMap extends React.Component {
    render() {
        const { location } = this.props;
        return (
            <MapWithGeocode
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvJ2qZKCYp1KUy2WrMPI9XytLG6_6aYLE&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `360px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                location={location}
            />
        )
    }
}