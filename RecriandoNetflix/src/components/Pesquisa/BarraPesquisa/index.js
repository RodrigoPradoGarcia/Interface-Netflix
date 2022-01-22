import { useState,useEffect, memo } from 'react';
import styled from 'styled-components';
 
const Input = styled.input`
    @media screen and (max-width:600px)
    {
        max-width:50vw;
    }
    border-radius:5px 0px 0px 5px !important;
`;
const BarraPesquisa = ({callback})=>{

    const [valor,setValor] = useState("");

    useEffect(()=>callback(valor),[valor]);

    return(
        <div classname='d-flex align-items-center'>
            <div className='input-group'>
                <Input onFocus={()=>setValor("")} onChange={(event)=>{setValor(event.target.value);window.scrollTo(0,0)}} value={valor} type='text' className='rounded-3 barraPesquisa me-0' placeholder='Pesquisar...' />
                <div classname='input-group-prepend'>
                    <button onClick={()=>{setValor("");callback("")}} className='rounded-0  rounded-end btn text-light px-3 py-1 bg-danger'>&#x2715;</button>
                </div>
            </div>
        </div>
    );
};

export default memo(BarraPesquisa) ;