import React, { useState, useEffect } from 'react'
import { obtenerProductora, crearProductora } from '../../services/productoraService'
import Swal from 'sweetalert2';
import moment from 'moment'; 

export const ProductoraView = () => {
  const [valoresForm, setValoresForm] = useState([]);
  const [productoras, setProductoras] = useState([]);
  const { nombre = '', estado = '' } = valoresForm;

  const listarProductoras = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });

      const resp = await obtenerProductora();
      setProductoras(resp.data);
      Swal.close();

    } catch (error) {
      console.log(error);
      Swal.close();
    }
  }

  useEffect(() => {
    listarProductoras();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value })
  }

  const handleCrearProductora = async (e) => {
    e.preventDefault();
    console.log(valoresForm);
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });

    Swal.showLoading();
    const resp = await crearProductora(valoresForm);
    Swal.close();
    }catch (error) {
    console.log(error);
    Swal.close();
    }
  }

  return (
    <div className='container-fluid'>
      <form onSubmit={(e) => handleCrearProductora(e)}>
        <div className='row'>
          <div className='col-lg-4'>

          </div>

        </div>

        <div className='col-lg-4'>

          <div className="mb-3">
            <label className="form-label" style={{ color: 'white' }}>Nombre</label>
            <input required name='nombre' value={nombre} type="text" className="form-control"
              onChange={(e) => handleOnChange(e)}  />
          </div>

          <div className='col-lg-4'>
            <div className="mb-3">
              <label className="form-label" style={{ color: 'white' }}>Estado</label>
              <select required name='estado' value={estado} className="form-select"
                onChange={(e) => handleOnChange(e)}  >
                <option selected>--Seleccione--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
            </div>
          </div>

        </div>
        <button className="btn btn-primary">Guardar</button>
      </form>

      <table className='table'>
        <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope='col'>Nombre</th>
            <th scope='col'>Estado</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
          </tr>
        </thead>
        <tbody>
          {
            productoras.length > 0 && productoras.map((productora, index) => {
              return <tr>
                <th scope='row'>{index + 1}</th>
                <td>{productora.nombre}</td>
                <td>{productora.estado}</td>
                <td>{moment(productora.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
                <td>{moment(productora.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
              </tr>
            })
          }
        </tbody>
      </table>


    </div>
  )
}
