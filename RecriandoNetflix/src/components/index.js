import styled from 'styled-components';

const ResultPesq = styled.div`
    width:100%;
    background:black;
    color:white;
    font-size:2em;
    padding:min(20px , 5vw);
`;

const ResultadosPesquisa = ({series,pesquisa,callbackCarrosselItem})=>{

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
               <ResultPesq>
                    {pesquisa==="" || <h4 className='mb-4'>Resultados para: {pesquisa}</h4>}
                    {series.filter( (serie)=>matches(pesquisa,serie) ).map( (serie,indice)=>{return <Mini key={`serie-${indice}`} style={{display:'inline',margin:'5px'}} className='item'><img style={{maxWidth:'200px'}} onClick={()=>callbackCarrosselItem(serie)} src={serie.miniatura} /></Mini>} )}
               </ResultPesq>
            </>
        );
}