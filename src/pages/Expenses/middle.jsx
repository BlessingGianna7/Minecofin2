import React from 'react'
import SearchBar from '../../components/Search'
import Layout from './Layout'
const Middle = () => {
  return (
    <div >
        <div ><SearchBar/></div>
        <div className="mr-3"><Layout/></div> 
    </div>
  )
}

export default Middle