import axios from 'axios'
import {baseUrl} from "./base";

export const login = (email,password) => {
    return axios.get(`${baseUrl()}/login?email=${email}&password=${password}`).then(res => res.data);

};
export const phone_login = (num,password) => {
    return axios.get(`${baseUrl()}/login/cellphone?phone=${num}&password=${password}`).then(res => res.data);

};
export const auth = (num) => {
    return axios.get(`${baseUrl()}/captch/verify?phone=${num}`).then(res => res.data);

};
export const send_auth = (num) => {
    return axios.get(`${baseUrl()}/captch/sent?phone=${num}`).then(res => res.data);

};
export const exit_login = () => {
    return axios.get(`${baseUrl()}/logout`).then(res => res.data);

};

