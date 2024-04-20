import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export const MediaCard = (props) => {
    const { media } = props;
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <img src={media.imagen} className="card-img-top" alt="Img" />
                    <hr />
                    <div className="card-body">
                        <h5 className="card-title">Características</h5>
                        <p className="card-text">{`Serial: ${media.serial}`}</p>
                        <p className="card-text">{`Titulo: ${media.titulo}`}</p>
                        <p className="card-text">{`Sinopsis: ${media.sinopsis}`}</p>
                        <p className="card-text">{`Año de Estreno: ${media.anoEstreno}`}</p>
                        <p className="card-text">
                            <Link to ={`medias/edit/${media._id}`}>Ver mas...</Link>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

