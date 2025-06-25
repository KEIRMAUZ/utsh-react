import { useState } from "react"
import TituloEjercicio from "../TituloEjercicio"

const EjInput01 = () => {
    const limiteCaracteres = 10
    const [textoInput,setTextoInput] =useState('');

    const contadorRestantes =(limiteCaracteres-textoInput.length)
    function cambiarTextoInput(evento){
        setTextoInput(evento.target.value)
    }
  return (
    
    <>
      <TituloEjercicio tituloEjercicio="Use State - Inputs"/>
      <div className="row mt-4">
        <div className="col-12">
            <div className="input-group mb-3">
                 <input type="text" className="form-control" onChange={cambiarTextoInput} value={textoInput} maxLength={limiteCaracteres}/>
                 <span className="ms-1 input-group-text bg-primary text-white">
                    Caracteres restantes:
                    <span className="ms-2 p-2 badge text-bg-secondary">
                       {contadorRestantes}
                    </span>
                 </span>
            </div>
        </div>
      </div>
    </>
  )
}

export default EjInput01
