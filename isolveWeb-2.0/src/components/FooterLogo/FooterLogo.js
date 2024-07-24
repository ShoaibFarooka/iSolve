import React from 'react';
import logo from '../../assets/LogoWhite.png';
import { Link } from 'react-router-dom';

const FooterLogo = () => {
    return (
        <div className='mx-20 py-6 lg:h-[350px] h-[300px]'>
            <Link to='/'><img className='cursor-pointer h-auto w-[50%] lg:w-[20%]' src={logo} alt="" /></Link>
        </div>
    );
};

export default FooterLogo;