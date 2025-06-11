import React from "react"

export default function CrearCuentaBtn() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-12 text-center mt-4">
                <button className="btn btn-success w-25">
                    <i className="bi bi-person-check"></i>
                    <span className='ms-3'>
                        Crear cuenta
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}
