import React, { useState, useEffect } from 'react'
import { obtenerMedia } from '../../services/mediaService';
import { MediaCard } from './MediaCard';

export const MediaView = () => {

  const [medias, setMedias] = useState([]);
  
  const listarMedias = async () => {

    try {

      const { data } = await obtenerMedia();
      console.log(data);
      setMedias(data);

    } catch (error) {
      console.log(error);
    }
   


  }
    useEffect (() => {
      listarMedias();
    }, []);

  return (
        <div className='container-fluid'>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {
              medias.map((media) => {
                return <MediaCard key={ media._id } media = {media}/>
              })
            }
          </div>
        </div>   
      )
}
