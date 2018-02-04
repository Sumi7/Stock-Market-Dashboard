import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const ChartToggle = (props)=>{
  return (
    <div className="toggle_button_wrapper">
      <div>
        <button className="ui button" onClick={()=>props.switchData(1)}>1 day</button>
        <button className="ui button" onClick={()=>props.switchData(5)}>5 day</button>
        <button className="ui button" onClick={()=>props.switchData(30)}>month</button>
      </div>
      <div>
        {/* <select name="time Range" id="timeRangeToggle">
          <option value="1day">1day</option>
          <option value="5days">5days</option>
          <option value="1month">1month</option>
        </select> */}
        <button className="ui button" onClick={()=>props.switchKey('high')}>High Price</button>
        <button className="ui button" onClick={()=>props.switchKey('low')}>Low Price</button>
        <button className="ui button" onClick={()=>props.switchKey('volume')}>Volume</button>
      </div>
    </div>
  );
}


export default connect(null, actions)(ChartToggle);
