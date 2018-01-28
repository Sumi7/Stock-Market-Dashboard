import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

const RecentStocks = ({fetchStocks, symbol})=>{

  const renderRecents = (symbol) => <div key = {symbol} className="recent_item" onClick = {()=>fetchStocks(symbol)}>{symbol}</div>
  return (
    <div className= "recent_stock_wrapper">
      {symbol.recents.map(renderRecents)}
    </div>
  );
}

const mapStateToProps = ({ fetchSymbol }) =>{
  console.log("fetchSymbol", fetchSymbol)
  return { symbol:fetchSymbol }
}

export default connect(mapStateToProps, actions)(RecentStocks);
