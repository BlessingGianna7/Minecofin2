import React from 'react'

const CircleProgressbar = () => {
    const radius=85;
    const dashArray= radius * Math.PI *2 ;
    const dashOffset= dashArray-(dashArray* 34)/100;
  return (
    <div><svg width="100px" height="95px" viewBox={`0 0 200 200`}>
        
        <circle className='circle' cx={200/2} cy={200/2} strokeWidth="15px" r={radius}/>
        <circle className='circle2' cx={200/2} cy={200/2} strokeWidth="15px" r={radius} 
        style={{strokeDasharray: dashArray,
        strokeDashoffset:dashOffset,}}
        />
        <text  className=" font-semibold text-6xl"x="30%" y= "60%"> 35%</text>
        </svg></div>
  )
}

export default CircleProgressbar