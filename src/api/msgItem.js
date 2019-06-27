import axios from 'axios'
import {baseUrl} from "./base";

export const getMusicUrl = (id) => {
  return axios.get(`${baseUrl()}/song/url?id=${id}`).then(res => res.data);
}
export const getMusicLrc = (id) => {
  return axios.get(`${baseUrl()}/lyric?id=${id}`).then(res => res.data);
}

export const getMusicPic = (id) => {
  return axios.get(`${baseUrl()}/song/detail?ids=${id}`).then(res => res.data);
}
