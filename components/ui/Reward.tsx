import { CurrencyIcon, InfoIcon } from '@/public/assets/svg';
import React from 'react';

const Reward = () => {
    return (
        <>
            <div className='card w-full px-8 py-4 md:py-[35px] flex md:px-9 items-center justify-between'>
                <div className=''>
                    <h6 className='uppercase text-sm text-black font-bold leading-[18px]'>UNCLAIMED REWARDS</h6>
                    <h1 className='text-black font-bold text-3.5xl leading-10 flex items-center gap-2 text-drop-shadow'>
                        <CurrencyIcon />  500,020
                    </h1>
                </div>
                <button className='hidden md:block'>
                    <InfoIcon />
                </button>
                <button className='block md:hidden'>
                    <InfoIcon width={30} height={30} />
                </button>
            </div>
        </>
    );
};

export default Reward;