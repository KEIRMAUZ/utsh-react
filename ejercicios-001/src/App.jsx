import Ejercicio01 from './components/ejercicio01'
import ButtonGeneral from './components/buttonGeneral' 
import ContenedorBotones  from './components/containerbtns'
import Ejercicio003 from './components/Ejercicio003'
import Ejercicio004 from './components/Ejercicio004'
import EjercicioUseState001 from './components/Ejercicios-002/EjercicioUseState001'
import EjercicioUseState002 from './components/Ejercicios-002/EjercicioUseState002'
import EjercicioUseState00 from './components/Ejercicios-002/EjercicioUseState00'
import EjInput01 from './components/Ejercicios-003/EjInput01'
import EjInput02 from './components/Ejercicios-003/EjInput02'

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
        <Ejercicio004/>
        <EjercicioUseState001/>
        <EjercicioUseState002/>
        <EjercicioUseState00/>
        <EjInput01/>
        <EjInput02/>
      </div>
      
    </>
  )
}

export default App