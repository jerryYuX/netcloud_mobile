import {search} from '../api/hotSeatch'
export const LOGIN_ACTION="LOGIN";
export const SAVE_INFO_ACTION="SAVE_INFO";
export const SEARCH_QUERY="SEARCH_QUERY"
export const CLEAR_SEARCH_ACTION="CLEAR_SEARCH_ACTION"
let loginAction=user=>{
    return { type: LOGIN_ACTION ,user:user}
}
let saveLoginInfoAction=info=>{
    return { type: SAVE_INFO_ACTION ,info:info}
}

let queryAction=query=>(dispatch)=>{
    // search(query).then(res=>{
    //     console.log(res)
    //     // return res
    // })
    return {type:SEARCH_QUERY,query:query}
}

let searchAction=query=>{
    return search(query).then(res=>{
        console.log(res)
        return res
    })
}

let clearSearchAction=()=>{
    return {type:CLEAR_SEARCH_ACTION}
}

export {
    loginAction,
    saveLoginInfoAction,
    queryAction,
    clearSearchAction
}