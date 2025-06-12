import { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'

const EjercicioUseState001 = () => {
    const [textoBtn,setTextoBtn]= useState("Registrarse")
    const [icons,setIcons]=useState("bi bi-box-arrow-in-right me-3")
    const cambiarTextoeIconBtn = ()=>{
        setTextoBtn("Te has registrado")
        setIcons("bi bi-dash-circle me-3")
    }
    return (
        <>
            <TituloEjercicio tituloEjercicio="Ejercicio 01 - Introduccion a Hook UseState"/>
            <div className="col-12 text-center mb-5">
                <button className="btn btn-dark w-50" onClick={cambiarTextoeIconBtn}>
                    <i className={icons}></i>
                    <span> 
                        {textoBtn}
                    </span>
                </button>
            </div>
        </>
    )
}

export default EjercicioUseState001;
