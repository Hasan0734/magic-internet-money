import React from 'react';

const Connect = () => {
    return (
        <>
            <div className='card w-full md:w-[270px] py-4 px-3 flex items-center justify-between md:block md:px-3 text-center md:pt-3.5 md:pb-4'>
                <button className='order-2 bg-info-light rounded px-5 md:px-8 py-3
                     text-white font-bold text-xsm uppercase border md:border-0 border-[#164E7D] text-stroke-connect'>
                    Connect
                </button>
                <h2 className='order-1 font-bold text-xsm md:text-lg leading-5 md:leading-[25px]
                 text-black text-drop-shadow md:mt-7 text-stroke-white'>
                    0xB7De0...9b247
                </h2>

            </div>
        </>
    );
};

export default Connect;