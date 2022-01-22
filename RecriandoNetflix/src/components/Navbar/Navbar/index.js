import { memo } from 'react';
import BarraPesquisa from '../../Pesquisa/BarraPesquisa';
import NavbarItem from '../NavbarItem';

const Navbar = ({items,callbackPesquisa})=>{
    return(
        <div className='sticky-top p-2 navbar navbar-expand-md bg-black text-white'>
            <div className='container'>
                <div className='navbar-brand'><h3 className='logo'>NETFLIX</h3></div>
                <button className='navbar-toggler text-white' data-bs-toggle='collapse' data-bs-target='#menuNetflix'><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16"><path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/></svg></button>
                <div className='collapse navbar-collapse' id='menuNetflix'>
                    <div className='navbar-nav ms-auto'>
                        {items.map((item,indice)=><NavbarItem key={`navitem-${indice}`} texto={item.texto} callback={item.callback} />)}
                    </div>
                    <div className='py-3 py-md-0 d-flex justify-content-center'>
                    <BarraPesquisa callback={(valor)=>callbackPesquisa(valor)} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);
