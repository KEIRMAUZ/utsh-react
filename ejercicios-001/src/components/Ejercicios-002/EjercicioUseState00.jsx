import React, { useState } from 'react'

const EjercicioUseState00 = () => {
    const[textoTitulo,setTextoTitulo]=useState("Kevin")
    const[parrafo,setParrafo]=useState("\n")
    const [beca,setBeca]=useState(2.5)
    const [color,setColor]=useState("text-danger")
    
    function cambiarTexto(){
        <div role='alert' className="alert alert-danger">
            Me diste clic
        </div>
        setTextoTitulo("Ejemplo")
        
    }
    const cambiarParrafo =()=>{
        setParrafo(" Si te daba bien duro en las noches, tardes y mañanas Te metía mi verga en tu boca y tú me la mamabasMe sacabas la leche a destajo")
    }

    const monto =()=>{
        setBeca(beca*2)
        setColor("text-success")
    }
  return (
    <>
        <div className="col-12">
            <span className="h2 text-bold">
                {textoTitulo}
            </span>
            <p>
            Por que te volteaste letra:
            {parrafo}
           <button onClick={cambiarParrafo} className="btn btn-primary">
            Ver letra
           </button>
            </p>
            <button onClick={cambiarTexto} className="btn btn-success ms-4 my-5">
                CAMBIAR TEXTO DE TU BOTON
            </button>
            <div className="col-12">
                <p>
                    Tu beca es de   :
                    <span className={color}>
                        {beca}
                    </span> 
                </p>
                <button onClick={monto } className="btn btn-success my-5">
                    Cambiar monto de la beca
                </button>
            </div>
        </div> 
    </>
  )
}

export default EjercicioUseState00
