import { createStore, combineReducers ,applyMiddleware} from 'redux'
import {loginAction,saveLoginInfoAction} from './action.js'
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

  function search(state="",action){
    switch(action.type){
      case "SEARCH_QUERY":
      return Object.assign({},state,{
        query:action.query
      })
      default:
      return state
    }
  }
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let reducer=combineReducers({login,search})
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)
// let store = createStore(reducer)

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log(store.getState()))


export default store