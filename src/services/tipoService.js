import { axiosInstance } from '../helper/axios-config';

const obtenerTipo = () => {
    return axiosInstance.get('tipo', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

//metodo para crear 
const crearTipo = (data) => {
return axiosInstance.post('tipo', data, {
    headers: {
           'Content-Type' : 'application/json'
    }
});

}

//metodo para Editar 
const editarTipo = (tipoId, data) => {
    return axiosInstance.put(`tipoId/${tipoId}`, data, {
        headers: {
               'Content-Type' : 'application/json'
        }
    });
    
    }

    export {
        obtenerTipo, crearTipo, editarTipo
    }