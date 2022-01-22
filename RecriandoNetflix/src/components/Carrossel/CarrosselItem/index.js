import { memo } from 'react';
import styled from 'styled-components';

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
const CarrosselItem = ({titulo,miniatura,callbackCarrosselItem})=>{

    return(
        <>
            <Mini className='item'>
                <img alt={titulo} onClick={callbackCarrosselItem} src={miniatura} />
            </Mini>
        </>
    );
};

export default memo(CarrosselItem);