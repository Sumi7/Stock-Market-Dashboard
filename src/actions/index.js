import axios from 'axios';

const key = 'TCTXFPH56E4L8YT9'

export const fetchStocks = ( SYMBOL='MSFT', FUNCTION='TIME_SERIES_DAILY' ) => dispatch => {
  const url = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${key}`;
  console.log(url)
  axios.get(url).then(
    res => {
      console.log(res)
      let data = res.data['Time Series (Daily)']
      console.log(data)
      dispatch({
        type: 'FETCH_STOCKS',
        payload: data
      });
    }
  )
}

export const fetchSearch = ( SYMBOL='MSFT', FUNCTION='TIME_SERIES_DAILY' ) => dispatch => {
  const url = `https://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${key}`;
  console.log(url)
  axios.get(url).then(
    res => {
      console.log(res)
      const symbol = res.data["Meta Data"]["2. Symbol"];
      let data = res.data['Time Series (Daily)'];
      console.log(data)
      console.log(symbol)
      dispatch({
        type: 'FETCH_STOCKS',
        payload: data
      });
      console.log('STORE_SYMBOL')
      dispatch({
        type: 'STORE_SYMBOL',
        payload: symbol
      });
    }
  ).catch(err =>{
    dispatch({
      type: 'FETCHING_ERROR',
      err: err
    });
  });
}
