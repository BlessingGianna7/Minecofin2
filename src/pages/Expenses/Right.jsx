import React from 'react'
import { Line} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
import {  Chart as ChartJS} from 'chart.js/auto';
import PieChart from './PieChart';

import data from './data';
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
  
  indexAxis: 'y', 
  scales: {
  
    x: {

      beginAtZero: true,
    },
  },
};  


const Right = () => {
  return (
    <div className='flex right'>
 <div className="flex-col graph2 ml-2 absolute mt-2 bg-white rounded-2xl">
<div  className=" hbar w-full ">
     <Bar data={data} options={options} />
  </div>
   
</div>
<div className=" left bg-white  ml-96 mt-2  rounded-2xl " >
  <div className=" text-blue-950 text-lg font-semibold ml-2" >Representation of expenses the budget caters to:</div>
<PieChart/>





</div>

</div>


  
  )
}

export default Right

