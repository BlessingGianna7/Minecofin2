// Navbar.js

// import Overview from './Overview';
// import Revenue from './Revenue';
// import Budget from './Budget';
// import Notifications from './Notifications';
// import Settings from './Settings';
// import Expenses from './Expenses';

// const Navbar = () => {
//   const [activeContent, setActiveContent] = useState('overview');

//   const handleNavItemClick = (content) => {
//     setActiveContent(content);
//   };

//   return (
//     <div className="navbar">
//       <ul>
//         <li onClick={() => handleNavItemClick('overview')}>Overview</li>
//         <li onClick={() => handleNavItemClick('revenue')}>Revenue Sources</li>
//         <li  onClick={() => handleNavItemClick('budget')}>
//      <div className="font-semibold  ml-3">Budget</div>
//         </li>
//         <li onClick={() => handleNavItemClick('notifications')}>Notifications</li>
//         <li onClick={() => handleNavItemClick('settings')}>Settings</li>
//       </ul>
//       <div className="content">
//         {activeContent === 'overview' && <Overview />}
//         {activeContent === 'revenue' && <Revenue />}
//         {activeContent === 'budget' && <Budget />}
//         {activeContent === 'notifications' && <Notifications />}
//         {activeContent === 'settings' && <Settings />}
//       </div>
//     </div>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import img from '../assets/logo.png'

import Expenses from '../pages/Expenses/expenses';
import Overview from '../pages/Overview/overview';
import Budget from '../pages/Budget/budget';
import Notifications from '../pages/Notifications/notifications';
import Settings from '../pages/Set/settings';
import Revenue from '../pages/Revenue/revenue';

const Navbar = () => {
   const [activeContent, setActiveContent] = useState('overview');

  const handleNavItemClick = (content) => {
    setActiveContent(content);
  };
  return (
    <div className=" sidebar ">
     
   
<div className='flex'>
 <div className='iconwords'>

 <div className="logo">
 <img className=" w-52 ml-7" src={img} alt="logoo" />

     </div>


     <div className="options">
<div className="list">

    <div className="bg-white-1000 text-black h-screen w-100% p-4">
      <ul className="ml-7">
        <li  onClick={() => handleNavItemClick('overview')} className="hover:bg-blue-500 p-2 rounded-xl  flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
  <path d="M9.2625 13.5937V15.5601M12.3609 9.66104V15.5601M15.4594 11.6274V15.5601M1 3.762C1 3.24049 1.21763 2.74035 1.60501 2.37158C1.99239 2.00282 2.51779 1.79565 3.06563 1.79565H17.525C18.0728 1.79565 18.5982 2.00282 18.9856 2.37158C19.373 2.74035 19.5906 3.24049 19.5906 3.762V17.5264C19.5906 18.0479 19.373 18.5481 18.9856 18.9168C18.5982 19.2856 18.0728 19.4928 17.525 19.4928H3.06563C2.51779 19.4928 1.99239 19.2856 1.60501 18.9168C1.21763 18.5481 1 18.0479 1 17.5264V3.762Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg><div className="font-semibold  ml-4">Overview</div>
        </li>
        <li onClick={() => handleNavItemClick('revenue')} className="hover:bg-blue-500 p-2 rounded-xl  flex ">
         <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 14C9 15.657 11.686 17 15 17C18.314 17 21 15.657 21 14M9 14C9 12.343 11.686 11 15 11C18.314 11 21 12.343 21 14M9 14V18C9 19.656 11.686 21 15 21C18.314 21 21 19.656 21 18V14M3 6C3 7.072 4.144 8.062 6 8.598C7.856 9.134 10.144 9.134 12 8.598C13.856 8.062 15 7.072 15 6C15 4.928 13.856 3.938 12 3.402C10.144 2.866 7.856 2.866 6 3.402C4.144 3.938 3 4.928 3 6ZM3 6V16C3 16.888 3.772 17.45 5 18M3 11C3 11.888 3.772 12.45 5 13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span> <div className="font-semibold ml-3">Revenue </div>


        </li>
        <li onClick={() => handleNavItemClick('expenses')}className="hover:bg-blue-500 p-2 rounded-xl flex">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M17 9V7C17 6.46957 16.7893 5.96086 16.4142 5.58579C16.0391 5.21071 15.5304 5 15 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V13C3 13.5304 3.21071 14.0391 3.58579 14.4142C3.96086 14.7893 4.46957 15 5 15H7M7 11C7 10.4696 7.21071 9.96086 7.58579 9.58579C7.96086 9.21071 8.46957 9 9 9H19C19.5304 9 20.0391 9.21071 20.4142 9.58579C20.7893 9.96086 21 10.4696 21 11V17C21 17.5304 20.7893 18.0391 20.4142 18.4142C20.0391 18.7893 19.5304 19 19 19H9C8.46957 19 7.96086 18.7893 7.58579 18.4142C7.21071 18.0391 7 17.5304 7 17V11ZM12 14C12 14.5304 12.2107 15.0391 12.5858 15.4142C12.9609 15.7893 13.4696 16 14 16C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 16 14C16 13.4696 15.7893 12.9609 15.4142 12.5858C15.0391 12.2107 14.5304 12 14 12C13.4696 12 12.9609 12.2107 12.5858 12.5858C12.2107 12.9609 12 13.4696 12 14Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span><div className="font-semibold  ml-3">Expenses</div>
        </li>
        <li onClick={() => handleNavItemClick('budget')}className="hover:bg-blue-500 p-2 rounded-xl flex">
        <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M9 5H7C6.46957 5 5.96086 5.21071 5.58579 5.58579C5.21071 5.96086 5 6.46957 5 7V19C5 19.5304 5.21071 20.0391 5.58579 20.4142C5.96086 20.7893 6.46957 21 7 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H15M9 5C9 4.46957 9.21071 3.96086 9.58579 3.58579C9.96086 3.21071 10.4696 3 11 3H13C13.5304 3 14.0391 3.21071 14.4142 3.58579C14.7893 3.96086 15 4.46957 15 5M9 5C9 5.53043 9.21071 6.03914 9.58579 6.41421C9.96086 6.78929 10.4696 7 11 7H13C13.5304 7 14.0391 6.78929 14.4142 6.41421C14.7893 6.03914 15 5.53043 15 5M14 11H11.5C11.1022 11 10.7206 11.158 10.4393 11.4393C10.158 11.7206 10 12.1022 10 12.5C10 12.8978 10.158 13.2794 10.4393 13.5607C10.7206 13.842 11.1022 14 11.5 14H12.5C12.8978 14 13.2794 14.158 13.5607 14.4393C13.842 14.7206 14 15.1022 14 15.5C14 15.8978 13.842 16.2794 13.5607 16.5607C13.2794 16.842 12.8978 17 12.5 17H10M12 17V18M12 10V11" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span><div className="font-semibold  ml-3">Budget</div>
        </li>
       
        <li  onClick={() => handleNavItemClick('notifications')} className="hover:bg-blue-500 p-2 rounded-xl flex">
         <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7.876 18.554C7.0056 18.3566 6.16967 18.03 5.396 17.585M11.876 1C13.8641 1.45407 15.6392 2.56969 16.9106 4.16421C18.182 5.75872 18.8744 7.73765 18.8744 9.777C18.8744 11.8163 18.182 13.7953 16.9106 15.3898C15.6392 16.9843 13.8641 18.0999 11.876 18.554M2.45497 14.87C1.90947 14.0775 1.49517 13.2023 1.22797 12.278M1 8.277C1.16 7.327 1.468 6.427 1.9 5.602L2.069 5.297M4.78296 2.356C5.71861 1.7119 6.76828 1.25172 7.87596 1M9.87598 5.777V9.777M9.87598 13.777V13.787" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span><div className="font-semibold  ml-4">Notifications</div>
        </li>
        <li onClick={() => handleNavItemClick('settings')} className="hover:bg-blue-500 p-2 rounded-xl flex">
         <span><svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
  <path d="M8.56535 2.54966C9.00533 0.823209 11.5853 0.823209 12.0253 2.54966C12.0913 2.80902 12.2207 3.04988 12.403 3.25263C12.5853 3.45538 12.8153 3.61429 13.0743 3.71644C13.3332 3.81858 13.6139 3.86107 13.8934 3.84044C14.1729 3.81981 14.4433 3.73665 14.6827 3.59772C16.2763 2.67354 18.1013 4.40982 17.1305 5.92784C16.9847 6.1556 16.8975 6.41288 16.8759 6.67876C16.8543 6.94465 16.8989 7.21164 17.006 7.45803C17.1132 7.70443 17.28 7.92327 17.4927 8.09677C17.7054 8.27028 17.9582 8.39355 18.2304 8.45656C20.044 8.8754 20.044 11.3314 18.2304 11.7502C17.958 11.813 17.7049 11.9362 17.492 12.1098C17.279 12.2833 17.112 12.5022 17.0047 12.7488C16.8974 12.9953 16.8528 13.2625 16.8745 13.5285C16.8961 13.7946 16.9835 14.052 17.1294 14.2799C18.1003 15.7969 16.2763 17.5342 14.6817 16.61C14.4424 16.4713 14.1721 16.3883 13.8928 16.3677C13.6135 16.3471 13.3331 16.3895 13.0742 16.4916C12.8154 16.5936 12.5855 16.7523 12.4032 16.9548C12.221 17.1574 12.0915 17.398 12.0253 17.6571C11.5853 19.3836 9.00533 19.3836 8.56535 17.6571C8.49934 17.3977 8.36992 17.1569 8.18764 16.9541C8.00536 16.7514 7.77537 16.5925 7.51637 16.4903C7.25738 16.3882 6.97672 16.3457 6.69722 16.3663C6.41772 16.3869 6.14728 16.4701 5.90793 16.609C4.3143 17.5332 2.48932 15.7969 3.46016 14.2789C3.60589 14.0512 3.69311 13.7939 3.71473 13.528C3.73635 13.2621 3.69176 12.9951 3.58458 12.7487C3.47741 12.5023 3.31067 12.2835 3.09792 12.11C2.88518 11.9365 2.63243 11.8132 2.36021 11.7502C0.546595 11.3314 0.546595 8.8754 2.36021 8.45656C2.63267 8.39372 2.88569 8.27053 3.09867 8.09701C3.31166 7.92349 3.4786 7.70455 3.5859 7.458C3.6932 7.21146 3.73783 6.94428 3.71616 6.67822C3.69449 6.41215 3.60713 6.15471 3.46119 5.92686C2.49035 4.40982 4.3143 2.67256 5.90896 3.59674C6.94177 4.19451 8.2803 3.66556 8.56535 2.54966Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M7.19688 10.1034C7.19688 10.8856 7.52332 11.6359 8.10439 12.189C8.68546 12.7421 9.47356 13.0529 10.2953 13.0529C11.1171 13.0529 11.9052 12.7421 12.4862 12.189C13.0673 11.6359 13.3938 10.8856 13.3938 10.1034C13.3938 9.32112 13.0673 8.5709 12.4862 8.01775C11.9052 7.46461 11.1171 7.15386 10.2953 7.15386C9.47356 7.15386 8.68546 7.46461 8.10439 8.01775C7.52332 8.5709 7.19688 9.32112 7.19688 10.1034Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg></span><div className="font-semibold  ml-4">Settings</div>
        </li>
      </ul>
    </div>
 
</div>
     </div>
     <ul className="ml-9">
<li className=" hover:bg-red-100 p-2  rounded-xl  flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M7 13L13 7M13 7H9M13 7V11M1 10C1 11.1819 1.23279 12.3522 1.68508 13.4442C2.13738 14.5361 2.80031 15.5282 3.63604 16.364C4.47177 17.1997 5.46392 17.8626 6.55585 18.3149C7.64778 18.7672 8.8181 19 10 19C11.1819 19 12.3522 18.7672 13.4442 18.3149C14.5361 17.8626 15.5282 17.1997 16.364 16.364C17.1997 15.5282 17.8626 14.5361 18.3149 13.4442C18.7672 12.3522 19 11.1819 19 10C19 8.8181 18.7672 7.64778 18.3149 6.55585C17.8626 5.46392 17.1997 4.47177 16.364 3.63604C15.5282 2.80031 14.5361 2.13738 13.4442 1.68508C12.3522 1.23279 11.1819 1 10 1C8.8181 1 7.64778 1.23279 6.55585 1.68508C5.46392 2.13738 4.47177 2.80031 3.63604 3.63604C2.80031 4.47177 2.13738 5.46392 1.68508 6.55585C1.23279 7.64778 1 8.8181 1 10Z" stroke="#E94444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg><div className=" text-red-600 font-semibold  ml-4">Sign out</div>
        </li>
</ul>


</div>
    
<div className="line2 mr-5  h-96 absolute  bg-slate-400"></div>


<div className="ml-6">
       
        {activeContent === 'overview' && <Overview/> }
        {activeContent === 'budget' && <Budget/> }
        {activeContent === 'notifications' && <Notifications/>}
        {activeContent === 'settings' && <Settings/> }
        {activeContent === 'expenses' && <Expenses/> }
        {activeContent === 'revenue' && <Revenue/> }
      </div>
</div>
    </div>
    

  );
};

export default Navbar;
