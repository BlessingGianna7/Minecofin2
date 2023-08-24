import React from 'react'
import Top from './Top'
import Bottom from './Bottom'

const Layout = () => {
  return (
    <div className=' layout bg-blue-100 rounded-2xl'>
        <div>
            <div className='mt-5'>
<Top/>
            </div>
            <div>
<Bottom/>
            </div>
        </div>
    </div>
  )
}

export default Layout