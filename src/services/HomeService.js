import { api } from '../api/api';

const URL_POSTS = "/heroe";

const getHome = async() => {
    const res = await api.get(`${URL_POSTS}`);
    if(res.error){
        throw new Error('Ha ocurrido un problema');
    }
    return res;
}

export default getHome;
