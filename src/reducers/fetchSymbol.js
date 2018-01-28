const initialState = {
  recents:[],
  diff:null,
  error: false
}
export default (state = initialState, action) => {
  switch(action.type){
    case 'STORE_SYMBOL':
      return {
        recents: [action.payload.symbol, ...state.recents.filter( val =>{
          if( val!==action.payload.symbol )
            return val;
          return null
          })
        ],
        diff: action.payload.diff,
        error: false
      };

    case 'FETCHING_ERROR':
      return {...state, error: true};

    default:
      return state;
  }
}
