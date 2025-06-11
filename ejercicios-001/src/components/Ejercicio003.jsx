import { useState } from "react";

const Ejercicio003 = () => {
    let numero = 0;
    const [numerito, setNumerito] = useState(0);
    const sumar = ()=>{
        setNumerito(numerito+1);
    }
    const restar = ()=>{
        setNumerito(numerito-1);
    }
    const reset = ()=>{
        setNumerito(numerito*0);
    }
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
            <div className="h4 mt-4">
                <h2>
                    Ejercicio 3 Funciones-Contador
                </h2>
                <hr/>
            </div>
            <div className="col-12 text-center">
                <p className="h1">
                    {numerito}
                </p>
                <div className="col-12 ">
                    <div className="col-12">
                        <button className="btn btn-primary text-dark fw-bold ms-5 w-25" onClick={sumar}>
                            Sumar
                        </button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-success text-dark fw-bold ms-5 w-25" onClick={reset}>
                            Reiniciar
                        </button>
                    </div>
                    <div className="col-12">
                        <button className="btn btn-warning text-dark fw-bold ms-5 w-25" onClick={restar}>
                            Restar
                        </button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Ejercicio003
//BTN QUE DIGA SALUDAR Y QUE DIGA DESPEDIR EN EL NUMERITO