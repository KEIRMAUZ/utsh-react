import Ejercicio01 from './components/ejercicio01'
import ButtonGeneral from './components/buttonGeneral' 
import ContenedorBotones  from './components/containerbtns'
import Ejercicio003 from './components/Ejercicio003'
function App() {

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="mt-2 text-center alert alert-success">Hola UTSH</h1>

          </div>
        </div>
        {/**Mandando a llamar componente eterno */}
        <Ejercicio01/>
        <ButtonGeneral/>
        <ContenedorBotones/>
        <Ejercicio003/>
      </div>
      
    </>
  )
}

export default App