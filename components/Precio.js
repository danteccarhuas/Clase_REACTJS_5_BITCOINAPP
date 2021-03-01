const Precio = (props) => {
    const {last, buy, sell} = props.precio;
    const quincMin = props.precio["15m"];
    return ( 
        <div className="card text-white bg-success mb-3">
            <div className="card-header">
                Precio del Bitcoin
            </div>
            <div className="card-body">
                <h4 className="card-title">Precio Actual : $ {last}</h4>
                <div className="d-md-flex justify-content-between">
                    <p className="card-text">
                        <span className="font-weight-bold">Última Hora: </span>{buy} %
                    </p>
                    <p className="card-text"><span className="font-weight-bold">Últimas 24 horas: 
                        </span>{sell} %
                    </p>
                    <p className="card-text">
                        <span className="font-weight-bold">Últimos 7 Días: </span>{quincMin} %
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Precio;