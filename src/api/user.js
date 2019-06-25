import axios from 'axios'
import {baseUrl} from "./base";

export const get_user_info = () => {
    return axios.get(`${baseUrl()}/user/subcount`).then(res => res.data);

};
export const get_user_songlist = (user_id) => {
    return axios.get(`${baseUrl()}/user/playlist?uid=${user_id}`).then(res => res.data);

};
