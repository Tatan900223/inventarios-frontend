import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getMediaId, editarMedia } from '../../services/mediaService'
import { obtenerDirector } from '../../services/directorService';
import { obtenerGenero } from '../../services/generoService';
import { obtenerProductora } from '../../services/productoraService';
import { obtenerTipo } from '../../services/tipoService';
import Swal from 'sweetalert2';


export const MediaUpdate = () => {

    const { mediaId = '' } = useParams();
    const [media, setMedia] = useState();
    const [directores, setDirectores] = useState([]);
    const [generos, setGeneros] = useState([]);
    const [productoras, setProductoras] = useState([]);
    const [tipos, setTipos] = useState([]);
    const [valoresForm, setValoresForm] = useState([]);
    const { serial = '', titulo = '', sinopsis = '', anoEstreno = '',
        imagen = '', url = '', director, genero, productora, tipo } = valoresForm;

    const listarDirectores = async () => {
        try {
            const { data } = await obtenerDirector();
            setDirectores(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarDirectores();
    }, []);


    const listarGeneros = async () => {
        try {
            const { data } = await obtenerGenero();
            setGeneros(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarGeneros();
    }, []);


    const listarProductoras = async () => {
        try {
            const { data } = await obtenerProductora();
            setProductoras(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarProductoras();
    }, []);

    const listarTipos = async () => {
        try {
            const { data } = await obtenerTipo();
            setTipos(data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);


    const getMedia = async () => {
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando..'
            });
            Swal.showLoading();
            const { data } = await getMediaId(mediaId);
            setMedia(data);
            Swal.close();
        } catch (error) {
            console.log(error);
            Swal.close();
        }
    }

    useEffect(() => {
        getMedia();
    }, [mediaId])

    useEffect(() => {
        if (media) {
            setValoresForm({
                serial: media.serial,
                titulo: media.titulo,
                sinopsis: media.sinopsis,
                anoEstreno: media.anoEstreno,
                imagen: media.imagen,
                url: media.url,
                director: media.directorPrincipal,
                genero: media.generoPrincipal,
                productora: media.productoraPrincipal,
                tipo: media.tipoPrincipal
            });
        }
    }, [media]);



    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }
    //Btn 
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
            const{data} = await editarMedia (media, mediaId)
            Swal.close();
        }catch (error) {
            console.log(error);
            console.log(error.response.data);
            Swal.close();
            let mensaje;
            if (error && error.response & error.response.data){
                mensaje = error.response.data;
            } else {
                mensaje = "Ocurrió un error, por favor intente de nuevo"
            }
            Swal.fire('Error','Ocurrió in error, por favor verifique los datos', 'error');
        }
    }


    return (

        <div className='container-fluid mt-3 mb-2'>
            <div className="card">
                <div className='card-header'>
                    <h5 className='card-tittle'>Detalle</h5>
                </div>

                <div className="card-body">
                    <div className='row'>
                        <div className='col-md-4'>
                            <img src={media?.imagen} />
                        </div>
                        <div className='col-md-8'>
                            <form onSubmit={(e) => handleOnSubmit(e)} >
                                <div className='row'>
                                    <div className='col'>
                                        <div className="mb-3">
                                            <label className="form-label">Serial</label>
                                            <input type="text" name='serial'
                                                value={serial}
                                                onChange={e => handleOnChange(e)}
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
                                                onChange={e => handleOnChange(e)}
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
                                                onChange={e => handleOnChange(e)}
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
                                                onChange={e => handleOnChange(e)}
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
                                                onChange={e => handleOnChange(e)}
                                                required
                                                className='form-control' />
                                        </div>
                                    </div>

                                    <div className='col'>
                                        <div className="mb-3">
                                            <label className="form-label">URL</label>
                                            <input type="text" name='url'
                                                value={url}
                                                onChange={e => handleOnChange(e)}
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
                                                onChange={e => handleOnChange(e)}>
                                                <option value="">--Seleccione--</option>
                                                {
                                                    directores.map(({ _id, nombre }) => {
                                                        return <option key={_id} value={_id}>{nombre}</option>
                                                    })
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
                                                onChange={e => handleOnChange(e)}>
                                                required
                                                <option value="">--Seleccione--</option>
                                                {
                                                    generos.map(({ _id, nombre }) => {
                                                        return <option key={_id} value={_id}>{nombre}</option>
                                                    })
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
                                                onChange={e => handleOnChange(e)}>
                                                required
                                                <option value="">--Seleccione--</option>
                                                {
                                                    productoras.map(({ _id, nombre }) => {
                                                        return <option key={_id} value={_id}>{nombre}</option>
                                                    })
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
                                                onChange={e => handleOnChange(e)}>
                                                required
                                                <option value="">--Seleccione--</option>
                                                {
                                                    tipos.map(({ _id, nombre }) => {
                                                        return <option key={_id} value={_id}>{nombre}</option>
                                                    })
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
            </div>
        </div>
    )
}


