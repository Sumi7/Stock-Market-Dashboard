import React from 'react';
import { connect } from 'react-redux';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Chart = ({data, dataKey}) => {
  console.log("fetchStocks, dataKey CHART", data, dataKey);
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}
        margin={{ top: 5, right: 20, left: -20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="0" stroke="#7f7f7f" vertical ={false}/>
        <XAxis tickMargin={20} dataKey="name"  domain={[0, 'dataMax']} tick={false} reversed />
        <YAxis />
        <Tooltip labelStyle={{color: "#4f4f4f"}} itemStyle={{color: "#4f4f4f"}}/>
        <Legend iconSize={20}/>
        <Line type="natural" dataKey={dataKey} strokeWidth={2} stroke="#d0d0d0" dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
}

const mapStateToProps = ({ fetchStocks }) =>{
  return { data: fetchStocks }
}

export default connect(mapStateToProps)(Chart);
