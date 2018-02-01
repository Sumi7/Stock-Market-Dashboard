import axios from 'axios';

const key = 'TCTXFPH56E4L8YT9'

export const fetchStocks = ( SYMBOL='MSFT', FUNCTION='TIME_SERIES_DAILY' ) => dispatch => {
  const url = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${key}`;
  console.log("url",url)
  axios.get(url).then(
    (res) => {
      console.log("in res", res);
      const symbol = res.data["Meta Data"]["2. Symbol"];
      const resData = res.data[Object.keys(res.data)[1]];
      console.log(resData);
      console.log("sym", symbol);
      let data = [];
      for (var i in resData){
        const value = {
          name: i,
          high: Number(resData[i]["2. high"]),
          low: Number(resData[i]["3. low"]),
          volume: Number(resData[i]["5. volume"])
        };
        data.push(value);
      };
      const open = resData[Object.keys(resData)[0]]['1. open'];
      const close = resData[Object.keys(resData)[1]]['1. open'];
      const diff = (open-close).toFixed(3);
      console.log("data from fetchStocks", data, close, diff);
      dispatch({
        type: 'FETCH_STOCKS',
        payload: data
      });
      dispatch({
        type: 'STORE_SYMBOL',
        payload: { symbol, diff }
      });
    }
  ).catch(err =>{
    dispatch({
      type: 'FETCHING_ERROR',
      err: err
    });
  });
}

// export const switchData = ( data ) => dispatch => {
//   dispatch({
//     type: 'FETCH_STOCKS',
//     payload: data
//   });
// }
