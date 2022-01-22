import InformacoesSerie from '../InformacoesSerie';
import styled from 'styled-components';
import { memo } from 'react';

const Bann = styled.div`
        width:100vw;
        min-height:min(calc( ( 100vw * 9 / 16 ) ), calc( 100vh - 80px ) );
        width:100%;
        background:linear-gradient(#000000AA,#000000AA),url('${props=>props.imagem}'),linear-gradient(black,black);
        background-size:100vw;
        background-repeat:no-repeat;

        @media screen and (max-width:600px)
        {
            min-height:calc( 100vh - 88px );
            background-size:calc(  ( 100vh * 16 / 9 ) - 160px );
            background-position:top center;
        }
    `;

    const BotaoSerie = styled.a`
        text-decoration:none;
        color:${props=>props.cor};
        background:${props=>props.background};
        max-width:300px;
        margin:auto;
        margin-top:10px;
        width:100%;
        text-align:center;
        padding:10px 0;
        transition:background .3s ease-in-out;
        cursor:pointer;

        :hover
        {
            color:white;
            background:black;
        }
    `;
const Banner = ({imagem,titulo,descricao,callbackAssistir,callbackMaisInformacoes,classificacao,categoria,estreia,genero,temporadas})=>{

    return(
        <>
            <Bann imagem={imagem} className='d-flex justify-content-start align-items-center flex-column flex-md-row'>
                <div className='d-flex flex-column p-3'>
                    <h1 style={{color:'#CCC'}} className='text-center mb-5'>{titulo}</h1>
                    <h5 className='mb-5' style={{maxWidth:'600px',color:'#CCC',textAlign:'justify'}}>{descricao}</h5>
                    <div className='d-flex flex-column flex-md-row m-auto w-100' style={{maxWidth:'600px'}}>
                        <BotaoSerie onClick={callbackAssistir} className='me-auto me-md-3' cor={'white'} background={'var(--vermelho)'}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-play-fill me-2" viewBox="0 0 16 16"><path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/></svg>Assistir agora</BotaoSerie>
                        <BotaoSerie onClick={callbackMaisInformacoes} data-bs-toggle='modal' data-bs-target='#meuModal' cor={'black'} background={'#CCC'}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-info-circle-fill me-2" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/></svg>Mais informações</BotaoSerie>
                        <InformacoesSerie imagem={imagem} titulo={titulo} classificacao={classificacao} categoria={categoria} estreia={estreia} genero={genero} temporadas={temporadas} />
                    </div>
                </div>
            </Bann>
        </>
    );
};

export default memo(Banner);