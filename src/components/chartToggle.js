import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const ChartToggle = (props)=>{
  return (
    <div className="toggle_button_wrapper">
      <div>
        <button className="ui button">DAY</button>
        <button className="ui button">MONTH</button>
        <button className="ui button">YEAR</button>
      </div>
      <div>
        {/* <select name="time Range" id="timeRangeToggle">
          <option value="1day">1day</option>
          <option value="5days">5days</option>
          <option value="1month">1month</option>
        </select> */}
        <button className="ui button" onClick={()=>props.handleClick('low')}>Low Price</button>
        <button className="ui button" onClick={()=>props.handleClick('high')}>High Price</button>
        <button className="ui button" onClick={()=>props.handleClick('volume')}>Volume</button>
      </div>
    </div>
  );
}


export default connect(null, actions)(ChartToggle);
