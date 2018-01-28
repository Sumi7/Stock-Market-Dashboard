import axios from 'axios';

const key = 'TCTXFPH56E4L8YT9'

export const fetchStocks = ( SYMBOL='MSFT', FUNCTION='TIME_SERIES_DAILY' ) => dispatch => {
  const url = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${key}`;
  axios.get(url).then(
    res => {
      const symbol = res.data["Meta Data"]["2. Symbol"];
      const data = res.data['Time Series (Daily)'];
      const open = data[Object.keys(data)[0]]['1. open'];
      const close = data[Object.keys(data)[0]]['4. close'];
      const diff = (open-close).toFixed(3);
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
