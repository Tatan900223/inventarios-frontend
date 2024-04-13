import { axiosInstance } from '../helper/axios-config';

const obtenerGenero = () => {
    return axiosInstance.get('genero', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

//metodo para crear 
const crearGenero = (data) => {
return axiosInstance.post('genero', data, {
    headers: {
           'Content-Type' : 'application/json'
    }
});

}

//metodo para Editar 
const editarGenero = (generoId, data) => {
    return axiosInstance.put(`generoId/${generoId}`, data, {
        headers: {
               'Content-Type' : 'application/json'
        }
    });
    
    }

    export {
        obtenerGenero, crearGenero, editarGenero
    }