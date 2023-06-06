import { CurrencyIcon } from '@/public/assets/svg';
import React from 'react';
import Balance from '../ui/Balance';
import Connect from '../ui/Connect';

const Header = () => {
    return (
        <>

            <div className='hidden md:flex items-center justify-between w-full'>
                <Balance />
                <div>
                    <img src='/assets/logo.png' alt='logo' />
                </div>
                <Connect />
            </div>
            <div className='block md:hidden'>
                <Connect />
            </div>
        </>
    );
};

export default Header;