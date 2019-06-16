import React from 'react';
import QuakeCard from './QuakeCard'

const QuakesList = (props) => {

  const quakeCards = props.quakes.map(quake => {
    return(
      <QuakeCard
        key={quake.id}
        quake={quake}
        selectCurrentQuake={props.selectCurrentQuake}
      />
    );
  });

  return(
    quakeCards
  );

};

export default QuakesList;
