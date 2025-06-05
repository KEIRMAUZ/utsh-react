import IniciarSesionBtn from "./btn"
import CrearCuentaBtn from "./btnCrear"

export default function ContenedorBotones(){
    return(
        <div className="col-12 d-flex flex-column flex-md-row justify-content-around">
            <IniciarSesionBtn/>
            <CrearCuentaBtn/>
        </div>
    )
}