import React from 'react';
import { Component } from 'react';
import './App.css';

const QuakesList = (props) => {

  const quakeCards = props.quakes.map(quake => {
    return(
      <p>{quake.properties.mag} - {quake.properties.place}</p>
    );
  });

  return(
    quakeCards
  );

};

export default QuakesList;
