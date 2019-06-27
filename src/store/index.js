import { createStore, combineReducers ,applyMiddleware} from 'redux'
import {loginAction,saveLoginInfoAction} from './action.js'
import * as actions from './action'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
const middleware = [ thunk ];
// function visibilityFilter(state = 'SHOW_ALL', action) {
//     if (action.type === SET_VISIBILITY_FILTER) {
//       return action.filter
//     } else {
//       return state
//     }
//   }
function login(state = {}, action) {
    switch (action.type) {
      case loginAction:
        return Object.assign({},state,action.user)
      case saveLoginInfoAction:
        return Object.assign({},state,action.info)
      default:
        return state
    }
  }
let initSearchState={
  query:'',
  loading:false,
  result:[],
  limit:10,
  offset:0,
  searchFin:false,
  noresult:false
}
let initListState={
  list:[
    {
      name: 'name1',
      artist: 'artist1',
      url: '',
      cover: '',
      lrc: '',
      theme: '#ebd0c2'
    },

  ]
};
  function search(state=initSearchState,action){
    switch(action.type){
      case actions.SEARCH_QUERY:
        if(action.query){
          return Object.assign({},state,{
            query:action.query,
            loading:true,
            searchFin:false
          })
        }else{
          return Object.assign({},state,{
            query:action.query,
            loading:false,
            searchFin:false
          })
        }

      case actions.CLEAR_SEARCH_ACTION:
          return Object.assign({},state,{
            query:"",
            loading:false,
            searchFin:false,
            offset:0,
            noresult:false
          })
      case actions.INCREASE_UPDATE_SEARCH:
        console.log(state,action)
        return Object.assign({},state,{
          loading:false,
          result:state.result.concat(action.result),
          limit:action.limit,
          offset:action.offset,
          searchFin:true,
          noresult:false
        })
      case actions.SEARCH_QUERY_FIN:
        return Object.assign({},state,{
          loading:false,
          result:action.result,
          limit:action.limit,
          offset:action.offset,
          searchFin:true,
          noresult:false
        })
      case actions.NO_RESULT:
        return Object.assign({},state,{
          loading:false,
          noresult:true
        })
      default:
      return state
    }
  }
  function list(state=initListState,action){
    switch (action.type) {
      case actions.ADD_LIST:
        return Object.assign({},state,{
          list:action.list
        })
      default:
        return state;
    }

  }
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let reducer=combineReducers({login,search,list})
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
// let store = createStore(reducer)

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log(store.getState()))


export default store
