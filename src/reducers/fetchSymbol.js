const initialState = {
  recents:[],
  error: false
}
export default (state = initialState, action) => {
  switch(action.type){
    case 'STORE_SYMBOL':
      return {
        recents: [action.payload, ...state.recents.filter( val =>{
          if( val.symbol !== action.payload.symbol )
            return {symbol:val, diff: action.payload.diff};
          return null
          })
        ],
        error: false
      };

    case 'FETCHING_ERROR':
      return {...state, error: true};

    default:
      return state;
  }
}
