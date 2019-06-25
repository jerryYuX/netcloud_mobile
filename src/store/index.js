import { createStore, combineReducers } from 'redux'
import {loginAction,saveLoginInfoAction} from './action.js'

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
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let reducer=combineReducers({login})
let store = createStore(reducer)

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => console.log(store.getState()))


export default store
