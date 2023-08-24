import React from 'react'


import {  Chart as ChartJS} from 'chart.js/auto';
import data3 from './data3';

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

export const Bottom = () => {
  return (
    // <div className=" bottom ml-2 mt-3  mr-2 bg-white rounded-2xl ">

    <div className="flex ">
    <div className=" graph1 ml-2 mt-2 bg-white rounded-2xl">
<div className=" text-xl font-semibold ml-4"> Overall budget deficiency throughout the year </div>

<Line data={data3} options={options} />

    </div>
    <div className="cards2 bg-white ml-3 mt-2 rounded-2xl " >
   
    </div>

</div>



    // </div>
  )
}
export default Bottom