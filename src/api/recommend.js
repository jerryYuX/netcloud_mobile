import axios from 'axios'
import {baseUrl} from "./base";

export const getNewSong = () => {
    return axios.get(`${baseUrl()}/personalized/newsong`).then(res => res.data);
};

export const getRemdListData =() => {
  return axios.get(`${baseUrl()}/personalized`).then(res => res.data);
}