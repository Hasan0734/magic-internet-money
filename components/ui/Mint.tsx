import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Card4 from './Card4';
import { MinusIcon, PlusIcon } from '@/public/assets/svg';

const Mint = () => {
    const [trigger, setTrigger] = useState(false);
    const [counter, setCounter] = useState(2);

    function openModal() {
        setTrigger(true)
    }
    const handleMint = () => {
        openModal()
    }

    return (
        <>
            <Modal
                isOpen={trigger}
                setIsOpen={setTrigger}>
                <div>
                    <Card4 title='MAXIMUM' value='2' />
                    <Card4 title='PRICE' value='200,000 $MIM' />
                    <Card4 title='REWARD RATE' value='2000 $MIM p/d' />

                    <div className='mt-8 flex items-center justify-between'>
                        <button
                            onClick={() => setCounter( counter > 1 ? counter - 1 : counter) }
                            className='p-2 bg-info-dark rounded-full'>
                            <MinusIcon />
                        </button>

                        <h3
                            className='text-4xl font-bold text-black'>
                            {counter}
                        </h3>

                        <button
                            onClick={() => setCounter(counter + 1)}
                            className='p-2 bg-info-dark rounded-full'>
                            <PlusIcon />
                        </button>
                    </div>
                    <button className='mt-8 uppercase font-bold text-white
                     bg-info-light w-full py-5 rounded text-xl leading-[30px]'>MINT</button>

                </div>
            </Modal>



            <div
                className='py-3 md:py-5 px-5 md:px-7 second-card mint-bg '>

                <h3
                    className='uppercase text-black text-xsm font-bold leading-5 text-stroke-white'>
                    MINT A MAGIC INTERNET NODE
                </h3>

                <button
                    onClick={handleMint}
                    className='button bg-info-dark'>
                    MINT
                </button>

            </div>
        </>
    );
};

export default Mint;