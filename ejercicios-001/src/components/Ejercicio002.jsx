import React from 'react'
//EXPORTACION NOMBREDA ES QUE SE PUEDEN TENER LAS QUE SEAN EN UN MISMO ARCHIVO
export const Ejercicio002 = () => {
  //Logica de componentes
  //Variables y/o constantes
  //Hooks
  //Funciones
  const nombreProducto = "Playera cuello V"
  function agregarCarritoDeCompras(){
    console.log("El producto: ", nombreProducto, " a sido añadido correctamente")

  }
  function eliminarDelCarritoDeCompras(){
    console.log("El producto: ", nombreProducto, " a sido eliminado correctamente")

  }
  return (
    <>
    <div className="row mt-4">
        <div className="col-12">
          <div className="h4 mt-4">
            <h2>
              Ejercicio 2 Botón y funciones
            </h2>
            <hr/>
          </div>
          <button className="w-25 btn btn-primary" onClick={agregarCarritoDeCompras}>
            <i className="bi bi-bag-plus"></i>
             <span className="ms-2">
              Agregar articulo
             </span>
          </button>
          <button className="w-25 btn btn-danger ms-3" onClick={eliminarDelCarritoDeCompras}>
            <i className="bi bi-trash"></i>
             <span className="ms-2">
              Eliminar articulo
             </span>
          </button>
        </div>
    </div>
    </>
  )
};

