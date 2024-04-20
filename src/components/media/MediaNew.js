import { useEffect, useState } from 'react'
import { obtenerDirector } from '../../services/directorService';
import { obtenerGenero } from '../../services/generoService';
import { obtenerProductora } from '../../services/productoraService';
import {obtenerTipo} from '../../services/tipoService';
import { crearMedia } from '../../services/mediaService'
import Swal from 'sweetalert2';

export const MediaNew = ({ handleOpenModal, listarMedias }) => {

    const [ directores, setDirectores ] = useState([]);
    const [ generos, setGeneros ] = useState([]);
    const [ productoras, setProductoras ] = useState([]);
    const [ tipos, setTipos] = useState([]);
    const [ valoresForm, setValoresForm ] = useState([]);
    const { serial ='', titulo ='', sinopsis ='', anoEstreno ='', 
    imagen ='', url ='', director , genero , productora , tipo } = valoresForm;

    const listarDirectores = async () => {
        try {
                const { data } = await obtenerDirector ();
                setDirectores (data);
                
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarDirectores();
    }, []);


    const listarGeneros = async () => {
        try {
                const { data } = await obtenerGenero ();
                setGeneros (data);
                
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarGeneros();
    }, []);


    const listarProductoras = async () => {
        try {
                const { data } = await obtenerProductora ();
                setProductoras (data);
                
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarProductoras();
    }, []);

    const listarTipos = async () => {
        try {
                const { data } = await obtenerTipo ();
                setTipos (data);
                
        }catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);


    const handleOnChange = ({ target }) => {
        const {name, value} = target;
        setValoresForm({ ...valoresForm, [name]: value});
    }

    //boton Guardar

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const media = {
            serial, titulo, sinopsis, anoEstreno, 
            imagen, url, 
            directorPrincipal: {
                _id: director
            } , 
            generoPrincipal: {
                _id: genero
            }, 
            productoraPrincipal: {
                _id : productora
            }, 
            
            tipoPrincipal: {
                _id: tipo
            }
        }
        console.log(media);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const{data} = await crearMedia (media)
            handleOpenModal();
            listarMedias();
            Swal.close();
        }catch (error) {
            console.log(error);
            Swal.close();
        }
    }

    return (
        <div className='sidebar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3>Nueva Media</h3>
                            <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <hr />
                        </div>
                    </div>
                    <form onSubmit={(e) => handleOnSubmit(e)} >
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Serial</label>
                                    <input type="text" name='serial' 
                                    value={serial}
                                    onChange={ e => handleOnChange(e)}
                                    required
                                    className='form-control'    
                                    />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Título</label>
                                    <input type="text" name='titulo' 
                                    value={titulo}
                                    onChange={ e => handleOnChange(e)}
                                    required
                                    className='form-control' 
                                    
                                    />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Sinopsis</label>
                                    <input type="text" name='sinopsis' 
                                    value={sinopsis}
                                    onChange={ e => handleOnChange(e)}
                                    required
                                    className='form-control' 
                                    
                                    />
                                </div>

                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Año de Estreno</label>
                                    <input type="date" name='anoEstreno' 
                                    value={anoEstreno}
                                        onChange={ e => handleOnChange(e)}
                                        required
                                        className='form-control'
                                    />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Imagen</label>
                                    <input type="url" name='imagen' 
                                    value={imagen}
                                    onChange={ e => handleOnChange(e)}
                                    required
                                    className='form-control' />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">URL</label>
                                    <input type="text" name='url' 
                                    value={url}
                                    onChange={ e => handleOnChange(e)}
                                    required
                                    className='form-control' />
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className="form-select"
                                        required
                                        name='director'
                                        value={director}
                                        onChange={ e => handleOnChange(e)}>
                                        <option value="">--Seleccione--</option>
                                        {
                                            directores.map(({ _id, nombre})  => {
                                                return <option key={_id} value={_id}>{nombre}</option>
                                            } )
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Genero Principal</label>
                                    <select className="form-select" 
                                        name='genero'
                                        value={genero}
                                        onChange={ e => handleOnChange(e)}>
                                        required
                                        <option value="">--Seleccione--</option>
                                        {
                                            generos.map(({ _id, nombre})  => {
                                                return <option key={_id} value={_id}>{nombre}</option>
                                            } )
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Productora Principal</label>
                                    <select className="form-select" 
                                        name='productora'
                                        value={productora}
                                        onChange={ e => handleOnChange(e)}>
                                        required
                                        <option value="">--Seleccione--</option>
                                        {
                                            productoras.map(({ _id, nombre})  => {
                                                return <option key={_id} value={_id}>{nombre}</option>
                                            } )
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div className="mb-3">
                                    <label className="form-label">Tipo Principal</label>
                                    <select className="form-select" 
                                        name='tipo'
                                        value={tipo}
                                        onChange={ e => handleOnChange(e)}>
                                        required
                                        <option value="">--Seleccione--</option>
                                        {
                                            tipos.map(({ _id, nombre})  => {
                                                return <option key={_id} value={_id}>{nombre}</option>
                                            } )
                                        }
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                            <button className="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

