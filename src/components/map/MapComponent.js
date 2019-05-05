import React from 'react';
import {
    GoogleMap,
    Circle,
  } from "react-google-maps";

export const MapComponent = (props) => {
    const { coordinates } = props;
    return (
        <GoogleMap
            defaultZoom={13}
            defaultCenter={coordinates}
            center={coordinates}
        >
            <Circle
                center={coordinates}
                radius={500}
            />
        </GoogleMap>
    )
}