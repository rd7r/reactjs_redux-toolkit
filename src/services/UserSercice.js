import { api } from '../api/api';
import {app} from './firebase';
import {getStorage, ref, uploadBytes} from 'firebase/storage';
import 'firebase/storage';
// nombre, tipo, age, gender, habilidad, img
const URL_HEROES = '/heroe';

const storage = getStorage(app);

const uploadImage = async (imagen) => {
    const storageRef = ref(storage,`${imagen.name}`);
    uploadBytes(storageRef, imagen).then((snapshot) => {
        console.log('Uploaded a blob or file!');
      });
};

export const addUser = async (heroe,img) => {
    uploadImage(img);
    const res = await api.post(`${URL_HEROES}`,heroe);
    if(res.error){
        throw new Error('No se ha podido crear al usuario');
    }
    return res;
};
