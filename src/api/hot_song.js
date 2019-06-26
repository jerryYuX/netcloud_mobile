import axios from 'axios'
import {baseUrl} from "./base";

export const get_hot_list = (idx) => {
    return axios.get(`${baseUrl()}/top/list?idx=${idx}`).then(res => res.data);

};
