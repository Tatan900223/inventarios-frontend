import React, { useState, useEffect } from 'react'
import { obtenerMedia } from '../../services/mediaService';
import { MediaCard } from './MediaCard';
import { MediaNew } from './MediaNew';


export const MediaView = () => {

  const [medias, setMedias] = useState([]);
  const [openModal, setOpeModal] = useState(false);
  
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

    const handleOpenModal = () =>{
      setOpeModal(!openModal)
    }

  return (
        <div className='container'>
          <div className="mt-1 mb-1 row row-cols-1 row-cols-md-2 g-2">
            {
              medias.map((media) => {
                return <MediaCard key={ media._id } media = {media}/>
              })
            }
          </div>
          {
          openModal ? <MediaNew 
          handleOpenModal={ handleOpenModal }
          listarMedias={ listarMedias } />:
          <button type="button" className="btn btn-primary fab" onClick={handleOpenModal}>
          <i className="fa-solid fa-plus"></i>
          </button>
          }
        </div>   
      )
}
