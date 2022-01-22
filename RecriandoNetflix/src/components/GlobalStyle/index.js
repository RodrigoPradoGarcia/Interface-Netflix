import { createGlobalStyle } from 'styled-components';
import { memo } from 'react';

const Estilo = createGlobalStyle`
    
    :root
    {
        --vermelho : #FF2222;
    }

    ::-webkit-scrollbar
    {
        height:50px;
        width:5px;
    }

    ::-webkit-scrollbar-thumb
    {
        background:red;
        border-radius:5px;
    }

    ::-webkit-scrollbar-track
    {
        background:black;
    }

    *
    {
        margin:0;
        padding:0;
        box-sizing:border-box;
        -webkit-font-smoothing: antialiased;
    }

    .logo
    {
        color:var(--vermelho);
        font-weight:900;
    }

    .linknav
    {
        transition:color .3s ease-in-out;
        cursor:pointer;
        text-align:center;
    }
    .linknav:hover
    {
        color:var(--vermelho);
    }

    .barraPesquisa
    {
        background:#333;
        outline:none;
        padding:5px;
        color:#ccc;
        border:none;
    }
`;

export default memo(Estilo);