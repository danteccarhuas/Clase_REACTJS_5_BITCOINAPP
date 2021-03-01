import MasterPage from '../components/Master';
import Precio from '../components/Precio';
import Noticias from '../components/Noticias';
import fetch from 'isomorphic-unfetch';

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
                <h2>Noticias sobre bitcoin</h2>
                <Noticias 
                    noticias = {props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2>Proximos Eventos bitcoin</h2>
            </div>
        </div>
    </MasterPage>
);

Index.getInitialProps = async () => {
    const precio = await fetch('https://blockchain.info/ticker');
    const noticias = await fetch('http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=54f6bf7ecf0443518b4f200a0f7dd015&language=es');

    const resPrecio = await precio.json();
    const resNoticias = await noticias.json();

    return {
        precioBitcoin: resPrecio.USD,
        noticias: resNoticias.articles
    }
}

export default Index;