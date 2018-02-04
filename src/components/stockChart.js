import React from 'react';

import ChartToggles from './chartToggle';
import StockDetails from './stockDetails';
import Chart from './chart';

export default () =>{
  return (
    <div id="#stockChart" >
      <div>
        <StockDetails />
      </div>
      <div>
        <ChartToggles/>
      </div>
      <div id="chart">
        <Chart/>
      </div>
    </div>
  );
}
