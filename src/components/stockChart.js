import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({ fetchStocks }) => {
  let data = [];
  for (var i in fetchStocks){
    let value = { name: i, value: Number(fetchStocks[i]["2. high"])};
    data.push(value);
  }
  console.log("data", data);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="0" stroke="#7f7f7f" vertical ={false}/>
        <XAxis tickMargin={20} dataKey="name" interval="preserveEnd" tick={false} reversed />
        <YAxis />
        <Tooltip labelStyle={{color: "#4f4f4f"}} itemStyle={{color: "#4f4f4f"}}/>
        <Legend iconSize={20} />
        <Line type="natural" dataKey="value" strokeWidth={2} stroke="#d0d0d0" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

const mapStateToProps = ({ fetchStocks }) =>{
  return { fetchStocks }
}

export default connect(mapStateToProps)(Chart);
