import { axiosInstance } from '../helper/axios-config';

const obtenerMedia = () => {
    return axiosInstance.get('media', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

//metodo para crear 
const crearMedia = (data) => {
return axiosInstance.post('media', data, {
    headers: {
           'Content-Type' : 'application/json'
    }
});

}

//metodo para Editar 
const editarMedia = (mediaId, data) => {
    return axiosInstance.put(`media/${mediaId}`, data, {
        headers: {
               'Content-Type' : 'application/json'
        }
    });
    
    }
//get inventario ID

    const getMediaId = (mediaId) => {
        return axiosInstance.get(`media/${mediaId}`, {
            headers: {
                'Content-Type' : 'application/json'
            }
        });
    }

    export {
        obtenerMedia, crearMedia, editarMedia, getMediaId
    }