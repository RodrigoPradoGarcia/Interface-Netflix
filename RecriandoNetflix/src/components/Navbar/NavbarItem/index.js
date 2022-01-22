import { memo } from "react";

const NavbarItem = ({texto,callback})=>{

    return(
        <div className='me-0 me-md-5 linknav nav-item itemNav py-3 py-md-0' onClick={callback}>
            {texto}
        </div>
    );
};

export default memo(NavbarItem);