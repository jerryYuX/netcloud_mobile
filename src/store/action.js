export const LOGIN_ACTION="LOGIN";
export const SAVE_INFO_ACTION="SAVE_INFO";
export const SEARCH_QUERY="SEARCH_QUERY"
let loginAction=user=>{
    return { type: LOGIN_ACTION ,user:user}
}
let saveLoginInfoAction=info=>{
    return { type: SAVE_INFO_ACTION ,info:info}
}

let queryAction=query=>{
    return {type:SEARCH_QUERY,query:query}
}


export {
    loginAction,
    saveLoginInfoAction,
    queryAction}