import {api} from '../api/api';
// nombre, tipo, age, gender, habilidad, img
// bring me the horizon
const URL_HEROES = '/heroe';

export const addUser = async (heroe) => {
    const res = await api.post(`${URL_HEROES}`,heroe);
    if(res.error){
        throw new Error('No se ha podido crear al usuario');
    }
    return res;
};