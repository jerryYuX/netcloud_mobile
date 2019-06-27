
export const LOGIN_ACTION="LOGIN";
export const SAVE_INFO_ACTION="SAVE_INFO";
export const SEARCH_QUERY="SEARCH_QUERY"
export const SEARCH_QUERY_FIN="SEARCH_QUERY_FIN"
export const CLEAR_SEARCH_ACTION="CLEAR_SEARCH_ACTION"
export const INCREASE_UPDATE_SEARCH="INCREASE_UPDATE_SEARCH"
export const NO_RESULT="NO_RESULT"
export const ADD_LIST="ADD_LIST"
export const STATE_TOGGLE = "STATE_TOGGLE"
let loginAction=user=>{
    return { type: LOGIN_ACTION ,user:user}
}
let saveLoginInfoAction=info=>{
    return { type: SAVE_INFO_ACTION ,info:info}
}

let queryAction=query=>{

    return {type:SEARCH_QUERY,query:query,loading:true}
}


let clearSearchAction=()=>{
    return {type:CLEAR_SEARCH_ACTION}
}
let finSearchAction=(result,limit,offset)=>{
    return {type:SEARCH_QUERY_FIN,result:result,limit:limit,offset:offset}
}
let noResultAction=()=>{
    return {type:NO_RESULT}
}
let increaseUpdateSearchAction=(result,limit,offset)=>{
    return {type:INCREASE_UPDATE_SEARCH,result:result,limit:limit,offset:offset}
}

let addListAction = (lists)=>{
    return {
      type:ADD_LIST,
      list:lists
    }
}

let toggleClickStateAction = (bool) => {
    return {
        type: STATE_TOGGLE,
        clickLoading: bool,
    }
}
export {
    loginAction,
    saveLoginInfoAction,
    queryAction,
    clearSearchAction,
    finSearchAction,
    increaseUpdateSearchAction,
    noResultAction,
    addListAction,
  toggleClickStateAction,
}
