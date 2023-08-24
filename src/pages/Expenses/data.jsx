const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [200, 300, 310, 330, 440, 400,370,460,500,400,350,450],
        fill:true,

        backgroundColor: ['#1C88EC','#A4D3FF'],
        tension: 0.4, 
        label: 'Total expenses throughout the year', 
      }
    ],
  };
 export default data;