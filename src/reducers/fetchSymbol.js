const initialState = {
  data:[],
  error: false
}
export default (state = initialState, action) => {
  switch(action.type){
    case 'STORE_SYMBOL':
      console.log("symbol", action.payload, state);
      return {...state, data: [...state.data, action.payload], error: false};
    case 'FETCHING_ERROR':
      console.log("symbol", action.payload, state);
      return {...state, error: true};
    default:
      return state;
  }
}
