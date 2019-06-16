import React from 'react';
import { Component } from 'react';
import './App.css';
import QuakesList from './QuakesList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      quakes: [],
      currentQuake: ''
    };
    this.fetchQuakesData();
  }

  fetchQuakesData() {
    fetch('http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson')
    .then(res => res.json())
    .then(data => {
      console.log(data.features);
      this.setState({
        quakes: data.features
      });
    })
    .catch(err => {
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div id="map">

            </div>
          </div>
          <div className="col-md-6">
            <div id="info">
              <h1>Recent Earthquakes</h1>
              <p>M 4.2 - 1km ESE of Fontana, California / 123 hours ago </p>
              <QuakesList quakes={this.state.quakes} />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
