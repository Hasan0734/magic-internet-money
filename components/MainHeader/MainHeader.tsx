import React from 'react';
import Reward from '../ui/Reward';

const MainHeader = () => {
    return (
        <>
            <div className='hidden md:flex justify-between gap-3 mt-5'>
                <div className='card min-w-[130px] py-[35px] px-3 flex justify-center'>
                    <div className=''>
                        <h3
                            className='text-black font-bold text-sm'
                        >NODES</h3>

                        <h1 className=' text-black leading-10
                text-3.5xl font-bold'>25</h1>
                    </div>
                </div>
                <Reward />
            </div>

        </>
    );
};

export default MainHeader;