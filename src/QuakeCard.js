import React from 'react';

const QuakeCard = (props) => {

  const currentTime = new Date().getTime();
  let timeElapsed = currentTime - props.quake.time;
  // Time elapsed in hours since quake
  timeElapsed = Math.round(10 * timeElapsed / 1000 / 60 / 60) / 10;

  return(
    <div>
      <div>{timeElapsed} hours ago | {props.quake.mag} Magnitude</div>
      <div>{props.quake.place}</div>
      <hr/>
    </div>
  );

};

export default QuakeCard;
