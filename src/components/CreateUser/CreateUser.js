import { useState } from 'react';
// const imagen = require('./logo.jpg');
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
    const [imagen, setImagen] = useState({});
    console.log(dato);
    const hadleOnChange = (e) => {
        setDatos({
            ...dato,
            [e.target.name]: e.target.value
        })
        if (e.target.files.length) {
            setImagen({
                ...imagen,
                img: e.target.files[0].name
            }) 
        }
            setImagen(URL.createObjectURL(e.target.files[0]));
        }

    const hadleOnSubmit = async(e) => {
        e.preventDefault();
        // const res = await UserService.addUser(dato);
        // console.log(res);
    }

    // const hadlefileimg = (e) => {
    //     // console.log(e.target.files[0].name);
    //     setImagen(URL.createObjectURL(e.target.files[0]));
    // }

    return (
        <>
            <form className="shadow-lg p-3 mb-5 bg-body rounded mt-5 p-2" onSubmit={hadleOnSubmit}>
                <div className="row">
                    <div className="col-lg-9">
                        <div class="h2 pb-2 mb-4 text-primary border-bottom border-primary">
                            Create Usuario
                        </div>
                        <div class="row my-2">
                            <div className='col-lg-2'>
                                <label for="exampleInputNombre" class="form-label">Nombre</label>
                            </div>
                            <div className='col-lg-8'>
                                <input type="text" onChange={hadleOnChange} class="form-control" name='nombre' id='nombre' placeholder='Nombre' required/>
                            </div>
                        </div>
                        <div className='row my-2'>
                            <div className='col-lg-2'>
                                <label for="exampleInputTipo" class="form-label">Tipo</label>
                            </div>
                            <div className='col-lg-8'>
                                <select onChange={hadleOnChange} class="form-select" name='tipo' id='tipo' aria-label="Default select example" required>
                                    <option value='false'>--------------</option>
                                    <option value='Tank'>Tank</option>
                                    <option value='Magico'>Magico</option>
                                    <option value='Asesino'>Asesino</option>
                                    <option value='Jungla'>Jungla</option>
                                </select>
                            </div>
                        </div>
                        <div class="row my-2">
                            <div className='col-lg-2'>
                                <label for="exampleInputEdad" class="form-label">Edad</label>
                            </div>
                            <div className='col-lg-8'>
                                <input type="Text" onChange={hadleOnChange} class="form-control" name='age' id="age" placeholder='Edad' required/>
                            </div>
                        </div>
                        <div className='my-2'>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" onChange={hadleOnChange} type="radio" id='gender' name="gender" value="Masculino"/>
                                <label class="form-check-label" for="inlineRadio1">Masculino</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" onChange={hadleOnChange} type="radio" id='gender' name="gender" value="Femenino"/>
                                <label class="form-check-label" for="inlineRadio2">Femenino</label>
                            </div>
                        </div>
                        <div class="row my-2">
                            <div className='col-lg-2'>
                                <label for="exampleInputHabilidad" class="form-label">Habilidades</label>
                            </div>
                            <div className='d-flex col-lg-8'>
                                <input type="Text" class="form-control" onChange={hadleOnChange} id="habilidad" name='habilidad' placeholder='Habilidad 1'/>
                                <input type="Text" class="form-control" onChange={hadleOnChange} id="habilidad" name='habilidad' placeholder='Habilidad 2'/>
                                <input type="Text" class="form-control" onChange={hadleOnChange} id="habilidad" name='habilidad' placeholder='Habilidad 3'/>
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary col-lg-12">Registrar</button>
                    </div>
                    <div className="col-lg-3">
                        <img src={imagen} className='col-lg-12 img-fluid mb-3' name='img' id='img' alt='imagen'/>
                        <input type='file' id='fileimg' onChange={hadleOnChange} multiple/>
                    </div>
                </div>
            </form>
        </>
    );
};

export { CreateUser };