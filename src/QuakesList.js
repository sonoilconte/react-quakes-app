import React from 'react';
import QuakeCard from './QuakeCard'

const QuakesList = (props) => {

  const quakeCards = props.quakes.map(quake => {
    return(
      // <p>{quake.properties.mag} - {quake.properties.place}</p>
      <QuakeCard quake={quake.properties} />
    );
  });

  return(
    quakeCards
  );

};

export default QuakesList;
