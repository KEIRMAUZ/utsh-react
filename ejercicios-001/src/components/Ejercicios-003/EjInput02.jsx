import React from 'react'
import TituloEjercicio from '../TituloEjercicio'

const EjInput02 = () => {
    return (
        <>
            <TituloEjercicio tituloEjercicio="Use State - Input002" />
            <div className="row mt-4">
                <div className="col-12 mb-5">
                    <div className="input-group d-flex justify-content-around g-4">
                        <div className="form-floating ">
                            <input type="number" id="inputNumero1" className="form-control" placeholder='Numero 1'/>
                            <label htmlFor="inputNumero1">Numero 1</label>
                        </div>
                        <div className="form-floating ">
                            <input type="number" id="inputNumero2" className="form-control" placeholder='Numero 2'/>
                            <label htmlFor="inputNumero2">Numero 2</label>
                        </div>
                        <button className="btn btn-outline-success">Sumar</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default EjInput02
