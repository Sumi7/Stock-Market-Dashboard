import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import RecentStocks from './recentStocks';

const SearchBar = ({ fetchSymbol, fetchStocks }) => {
  const onSearchHandler = (e) =>{
    if(e.target.value && e.key === 'Enter'){
      console.log("event", e.target.value);
      const searchValue = (e.target.value).toUpperCase();
      fetchStocks(searchValue);
      e.target.value = "";
    }
  }
  const errorRender = () =>{
    return (fetchSymbol.error ? <div className="error">Sorry No result found</div> : null);
  }


  return (
    <div className = 'sideBarContainer mb_sideBarContainer'>
      <div className="SearchBar_wrapper">
        <div className="ui fluid category search">
          <div className="ui fluid icon input">
            <input className="prompt" type="text" placeholder="Search stocks..." onKeyPress= {onSearchHandler} />
            <i className="search icon"></i>
          </div>
        </div>
      </div>
      {errorRender()}
      <div>
        <RecentStocks />
      </div>
    </div>
  )
}

const mapStateToProps = ({fetchSymbol}) =>{
  console.log("sideBAr", fetchSymbol)
  return { fetchSymbol }
}

export default connect(mapStateToProps, actions)(SearchBar);
