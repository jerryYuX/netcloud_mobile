import {search} from '../api/hotSeatch'
export const LOGIN_ACTION="LOGIN";
export const SAVE_INFO_ACTION="SAVE_INFO";
export const SEARCH_QUERY="SEARCH_QUERY"
export const SEARCH_QUERY_FIN="SEARCH_QUERY_FIN"
export const CLEAR_SEARCH_ACTION="CLEAR_SEARCH_ACTION"
let loginAction=user=>{
    return { type: LOGIN_ACTION ,user:user}
}
let saveLoginInfoAction=info=>{
    return { type: SAVE_INFO_ACTION ,info:info}
}

let queryAction=query=>{
    search(query).then(res=>{
        console.log(res)
    })
    return {type:SEARCH_QUERY,query:query,loading:true}
}

let searchAction=query=>{
    
}

let clearSearchAction=()=>{
    return {type:CLEAR_SEARCH_ACTION}
}
let finSearchAction=()=>{
    return {type:SEARCH_QUERY_FIN}
}
export {
    loginAction,
    saveLoginInfoAction,
    queryAction,
    clearSearchAction,
    finSearchAction
}