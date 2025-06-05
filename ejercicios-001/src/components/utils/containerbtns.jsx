import IniciarSesionBtn from "./btn"
import CrearCuentaBtn from "./btnCrear"

export default function ContenedorBotones(){
    return(
        <div className="container">
            <h2 className="h4 text-start mt-4">
                Contenedor de botones
            </h2>
            <div className="col-12 d-flex flex-column flex-md-row justify-content-around">
                <IniciarSesionBtn/>
                <CrearCuentaBtn/>
            </div>
        </div>
    )
}