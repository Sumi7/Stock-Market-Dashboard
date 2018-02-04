import axios from 'axios';

import { FETCH_SYMBOL, FETCHING_ERROR, FETCH_INTERVAL, FETCH_KEY, API_KEY } from './action_util'

let data = []

export const fetchStocks = ( SYMBOL='MSFT', FUNCTION='TIME_SERIES_DAILY') => dispatch => {
  const url = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${API_KEY}`;
  axios.get(url).then(
    (res) => {
      const refData = [];
      const symbol = res.data["Meta Data"]["2. Symbol"];
      const resData = res.data[Object.keys(res.data)[1]];
      for (var i in resData){
        const value = {
          name: i,
          high: Number(resData[i]["2. high"]),
          low: Number(resData[i]["3. low"]),
          volume: Number(resData[i]["5. volume"])
        };
        refData.push(value);
      };
      data = refData;

      dispatch({
        type: FETCH_SYMBOL,
        payload: {
          symbol:{
            name: symbol,
            data: data
          },
          dataKey: "high",
        }
      });
    }
  ).catch(err =>{
    dispatch({
      type: FETCHING_ERROR,
      err: err
    });
  });
}

export const switchData = ( interval) => dispatch => {
  const newData = data.slice(0, interval);

  dispatch({
    type: FETCH_INTERVAL,
    payload: {
      data: newData
    }
  });
}
export const switchKey = ( key ) => dispatch => {
  dispatch({
    type: FETCH_KEY,
    payload: {
      dataKey: key
    }
  });
}
