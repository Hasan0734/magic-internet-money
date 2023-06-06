import React from 'react';

interface PropsType {
    title: string,
    value: string
}
const Card4 = ({title, value}:PropsType) => {
    return (
        <div className='card4'>
            <h6 className='uppercase text-xxs font-bold'>{title}</h6>
            <h4 className='font-bold text-xsm leading-5 mt-2 ml-16'>{value}</h4>
        </div>  
    );
};

export default Card4;