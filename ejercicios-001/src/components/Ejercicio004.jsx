import { useState } from "react";

const Ejercicio004 = () => {
  const [mensaje, setMensaje] = useState("Haz clic");

  const saludar = () => {
    setMensaje("Hola mucho gusto");
  };

  const reset = () => {
    setMensaje("Haz clic");
  };

  const despedir = () => {
    setMensaje("Hasta luego suerte");
  };

  return (
    <div className="row mt-4">
      <div className="col-12">
        <div className="h4 mt-4">
          <h2>Ejercicio 4</h2>
          <hr />
        </div>
        <div className="col-12 text-center">
          <p className="h1">{mensaje}</p>
          <div className="col-12">
            <div className="col-12">
              <button
                className="btn btn-primary text-dark fw-bold ms-5 w-25"
                onClick={saludar}
              >
                Saludo!
              </button>
            </div>
            <div className="col-12">
              <button
                className="btn btn-success text-dark fw-bold ms-5 w-25"
                onClick={reset}
              >
                Reiniciar
              </button>
            </div>
            <div className="col-12">
              <button
                className="btn btn-warning text-dark fw-bold ms-5 w-25"
                onClick={despedir}
              >
                Despedir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ejercicio004;
