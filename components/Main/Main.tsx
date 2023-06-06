import React from 'react';
import Mint from '../ui/Mint';
import Claim from '../ui/Claim';
import PieChart from '../ui/PieChart';


const Main = () => {


    return (
        <>
            <div className='shadow-none card w-full p-9 mt-5 flex flex-col gap-y-6 md:flex-row items-center justify-between'>
                <div className='md:px-12 w-full md:auto text-center md:text-start'>
                    <h2 className='uppercase text-lg text-white text-stroke-black md:text-black  font-bold text-drop-shadow'>
                        PERCENTAGE OF TOTAL NODES
                    </h2>
                   <div className='flex justify-center md:justify-start'>
                   <PieChart/>
                   </div>
             
                </div>
                <div className='hidden md:block'>
                    <Mint />
                    <Claim />
                </div>
            </div>


        </>
    );
};

export default Main;