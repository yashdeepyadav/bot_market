import { createStore } from 'redux'


const bots = [
  {
    "id": 1,
    "bot": "Hot Bot",
    "description": "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 289.34,
    "cagr": 34
  },
  {
    "id": 2,
    "bot": "Cool Bot",
    "description": "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 439.34,
    "cagr": 28
  },
  {
    "id": 3,
    "bot": "Options Bot",
    "description": "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
    "index": 139.34,
    "cagr": 42
  }
]

const botlistreducer = (state = {list:bots,count:0}, action) => {


  if(action.type==='buy'){
    return {...state,count:state.count+1};
  }
  return (state);
}


const store = createStore(botlistreducer);

export default store;