import React from 'react'

export const MediaNew = ({ handleOpenModal }) => {
    return (
        <div className='sidebar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        <div className='sidebar-header'>
                            <h3>Nueva Media</h3>
                            <i class="fa-solid fa-xmark" onClick={handleOpenModal}></i>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <hr />
                        </div>
                    </div>
                    <form>
                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Serial</label>
                                    <input type="text" name='serial' className='form-control'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Título</label>
                                    <input type="text" name='titulo' className='form-control' />
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Sinopsis</label>
                                    <input type="text" name='sinopsis' className='form-control' />
                                </div>

                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Año de Estreno</label>
                                    <input type="date" name='AnoEstreno' className='form-control'
                                        required
                                    />
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Imagen</label>
                                    <input type="text" name='imagen' className='form-control' />
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">URL</label>
                                    <input type="text" name='url' className='form-control' />
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className="form-control">
                                        required
                                        <option value="">--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className="form-control">
                                        required
                                        <option value="">--Seleccione--</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className="form-control">
                                        required
                                        <option value="">--Seleccione--</option>
                                    </select>
                                </div>
                            </div>

                            <div className='col'>
                                <div class="mb-3">
                                    <label className="form-label">Director</label>
                                    <select className="form-control">
                                        required
                                        <option value="">--Seleccione--</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                            <button class="btn btn-primary">Guardar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

