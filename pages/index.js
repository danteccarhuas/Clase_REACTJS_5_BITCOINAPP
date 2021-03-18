import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import fetch from 'isomorphic-unfetch';
import Eventos from '../components/Eventos';

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <h2>Precio del bitcoin</h2>
                <Precio 
                    precio={props.precioBitcoin}
                />
            </div>
            <div className="col-md-8">
                <h2 className="my-4">Noticias sobre bitcoin</h2>
                <Noticias 
                    noticias = {props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2 className="my-4">Proximos Eventos bitcoin</h2>
                <Eventos 
                    eventos={props.eventos}
                />
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const precio = await fetch('https://blockchain.info/ticker');
    const noticias = await fetch('http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=54f6bf7ecf0443518b4f200a0f7dd015&language=es');
    const eventos = await fetch('https://www.eventbriteapi.com/v3/series/15241955098/?tracking_code=5YVCT65EX3I22YHEHF73&token=5YVCT65EX3I22YHEHF73');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();
    const resEventos = await eventos.json();
    const arrayResEventos = [];
    arrayResEventos.push(resEventos);

    return {
        precioBitcoin: resPrecio.USD,
        noticias: resNoticias.articles,
        eventos: arrayResEventos
    }
}

export default Index;