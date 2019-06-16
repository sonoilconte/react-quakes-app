import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => 'M';

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 43,
      lng: -121
    },
    zoom: 11
  };

  render() {

    const markers = this.props.quakes.map(quake => {
      const coordinates = quake.geometry.coordinates;
      return (
        <Marker
          lat={coordinates[1]}
          lng={coordinates[0]}
        />
      );
    });

    return(
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact defaultCenter={this.props.center} defaultZoom={this.props.zoom}>
          {markers}
        </GoogleMapReact>
      </div>
    );
  };

}

export default Map;
