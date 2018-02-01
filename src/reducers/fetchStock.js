export default (state = [], action) => {
  switch(action.type){
    case 'FETCH_STOCKS':
      console.log("fetchStocks reducer", action.payload);
      // const data = Object.values(action.payload["Time Series (Daily)"]);
      return action.payload;
    default:
      return state;
  }
}
