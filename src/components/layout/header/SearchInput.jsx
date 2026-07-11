import React from 'react'
import Dropdown from './Dropdown'
import { Search } from 'lucide-react';


const SearchInput = () => {
  return (
    <div className='flex gap-1.5 w-136 bg-white h-12.5 rounded-sm px-5 items-center '>
        <input 
        type="text" 
        placeholder='Search product...'  
        className='placeholder:text-primary-grey flex-1' />
        <Dropdown/>
        <button>
         <Search className='text-primary-black'/>
        </button>
    </div>
  )
}

export default SearchInput