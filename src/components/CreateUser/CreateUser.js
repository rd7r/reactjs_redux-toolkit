import { useState } from 'react';
import {addUser} from '../../services/UserSercice';
const data = {
        nombre: '',
        tipo: '',
        age: '',
        gender: '',
        habilidad: [],
        img: '',
    }
const CreateUser = () => {
    const [dato, setDatos] = useState(data);
    const [imagen, setImagen] = useState({img:null, viewimg:''});
    const [skills, setSkills] = useState([]);
    const hadleOnChange = (e) => {
        setDatos({
            ...dato,
            [e.target.name]: e.target.value
        })       
    }

    const hadleOnSubmit = async(e) => {
        e.preventDefault();
        setDatos({
            ...dato,
            img: imagen.img.name,
            habilidad: [...skills]
        });
        const res = await addUser(dato,imagen.img);
        console.log(res);
    }

    const hadleshkills = (e) => {
        setSkills([
            ...skills,
            e.target.value
        ]);
    }

    const hadlefileimg = (e) => {
        setImagen({
            ...imagen,
            img: e.target.files[0],
            viewimg: URL.createObjectURL(e.target.files[0])
        });
    }
    // console.log(dato);
    return (
        <>
            <form className="shadow-lg p-3 mb-5 bg-body rounded mt-5 p-2" onSubmit={hadleOnSubmit}>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="h2 pb-2 mb-4 text-primary border-bottom border-primary">
                            Create Usuario
                        </div>
                        <div className="row my-2">
                            <div className='col-lg-2'>
                                <label htmlFor="exampleInputNombre" className="form-label">Nombre</label>
                            </div>
                            <div className='col-lg-8'>
                                <input type="text" onChange={hadleOnChange} className="form-control" name='nombre' id='nombre' placeholder='Nombre' required/>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-lg-2'>
                                <label htmlFor="exampleInputTipo" className="form-label">Tipo</label>
                            </div>
                            <div className='col-lg-8'>
                                <select onChange={hadleOnChange} className="form-select" name='tipo' id='tipo' aria-label="Default select example" required>
                                    <option value='false'>--------------</option>
                                    <option value='Tank'>Tank</option>
                                    <option value='Magico'>Magico</option>
                                    <option value='Asesino'>Asesino</option>
                                    <option value='Jungla'>Jungla</option>
                                </select>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className='col-lg-2'>
                                <label htmlFor="exampleInputEdad" className="form-label">Edad</label>
                            </div>
                            <div className='col-lg-8'>
                                <input type="Text" onChange={hadleOnChange} className="form-control" name='age' id="age" placeholder='Edad' required/>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" onChange={hadleOnChange} type="radio" id='gender' name="gender" value="Masculino"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Masculino</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" onChange={hadleOnChange} type="radio" id='gender' name="gender" value="Femenino"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">Femenino</label>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className='col-lg-2'>
                                <label htmlFor="exampleInputHabilidad" className="form-label">Habilidades</label>
                            </div>
                            <div className='d-flex col-lg-8'>
                                <input type="Text" className="form-control" onChange={hadleshkills} id="habilidad1" name='habilidad1' placeholder='Habilidad 1'/>
                                <input type="Text" className="form-control" onChange={hadleshkills} id="habilidad2" name='habilidad2' placeholder='Habilidad 2'/>
                                <input type="Text" className="form-control" onChange={hadleshkills} id="habilidad3" name='habilidad3' placeholder='Habilidad 3'/>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary col-lg-12">Registrar</button>
                    </div>
                    <div className="col-lg-3">
                        <img src={imagen.viewimg} className='col-lg-12 img-fluid mb-3' name='img' id='img' alt='imagen'/>
                        <input type='file' id='fileimg' onChange={hadlefileimg} multiple/>
                    </div>
                </div>
            </form>
        </>
    );
};

export { CreateUser };