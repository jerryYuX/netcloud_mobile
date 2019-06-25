export const LOGIN_ACTION="LOGIN";
export const SAVE_INFO_ACTION="SAVE_INFO";
let loginAction=user=>{
    return { type: LOGIN_ACTION ,user:user}
}
let saveLoginInfoAction=info=>{
    return { type: SAVE_INFO_ACTION ,info:info}
}

export {loginAction,saveLoginInfoAction}