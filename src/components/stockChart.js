import React, { Component } from 'react';

import ChartToggles from './chartToggle';
import Chart from './chart';

export default class StockChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      dataKey: 'high'
    }
  }
  dataResort = (data) =>{
    this.setState({
      dataKey: data
    });
    console.log("data, this.state.dataKey", data, this.state.dataKey)
  }
  render(){
    console.log("cgartdata", this.props.fetchStocks);
    console.log('datakey', this.state.dataKey);
    return (
      <div>        
        <div>
          <ChartToggles handleClick = {this.dataResort}/>
        </div>
        <div id="chart">
          <Chart dataKey={this.state.dataKey}/>
        </div>
      </div>
    );
  }
}





// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
//
// class Chart extends Component{
//   constructor(props){
//     super(props);
//     this.state = { data : null }
//   }
//
//   componentDidMount(){
//     const newStateData = [];
//     for (var i in this.props.fetchStocks){
//       let value = { name: i, value: Number(this.props.fetchStocks[i]["2. high"])};
//       newStateData.push(value);
//       console.log(value);
//     }
//     this.setState({ data: newStateData });
//     console.log("this.state componentDidMount", this.state.data)
//   }
//   render(){
//     console.log("this.state", this.state.data)
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart data={this.state.data}
//           margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
//           <CartesianGrid strokeDasharray="0" stroke="#7f7f7f" vertical ={false}/>
//           <XAxis tickMargin={20} dataKey="name" interval="preserveEnd" tick={false} reversed />
//           <YAxis />
//           <Tooltip labelStyle={{color: "#4f4f4f"}} itemStyle={{color: "#4f4f4f"}}/>
//           <Legend iconSize={20}/>
//           <Line type="natural" dataKey="value" strokeWidth={2} stroke="#d0d0d0" dot={false} />
//         </LineChart>
//       </ResponsiveContainer>
//     );
//   }
// }
//
// const mapStateToProps = ({ fetchStocks }) =>{
//   return { fetchStocks }
// }
//
// export default connect(mapStateToProps)(Chart);
