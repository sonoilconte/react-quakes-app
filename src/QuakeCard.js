import React from 'react';

const QuakeCard = (props) => {

  const currentTime = new Date().getTime();
  let timeElapsed = currentTime - props.quake.properties.time;
  // Time elapsed in hours since quake
  timeElapsed = Math.round(10 * timeElapsed / 1000 / 60 / 60) / 10;

  return(
    <div onClick={() => { props.selectCurrentQuake(props.quake) }}>
      <div>{timeElapsed} hours ago | {props.quake.properties.mag} Magnitude</div>
      <div>{props.quake.properties.place}</div>
      <hr/>
    </div>
  );

};

export default QuakeCard;
