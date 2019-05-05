import React from 'react';
import { withScriptjs, withGoogleMap } from "react-google-maps";
import { MapComponent } from './MapComponent';
import { Cacher } from '../../services/cacher';

const withGeocode = (WrappedComponent) => {
  return class extends React.Component {
    
    constructor() {
      super();

      this.cacher = new Cacher();
      this.state = {
        coordinates: {
          lat: 0,
          lng: 0,
        }
      }
    }
    
    componentWillMount() {
      this.geocodeLocation();
    }

    geocodeLocation() {
      const { location } = this.props;
      
      if (this.cacher.isValueCached(location)) {
        this.setState({
          coordinates: this.cacher.getCacheVale(location),
        });
        return;
      }

      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (result, status) => {
        if (status === 'OK') {
          const geometry = result[0].geometry.location || {};
          const coordinates = { lat: geometry.lat(), lng: geometry.lng() };
          this.cacher.cacheValue(location, coordinates);
          this.setState({
            coordinates: coordinates,
          });
        }
      });
    }

    render() {
      return (
        <WrappedComponent {...this.state}/>
      )
    }
  }
}

export const MapWithGeocode = withScriptjs(withGoogleMap(withGeocode(MapComponent)));
