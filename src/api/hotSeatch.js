import axios from 'axios'
import {baseUrl} from "./base";
export const getHotSearch = (num) => {
    return axios.get(`${baseUrl()}/search/hot`).then(res => res.data);
};
export const searchResult =(query="",limit=10,offset=0)=>{
    return axios.get(`${baseUrl()}/search?keywords=${query}&limit=${limit}&offset=${offset}`).then(res => res.data);
}