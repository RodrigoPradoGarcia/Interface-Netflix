import { memo } from 'react';
import styled from 'styled-components'; 

const ResultPesq = styled.div`
    min-height:100vh;
    width:100%;
    background:black;
    color:white;
    font-size:2em;
    padding-left:15px;
`;

const Mini = styled.div`
        width:90%;
        margin:auto;
        margin-top:15px;
        max-width:300px;
        height:auto;
        position:relative;
        top:0;
        left:0;
        transition:top .3s ease-in-out,left .3s ease-in-out;

        :hover
        {
            position:relative;
            top:-5px;
            left:-5px;
            cursor:pointer;
            filter:grayscale(.5);
        }
    `;

const ResultadosPesquisa = ({series,pesquisa,callbackCarrosselItem,setPesq})=>{

    const strSearch = (pesq,texto)=>{
        let pesqLowercase = pesq.toLowerCase();
        let textoLowercase = texto.toLowerCase();
        let achou = false;
        for(let i=0;i<texto.length;i++)
        {
            if(textoLowercase.charAt(i)===pesqLowercase[0])
            {
                achou = true;
                for(let j=0;j<pesq.length;j++)
                {
                    if(pesqLowercase.charAt(j)!==textoLowercase.charAt(i+j))
                    {
                        achou = false;
                        break;
                    }
                }
                if(achou)return true;
            }
        }
        return false;
    }

    const matches = (pesq,serie)=>{
        for(let campo in serie)
        {
           if(strSearch(pesq,serie[campo].toString()))
           {
               return true;
           }
        }
        return false;
    };

        return(
            <>
            {  pesquisa==="" ||
               <ResultPesq>
                    {pesquisa==="" || <h4 className='pb-5 mb-0'>Resultados para: {pesquisa}</h4>}
                    {series.filter( (serie)=>matches(pesquisa,serie) ).map( (serie,indice)=>{return <Mini key={`serie-${indice}`} style={{display:'inline',margin:'5px'}} className='item'><img alt={serie.titulo} style={{maxWidth:'200px',marginBottom:'15px'}} onClick={()=>{callbackCarrosselItem(serie);setPesq("");window.scrollTo(0,0)}} src={serie.miniatura} /></Mini>} )}
               </ResultPesq>
            }
            </>
        );
}

export default memo(ResultadosPesquisa);