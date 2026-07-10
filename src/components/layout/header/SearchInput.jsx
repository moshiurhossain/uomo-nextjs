import React from 'react'
import Dropdown from './Dropdown'


const SearchInput = () => {
  return (
    <div className='flex w-136 bg-white h-12.5 rounded-sm px-5 items-center '>
        <input 
        type="text" 
        placeholder='Search product...'  
        className='placeholder:text-primary-grey flex-1' />
        <Dropdown/>
    </div>
  )
}

export default SearchInput