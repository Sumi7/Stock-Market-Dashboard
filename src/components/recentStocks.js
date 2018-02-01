import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RecentStocks = ({fetchStocks, recentSymbol})=>{

  const renderRecents = ({symbol, diff}) => {
    return (
      <div key = {symbol} className="recent_item" onClick = {()=>fetchStocks(symbol)}>
      <div className="symbol_label">{symbol}</div>
      <div className="diff_section">
        {diff>0 ? <i className="small arrow up icon" style={{'color': '#77e8a4'}}></i> : <i className="small arrow up icon" style={{'color': '#e87777'}}></i> }
        <div>{diff}</div>
      </div>
      </div>
    )
  }
  return (
    <div className= "recent_stock_wrapper">
      {recentSymbol.recents.map(renderRecents)}
    </div>
  );
}

const mapStateToProps = ({ fetchSymbol }) =>{
  console.log("fetchSymbol", fetchSymbol)
  return { recentSymbol:fetchSymbol }
}

export default connect(mapStateToProps, actions)(RecentStocks);
