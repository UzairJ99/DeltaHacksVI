import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  render(){
    const GoogleMapEg = withGoogleMap(props => (
        <GoogleMap
            defaultCenter = {{ lat: 43.261061, lng: -79.922513 }}
            defaultZoom = { 19 }>
        </GoogleMap>
    ));

    return(
      <div>
          <GoogleMapEg
            containerElement = { <div style={{ height: '500px', width: '1522px' }} /> }
            mapElement = { <div style={{ height: '100%', width: '100%' }} /> }
          />
      </div>
    );
  }
};

export default Map;