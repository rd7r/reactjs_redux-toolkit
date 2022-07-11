import axios from 'axios';
import {URL} from '../shared/utils/constants';

const api = axios.create({
    baseURL: `${URL}`,
    withCredentials: false,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json",
    }
})

export {api};