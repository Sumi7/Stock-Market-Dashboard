import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';
import SideBar from './sideBar';
import StockChart from './stockChart';
import 'semantic-ui-css/semantic.min.css';


class App extends Component {
  componentDidMount(){
    this.props.fetchStocks();
  }
  render(){
    console.log(this.props)
    return (
      <div className = "main_container">
        <SideBar />
        <div className="main_area_wrapper">
          <div className="dashboardHeader">
            Dashboard
          </div>
          <div id="chart">
            <StockChart />
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(App);
