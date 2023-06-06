import React from 'react';
import {Chart as ChartJS, ArcElement, Tooltip} from 'chart.js'
import {Pie} from 'react-chartjs-2'
ChartJS.register(
    ArcElement,
    Tooltip,
)

const PieChart = () => {
    const data = {
        labels: ['Red', 'Blue'],
        datasets: [
            {
                data: [17,83],
                backgroundColor: ['#B05BC6', '#164E7D'],
                borderWidth: [0, 3]
            },
           
        ]
    }

    const options = {
        rotation: 17 * Math.PI
    }
    return (
        <>
             <div className='mt-5 w-[232px] h-[232px] md:w-[300px] md:h-[300px]'>
                        <Pie
                            data={data}
                            options={options}
                        >

                        </Pie>
                    </div>
        </>
    );
};

export default PieChart;