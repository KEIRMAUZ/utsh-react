const TituloEjercicio = (props) => {
const {tituloEjercicio} = props;
  return (
    <>
      <div className="row mt-5">
        <div className="col-12">
            <h2 className="h4 mt-4">
                {tituloEjercicio}
            </h2>
        </div>
      </div>
    </>
  )
}

export default TituloEjercicio
