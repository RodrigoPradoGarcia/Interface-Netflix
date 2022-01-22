import { useState,useEffect, memo } from 'react';

const BarraPesquisa = ({callback})=>{

    const [valor,setValor] = useState("");

    useEffect(()=>callback(valor),[valor]);

    return(
        <input onFocus={()=>setValor("")} onChange={(event)=>{setValor(event.target.value)}} value={valor} type='text' className='rounded-3 barraPesquisa me-2' placeholder='Pesquisar...' />
    );
};

export default memo(BarraPesquisa) ;