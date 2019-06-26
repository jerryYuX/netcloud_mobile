import axios from 'axios'
import {baseUrl} from "./base";
export const getHotSearch = (num) => {
    return axios.get(`${baseUrl()}/search/hot`).then(res => res.data);
};
export const search =(query)=>{
    return axios.get(`${baseUrl()}/search?keywords=${query}`).then(res => res.data);
}