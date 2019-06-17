import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const Marker = () => 'M';

class Map extends Component {

  static defaultProps = {
    center: {
      lat: 16.847694,
      lng: -94.343113
    },
    zoom: 4
  };

  render() {

    const quakesToRender = this.props.currentQuake === '' ?
      this.props.quakes : [this.props.currentQuake];

    const center = this.props.currentQuake === '' ?
      this.props.center : {
        lat: this.props.currentQuake.geometry.coordinates[1],
        lng: this.props.currentQuake.geometry.coordinates[0]
      };

    const markers = quakesToRender.map(quake => {
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
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          center={center}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  };

}

export default Map;
