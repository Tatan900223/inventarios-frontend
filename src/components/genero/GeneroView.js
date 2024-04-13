/*import React, { useState, useEffect } from 'react'
import { obtenerGenero } from '../../services/generoService';
import { GeneroCard } from './GeneroCard';

export const GeneroView = () => {

  const [generos, setGeneros] = useState([]);
  
  const listarGeneros = async () => {

    try {

      const { data } = await obtenerGenero();
      console.log(data);
      setGeneros(data);

    } catch (error) {
      console.log(error);
    }
   


  }
    useEffect (() => {
      listarGeneros();
    }, []);

  return (
        <div className='container-fluid'>
          <div className="row row-cols-1 row-cols-md-2 g-4">
            {
              generos.map((genero) => {
                return <GeneroCard key={ genero._id } genero = {genero}/>
              })
            }
          </div>
        </div>   
      )
}
*/
import React from 'react'

export const GeneroView = () => {
  return (
    <div>
        GeneroView
    </div>
  )
}
