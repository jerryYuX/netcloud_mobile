import axios from 'axios'
axios.defaults.withCredentials = true;
//login
const base = "http://120.79.46.144:3000"
export const baseUrl = () => {
    return base;
};
export const login = params => {
    return axios.post(`${base}/aies/user/permlogin`, params).then(res => res.data);

};
