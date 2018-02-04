import React from 'react';
import {connect} from 'react-redux';

const stockDetails = ({fetchSymbol:{recents}})=>{
    return (
      <div className="stock_details_wrapper">
        <div className="stock_Symbol">
          <div>{recents[0].name}</div>
        </div>
        <div className="stock_High details">
          <div>{recents[0].data[0].high}</div>
          <div className="green">high</div>
        </div>
        <div className="stock_Low details">
          <div>{recents[0].data[0].low}</div>
          <div className="red">low</div>
        </div>
        <div className="stock_Voulme details">
          <div>{recents[0].data[0].volume}</div>
          <div className="blue">volume</div>
        </div>
      </div>
    );

}

const mapStateToProps = ({ fetchSymbol }) =>{
  return { fetchSymbol }
}

export default connect(mapStateToProps)(stockDetails);
