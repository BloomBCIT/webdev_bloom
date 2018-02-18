import React, { Component } from 'react';
import '../../App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>{
    
    return(
          <GoogleMap
            defaultZoom={15}
            defaultCenter={{ lat: 49.250928, lng: -123.0034159 }}
            >
            {props.isMarkerShown && <Marker position={{ lat: 49.250928, lng: -123.0034159 }} />}
            </GoogleMap>
    
    )
}))

export default MyMapComponent;