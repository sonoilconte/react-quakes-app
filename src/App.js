import React from 'react';
import { Component } from 'react';
import './App.css';
import QuakesList from './QuakesList';
import Map from './Map';

class App extends Component {

  constructor() {
    super();
    this.state = {
      quakes: [],
      currentQuake: ''
    };
    this.fetchQuakesData();
    this.selectCurrentQuake = this.selectCurrentQuake.bind(this);
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

  selectCurrentQuake(currentQuake) {
    console.log('selecting current quake ', currentQuake);
    this.setState({ currentQuake });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <Map
              quakes={this.state.quakes}
              currentQuake={this.state.currentQuake}
            />
          </div>
          <div className="col-md-4">
            <div id="info">
              <h1>Recent Earthquakes</h1>
              <QuakesList
                quakes={this.state.quakes}
                selectCurrentQuake={this.selectCurrentQuake}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
