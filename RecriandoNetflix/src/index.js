import ReactDOM from 'react-dom';
import {useState} from 'react';

//Dados
import { series } from './DB/series';

//Componentes
import Estilo from './components/GlobalStyle';
import Navbar from './components/Navbar/Navbar';
import ResultadosPesquisa from './components/Pesquisa/ResultadosPesquisa';
import Banner from './components/Banner';
import Carrossel from './components/Carrossel/Carrossel';

function shuffle(arr)
{
    let rand;
    for(let i=0;i<arr.length-1;i++)
    {
        rand = Math.floor(Math.random()*(arr.length-i)+i);
        let troca = arr[i];
        arr[i] = arr[rand];
        arr[rand] = troca;
    }
}

const App = ()=>{

    const [serieBanner,setSerieBanner] = useState(series[Math.floor(Math.random()*(series.length))]);
    const [pesq,setPesq] = useState("");

    return(
        <>
            <div style={{zIndex:'10',position:'sticky',top:'0'}}>
                <Navbar callbackPesquisa={(valor)=>{setPesq(valor)}} items={[{texto:'Filmes',callback:()=>{setPesq('Filme');}} , {texto:'Séries',callback:()=>setPesq("Série")},{texto:'Desenhos',callback:()=>setPesq("Desenho")},{texto:'Surpreenda-me',callback:()=>{
                    let numero = Math.floor(Math.random()*(series.length));
                    setSerieBanner(series[numero]);
                    setPesq("");
                }} ]} />
                <ResultadosPesquisa setPesq={setPesq} series={series} pesquisa={pesq} callbackCarrosselItem={(serie)=>setSerieBanner(serie)} />
            </div>
            <div className={`d-${pesq===""?'block':'none'}`}>
                <Banner {...serieBanner} callbackAssistir={()=>{window.location.href = serieBanner.video}} />
                <Carrossel series={series} setSerieBanner={setSerieBanner} />
            </div>
        </>
    );
};


shuffle(series);
ReactDOM.render(
    <>
        <Estilo />
        <App />
    </>
    ,document.getElementById("root"));
