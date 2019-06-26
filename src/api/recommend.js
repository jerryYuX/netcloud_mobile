import axios from 'axios'
import {baseUrl} from "./base";

export const getNewSong = () => {
    return axios.get(`${baseUrl()}/personalized/newsong`).then(res => res.data);
};

export const getRemd =() => {
  return axios.get(`${baseUrl()}/personalized/newsong`).then(res => res.data);
}