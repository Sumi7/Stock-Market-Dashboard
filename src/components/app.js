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
    return (
      <div className="top">        
        <div className="dashboardHeader show_mobile">
          Dashboard
        </div>
        <div className = "main_container">
          <SideBar />
          <div className="main_area_wrapper">

            <div className="dashboardHeader hide_mobile">
              Dashboard
            </div>

            <StockChart />
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, actions)(App);
