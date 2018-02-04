import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RecentStocks = ({fetchStocks, recentSymbol:{recents, dataKey}})=>{

  const renderRecents = ({name, data}) => {

      return (
        <div key = {name} className="recent_item_wrapper" onClick = {()=>fetchStocks(name)}>
          <div className="recent_item">
            <div className="symbol_label">
              {name}
            </div>
            <div className="diff_section">
              {/* {data>0 ? <i className="small arrow up icon" style={{'color': '#77e8a4'}}></i> : <i className="small arrow up icon" style={{'color': '#e87777'}}></i> }
              <div>{diff}</div> */}
              {data[0][dataKey]}
            </div>
          </div>
        </div>
      )

  }
  return (
    <div className= "recent_stock_wrapper">
      {recents.map(renderRecents)}
    </div>
  );
}

const mapStateToProps = ({ fetchSymbol }) =>{
  return { recentSymbol:fetchSymbol }
}

export default connect(mapStateToProps, actions)(RecentStocks);
