import { FETCH_SYMBOL, FETCHING_ERROR, FETCH_INTERVAL, FETCH_KEY} from '../actions/action_util'

const initialState = {
  recents:[{
    name: null,
    data:[{
      high: null,
      low: null,
      volume: null,
    }]
  }],
  dataKey:'high',
  error: false
}
export default (state = initialState, action) => {
  switch(action.type){
    case FETCH_SYMBOL:
      return {
        recents: [action.payload.symbol, ...state.recents.filter( val =>{
          if( val.name !== action.payload.symbol.name && val.name !== null)
            return val;
          return null
          })
        ],
        dataKey: action.payload.dataKey,
        error: false
      };

    case FETCHING_ERROR:
      return {...state, error: true};

    case FETCH_INTERVAL:
      return { ...state, recents: state.recents.map((data, i) => {
          return i === 0 ? {...data, ...action.payload} : {...data}
        })
      }
    case FETCH_KEY:
      return {...state, ...action.payload}

    default:
      return state;
  }
}
