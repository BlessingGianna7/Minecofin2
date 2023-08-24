import React from 'react'
import {Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import {Pie} from 'react-chartjs-2'
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const PieChart = () => {
  return (
    <div>
 <Pie width={360}
 height= {400}
 data={{
    labels: ['Public administration', 'Debt servicing', 'Foreign aid & diplomacy', 'Social services', 'Contigency & reserves', 'Defense & security', 'Culture & recreation', 'Resource management', ],
    datasets:[
        {
            label: 'Percentage taken up from total expenses',
            data: [12,19,3,5,2,3, 10, 5],
            backgroundColor:[
                '#DE6E6A',
                '#F3C96B',
                '#9EC97F',
                '#ED895D','#599F76',
                '#9265AF',
                '#5971C0',
               
                '#9EC97F'
            ],
            borderColor:[
                '#DE6E6A',
                '#F3C96B',
                '#9EC97F',
                '#ED895D','#599F76',
                '#9265AF',
                '#5971C0',
               
                '#9EC97F'
            ],
            borderWidth: 3,
            offset:[25,20,20,20]
        }
    ]
 }}



 options={{
    responsive: true,
     plugins:{
       legend:{
        labels:{
            font: {size:8}
        }
       }
     }
 }}
 />




    </div>
  )
}

export default PieChart