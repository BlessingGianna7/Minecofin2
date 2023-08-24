import React, { useState } from 'react'

import data from './data'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  
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
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };  

const Top = () => {
    
    return (
        <div className="flex ">
            <div className=" graph ml-2 mt-2 bg-white rounded-2xl">

<Line options={options} data= {data}/>




            </div>
            <div className="cards bg-white ml-3 mt-2 rounded-2xl " >
            <div className=" bg-blue-100 mt-4 mr-5 ml-5 rounded-xl h-52 ">
                  <div className='flex '> 
                    


                    <div> 
                        <svg className="ml-2 mt-2 absolute" xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <path d="M36 18.5C36 28.7173 27.9411 37 18 37C8.05887 37 0 28.7173 0 18.5C0 8.28273 8.05887 0 18 0C27.9411 0 36 8.28273 36 18.5Z" fill="#2898FF" />
                    </svg>
                    <svg className="ml-4 mt-5 absolute" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 12C7 13.657 9.686 15 13 15C16.314 15 19 13.657 19 12M7 12C7 10.343 9.686 9 13 9C16.314 9 19 10.343 19 12M7 12V16C7 17.656 9.686 19 13 19C16.314 19 19 17.656 19 16V12M1 4C1 5.072 2.144 6.062 4 6.598C5.856 7.134 8.144 7.134 10 6.598C11.856 6.062 13 5.072 13 4C13 2.928 11.856 1.938 10 1.402C8.144 0.866 5.856 0.866 4 1.402C2.144 1.938 1 2.928 1 4ZM1 4V14C1 14.888 1.772 15.45 3 16M1 9C1 9.888 1.772 10.45 3 11" stroke="#F6E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </div>


                    <div className="  ml-44"><div className="w-7 h-7 mt-3 rounded absolute bg-slate-300"></div> <svg className="absolute w-5 h-4 mt-4 ml-1" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                        <path d="M3 0L5.59808 5.25H0.401924L3 0Z" fill="#7FD078" />
                    </svg></div>

                    <div className='ml-7 mt-3'><span className='text-green-500 ml-1'>+20% </span> this month</div>
                   
                   
                    </div>

                    <div className="mt-5 text-4xl ml-4 font-medium">Total tax revenue </div>
                    <div className="mt-3 text-3xl font-normal ml-4"> 47,000,000,000Frw</div>
                    <div className=' w-72 mt-2  ml-11 h-12 bg-slate-300 rounded-md '>
                    
                       <div className="bg-white  w-36 h-10 ml-1 absolute mt-1 rounded-md flex">
                         <div>
                            
                         </div>
                         <div className="ml-8 mt-2 flex">
                         <div>
      {/* <img src={"./file.png"}  className="w-5 h-6 mr-1" /> */}
      <svg className=" mr-1"xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
  <path d="M10.75 14.3333H14M12.375 12.6667V16M7.5 1H3.6C2.68992 1 2.23487 1 1.88727 1.18166C1.5815 1.34144 1.33291 1.59641 1.17712 1.91002C1 2.26653 1 2.73325 1 3.66667V13.3333C1 14.2667 1 14.7335 1.17712 15.09C1.33291 15.4036 1.5815 15.6586 1.88727 15.8183C2.23487 16 2.68992 16 3.6 16H6.6875M7.5 1L12.375 6M7.5 1V4.66667C7.5 5.13337 7.5 5.36673 7.58856 5.54499C7.66648 5.70179 7.79071 5.82928 7.94362 5.90918C8.11742 6 8.34492 6 8.8 6H12.375M12.375 6V8.5M4.25 12.6667H6.6875M4.25 9.33333H9.125M4.25 6H5.0625" stroke="#1C88EC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    </div>
                             Summary
                         </div>
                        </div>
                        
                        <div className=' ml-44 absolute mt-2 flex'>
                        <div><svg  className="mr-1 mt-2" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
  <path d="M4.05556 1.46154L12 1.46226M4.05556 7L12 7.00074M4.05556 12.5385L12 12.5391M1 1.92308H1.61111V1H1V1.92308ZM1 7.46154H1.61111V6.53846H1V7.46154ZM1 13H1.61111V12.0769H1V13Z" stroke="black" strokeOpacity="0.44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                        <div className='mt-1'>Details</div> 
                        </div>
                    
                        </div>   

                </div>


                <div className=" bg-blue-100 mt-4 mr-5 ml-5 rounded-xl h-52 ">
                  <div className='flex'> 
                    
                    <div> 
                        <svg className="ml-2 mt-2 absolute" xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                        <path d="M36 18.5C36 28.7173 27.9411 37 18 37C8.05887 37 0 28.7173 0 18.5C0 8.28273 8.05887 0 18 0C27.9411 0 36 8.28273 36 18.5Z" fill="#2898FF" />
                    </svg>
                    <svg className="ml-4 mt-5 absolute" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 12C7 13.657 9.686 15 13 15C16.314 15 19 13.657 19 12M7 12C7 10.343 9.686 9 13 9C16.314 9 19 10.343 19 12M7 12V16C7 17.656 9.686 19 13 19C16.314 19 19 17.656 19 16V12M1 4C1 5.072 2.144 6.062 4 6.598C5.856 7.134 8.144 7.134 10 6.598C11.856 6.062 13 5.072 13 4C13 2.928 11.856 1.938 10 1.402C8.144 0.866 5.856 0.866 4 1.402C2.144 1.938 1 2.928 1 4ZM1 4V14C1 14.888 1.772 15.45 3 16M1 9C1 9.888 1.772 10.45 3 11" stroke="#F6E9E9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </div>


                    <div className="  ml-44"><div className="w-7 h-7 mt-3 rounded absolute bg-slate-300"></div><svg className="absolute w-5 h-4 mt-4 ml-1" xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
  <path d="M3 6L0.401924 0.75L5.59808 0.75L3 6Z" fill="#B93131"/>
</svg></div>

                    <div className='ml-7 mt-3'><span className='text-red-500 ml-1'>-30% </span>this month</div>
                   
                   
                    </div>

                    <div className="mt-5 text-4xl ml-4 font-medium">Total tax revenue </div>
                    <div className="mt-3 text-3xl font-normal ml-4"> 47,000,000,000Frw</div>
                    <div className=' w-72 mt-2  ml-11 h-12 bg-slate-300 rounded-md '>
                    
                    <div className="bg-white  w-36 h-10 ml-1 absolute mt-1 rounded-md flex">
                      <div>
                         
                      </div>
                      <div className="ml-8 mt-2 flex">
                      <div>
   {/* <img src={"./file.png"}  className="w-5 h-6 mr-1" /> */}
   <svg className=" mr-1"xmlns="http://www.w3.org/2000/svg" width="15" height="17" viewBox="0 0 15 17" fill="none">
<path d="M10.75 14.3333H14M12.375 12.6667V16M7.5 1H3.6C2.68992 1 2.23487 1 1.88727 1.18166C1.5815 1.34144 1.33291 1.59641 1.17712 1.91002C1 2.26653 1 2.73325 1 3.66667V13.3333C1 14.2667 1 14.7335 1.17712 15.09C1.33291 15.4036 1.5815 15.6586 1.88727 15.8183C2.23487 16 2.68992 16 3.6 16H6.6875M7.5 1L12.375 6M7.5 1V4.66667C7.5 5.13337 7.5 5.36673 7.58856 5.54499C7.66648 5.70179 7.79071 5.82928 7.94362 5.90918C8.11742 6 8.34492 6 8.8 6H12.375M12.375 6V8.5M4.25 12.6667H6.6875M4.25 9.33333H9.125M4.25 6H5.0625" stroke="#1C88EC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
 </div>
                          Summary
                      </div>
                     </div>
                     
                     <div className=' ml-44 absolute mt-2 flex'>
                     <div><svg  className="mr-1 mt-2" xmlns="http://www.w3.org/2000/svg" width="13" height="14" viewBox="0 0 13 14" fill="none">
<path d="M4.05556 1.46154L12 1.46226M4.05556 7L12 7.00074M4.05556 12.5385L12 12.5391M1 1.92308H1.61111V1H1V1.92308ZM1 7.46154H1.61111V6.53846H1V7.46154ZM1 13H1.61111V12.0769H1V13Z" stroke="black" strokeOpacity="0.44" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></div>
                     <div className='mt-1'>Details</div> 
                     </div>
                 
                     </div>   



                </div>
            </div>

        </div>
    )
}

export default Top
