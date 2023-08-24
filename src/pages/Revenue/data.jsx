const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        data: [200, 300, 330, 330, 440, 400,370,460,500,400,350,450],
        fill:false,
        borderColor: '#1C88EC',
        backgroundColor: '#1C88EC',
        tension: 0.4, 
        label: 'Total generated income over the year'
      },
    ],
  };
 export default data;