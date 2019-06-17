import React from 'react';

const QuakeInfo = (props) => {

  if (props.currentQuake !== '') {

    let time = new Date(props.currentQuake.properties.time);
    time = time.toLocaleTimeString();

    const feltReports = props.currentQuake.properties.felt ?
      props.currentQuake.properties.felt : 0;

    return(
      <div className="row" style={{ 'margin-top': '20px' }}>
        <div className="col-sm-12" style={{ 'font-weight': 'bold' }}>
          {props.currentQuake.properties.title}
        </div>
        <div className="col-sm-3">
          Magnitude: {props.currentQuake.properties.mag}
        </div>
        <div className="col-sm-4">
          Time: {time}
        </div>
        <div className="col-sm-5">
          Number Felt reports: {feltReports}
        </div>
        <div className="col-sm-3">
          Depth: {props.currentQuake.geometry.coordinates[2]} km
        </div>
      </div>
    );
  }
  return null;
}

export default QuakeInfo;
