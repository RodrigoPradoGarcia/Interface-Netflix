import { memo } from 'react';
import styled from 'styled-components';

const ImgInfo = styled.img`
    width:200px;
    height:auto;
`;

const Classific = styled.div`
    height:1.3em;
    width:1.3em;
    line-height:1.3em;
    text-align:center;
    font-weight:bold;
    font-size:2em;
    background:${props=>props.cor};
    margin-left:10px;
`;

const Clas = styled.div`
    font-size:1.2em;
`;
const InformacoesSerie = ({ imagem,titulo,classificacao,categoria,estreia,genero,temporadas })=>{

    const cor = ()=>{
        switch(classificacao)
        {
            case 'L': return 'green';
            case '10': return 'aqua';
            case '12': return 'yellow';
            case '14': return 'orange';
            case '16': return 'red';
            case '18': return '#AAAAAA';
            default: return 'white';
        }
    };

  return(
      <>
        <div id='meuModal' className='modal fade'>
            <div className='modal-dialog'>
                <div className='modal-content bg-black text-white border border-dark border-1'>
                    <h4 className='modal-header border border-dark border-bottom-2'>
                        {titulo}
                        <Classific cor={cor}>{classificacao}</Classific>
                    </h4>
                    <div className='d-flex flex-column align-items-center flex-md-row modal-body'>
                            <ImgInfo src={imagem} />
                            <div className='ms-0 ms-md-5 mt-5 mt-md-0'>
                                <Clas  className='d-flex'>Categoria:{categoria}</Clas>
                                <Clas  className='d-flex'>Gênero:{genero}</Clas>
                                <Clas  className='d-flex'>Estreia:{estreia}</Clas>
                                {categoria==='série' && <Clas  className='d-flex'>Temporadas:{temporadas}</Clas>}
                            </div>
                    </div>
                    <div className='modal-footer border border-dark border-1'>
                        <button className='btn btn-danger' data-bs-dismiss='modal'>Fechar</button>
                    </div>
                </div>      
            </div>
        </div>
      </>
  );  

};

export default memo(InformacoesSerie);