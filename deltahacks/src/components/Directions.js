import React, { Component } from 'react';
import { compose, withProps } from 'recompose';
import DirectionsAux from './DirectionsAux';
import { G_API_URL } from '../utility/cities';
import DummyLocations from '../utility/connections';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

class Directions extends Component {
  state = {
    defaultZoom: 9,
    map: null,
    center: {
      lat: 43.386687,
      lng: -79.815520
    }
  };

  render() {
    return (
      <GoogleMap
        defaultZoom={this.state.defaultZoom}
        center={this.state.center}
        defaultCenter={new window.google.maps.LatLng(23.21632, 72.641219)}
      >
        {DummyLocations.map((elem, index) => {
          return (
            <DirectionsAux
              key={index}
              index={index + 1}
              strokeColor={elem.strokeColor}
              from={elem.from}
              to={elem.to}
            />
          );
        })}
      </GoogleMap>
    );
  }
}

export default compose(
  withProps({
    googleMapURL: G_API_URL,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `600px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(Directions);