import { axiosInstance } from '../helper/axios-config';

const obtenerProductora = () => {
    return axiosInstance.get('productora', {
        headers: {
            'Content-Type' : 'application/json'
        }
    });
}

//metodo para crear 
const crearProductora = (data) => {
return axiosInstance.post('productora', data, {
    headers: {
           'Content-Type' : 'application/json'
    }
});

}

//metodo para Editar 
const editarProductora = (productoraId, data) => {
    return axiosInstance.put(`productoraId/${productoraId}`, data, {
        headers: {
               'Content-Type' : 'application/json'
        }
    });
    
    }

    export {
        obtenerProductora, crearProductora, editarProductora
    }