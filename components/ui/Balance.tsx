import { CurrencyIcon } from '@/public/assets/svg';
import React from 'react';

const Balance = () => {
    return (
        <>
            <div className=' card w-full md:w-[300px] px-8 py-4 md:px-3 md:py-[35px]'>
                <h6 className='text-sm font-bold text-black ml-4 leading-[18px]'>Balance</h6>
                <div className='flex gap-1.5 items-center text-drop-shadow'>
                    <CurrencyIcon />
                    <h2 className='font-bold text-3.5xl text-black leading-10'>
                        124,500,020
                    </h2>
                </div>
            </div>
        </>
    );
};

export default Balance;