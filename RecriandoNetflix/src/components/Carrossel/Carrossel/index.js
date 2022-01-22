import React, { memo } from 'react';
import styled from 'styled-components';
import CarrosselItem from '../CarrosselItem';

const Caro = styled.div`
        cursor:move;
`;

const Carrossel = ({series,setSerieBanner})=>{

    return(
        <>
        <h1 className='text-light bg-black m-0 p-4'>Explore</h1>
            <Caro className='bg-black owl-carousel'>
                {series.map( (serie,indice)=><CarrosselItem key={`carrossel-item-${indice}`} {...serie} callbackCarrosselItem={()=>setSerieBanner(serie)} /> )}
            </Caro>
        </>
    );
};

export default memo(Carrossel);