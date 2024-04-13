import { axiosInstance } from '../helper/axios-config';

const obtenerDirector = () => {
    return axiosInstance.get('director', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

//metodo para crear 
const crearDirector = (data) => {
return axiosInstance.post('director', data, {
    headers: {
           'Content-Type' : 'application/json'
    }
});

}

//metodo para Editar 
const editarDirector = (directorId, data) => {
    return axiosInstance.put(`directorId/${directorId}`, data, {
        headers: {
               'Content-Type' : 'application/json'
        }
    });
    
    }

    export {
        obtenerDirector, crearDirector, editarDirector
    }