import React from 'react'
import data from './data';
import {Bar} from 'react-chartjs-2';
import {  Chart as ChartJS} from 'chart.js/auto';
import data2 from './data2';

import { Line } from 'react-chartjs-2';

import {

  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  
  indexAxis: 'x', // This makes the bars display horizontally
 
   scales:{
    y:{
      beginAtZero: true,
    },
  },
};  


const Top = () => {
    return (
        <div className="flex ">
            <div className=" graph3  flex ml-2 mt-2 bg-white rounded-2xl">
           
           <div className='bargraph'>
           <Bar data={data} options={options} />
            </div>
            <div className='bargraph2'>
           <Bar data={data2} options={options} />
            </div>

            </div>
           
        </div>
    )
}

export default Top
