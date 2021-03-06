import { createStore, combineReducers ,applyMiddleware} from 'redux'
import {loginAction,saveLoginInfoAction,ADD_LIST,addListAction} from './action.js'
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
      name: '出山',
      artist: '花粥',
      url: 'http://m10.music.126.net/20190627093629/eb053ab00b5aef75ac87f793d3e3282f/ymusic/59c5/8f95/298d/11d842f39fb503bb9b29c37ad4080a14.mp3',
      cover: 'http://p1.music.126.net/xUAfdMHdXhu3BmO4g8nOYA==/109951163573311341.jpg',
      lrc: '[by:GoodTM]↵[00:00.000] 作曲 : 花粥↵[00:01.000] 作词 : 花粥↵[00:10.43]↵[00:11.12]在夜半三更过天桥从来不敢回头看↵[00:15.86]白日里是车水马龙此时脚下是忘川↵[00:21.30]我独自走过半山腰山间野狗来作伴↵[00:25.19]层林尽染百舸流秋风吹过鬼门关↵[00:29.81]一瞬三年五载 品粗茶 食淡饭↵[00:34.49]六界八荒四海 无人与我来叫板↵[00:39.19]人间荒唐古怪 竹林外 有书斋↵[00:43.78]匿于此地畅快 偏来者不善善者不来↵[00:50.85]是我装模作样在瞎掰↵[00:55.18]还是他们本就心怀鬼胎↵[00:57.82]有人不知悔改 迷雾中混淆黑白↵[01:02.46]在情怀里市侩 旁人不敢来拆穿↵[01:07.17]看似时来运转 实则在顶风作案↵[01:11.73]待曲终又人散 这一出还有谁在围观↵[01:16.79]在凡尘修炼二十载听闻水能滴石穿↵[01:21.07]帝王豪杰风云变幻敌不过桑田沧海↵[01:25.85]我不关心谁的江山只眷恋两小无猜↵[01:30.36]兴风作浪不稀罕只身固守峨眉山↵[01:35.14]一瞬三年五载 品粗茶 食淡饭↵[01:39.73]六界八荒四海 无人与我来叫板↵[01:44.33]人间荒唐古怪 竹林外 有书斋↵[01:49.11]匿于此地畅快 偏来者不善善者不来↵[01:56.00]是我装模作样在瞎猜↵[02:00.39]还是他们本就心怀鬼胎↵[02:03.15]有人不知悔改 迷雾中混淆黑白↵[02:07.73]在情怀里市侩 旁人不敢来拆穿↵[02:12.39]看似时来运转 实则在顶风作案↵[02:17.06]待曲终又人散 这一出还有谁在围观↵[02:21.82]静悄悄配唠唠叨叨↵[02:24.00]随便瞧瞧我凑凑热闹↵[02:26.34]客串也别太潦草↵[02:28.70]吃的生蚝要蘸个酱料↵[02:31.00]悄悄你唠唠叨叨↵[02:33.30]随便瞧瞧你凑的热闹↵[02:35.68]听到你做个记号↵[02:37.84]请装进书包别四处招摇↵[02:40.29]有人迷途知返↵[02:45.08]便是苦尽甘来↵[02:50.00]一瞬三年五载↵[02:54.15]这曲终又人散↵[03:33.63]↵[03:33.95]合作音乐人：王胜男↵[03:34.13]音乐制作：BachBeats↵[03:34.31]录音师：种旭↵[03:34.48]混音／母带处理：钻石狗音乐工作室（北京）↵[03:34.82]专辑封面设计：姜小海↵[03:35.25]',
      theme: '#ebd0c2'
    },

  ]
};
let initMsgitemState = {
  clickLoading: false,
}
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
  function msgitem (state=initMsgitemState, action) {
    switch (action.type) {
      case actions.STATE_TOGGLE:
        return {
          clickLoading: action.clickLoading
        }
      default:
        return state;
    }
  }
// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let reducer=combineReducers({login,search,list, msgitem})
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
