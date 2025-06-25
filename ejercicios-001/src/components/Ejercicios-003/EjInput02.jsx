import React, { useState } from 'react'
import TituloEjercicio from '../TituloEjercicio'

const EjInput02 = () => {
    const [valorInput1,setValorInput1] = useState(0);
    const [valorInput2,setValorInput2] = useState(0);
    const [resultadoSuma,setResultadoSuma] = useState("");
    const [status,setStatus]=useState('none')
    const [statusCalculando,setStatusCalculando] =useState({
        activo:false,
        clase:"d-none"
    })
    function cambiarValorInput1(evento){
        setValorInput1(evento.target.value);
        setStatus('none');
    }
    const cambiarValorInput2 = (evento)=>{
        setValorInput2(evento.target.value);
        setStatus('none');
    }
    function Sumar(){
        setStatusCalculando({
            activo:true,
            clase:"d-flex"
        })
        setTimeout(()=>{
            const suma = parseFloat(valorInput1)+parseFloat(valorInput2);
            setResultadoSuma(suma);
            setStatusCalculando({
                activo:false,
                clase:'d-none'
            });
            setStatus('block')
        });
        
    }

    return (
        <>
            <TituloEjercicio tituloEjercicio="Use State - Input002" />
            <div className="row mt-4">
                <div className="col-12 mb-5">
                    <div className="input-group d-flex justify-content-around g-4">
                        <div className="form-floating ">
                            <input type="number" id="inputNumero1" className="form-control" placeholder='Numero 1' onChange={cambiarValorInput1} value={valorInput1}/>
                            <label htmlFor="inputNumero1"  >Numero 1</label>
                        </div>
                        <div className="form-floating ">
                            <input type="number" id="inputNumero2" className="form-control" placeholder='Numero 2' onChange={cambiarValorInput2} value={valorInput2}/>
                            <label htmlFor="inputNumero2">Numero 2</label>
                        </div>
                        <button className="btn btn-outline-success" onClick={Sumar}>Sumar</button>
                    </div>
                    <p className=''>Resultado : {status}</p>
                </div>
            </div>
        </>
    )
}
export default EjInput02
