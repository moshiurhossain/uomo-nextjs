import React from 'react'
import { Menu } from 'lucide-react';
import { Handbag } from 'lucide-react';
import { Heart } from 'lucide-react';
import { User } from 'lucide-react';
const HeaderIcons = () => {
  return (
    <div className='flex text-white gap-7.5'>
        <button><User size={20}/></button>
        <button><Heart size={20}/></button>
        <button className='relative'>
            <Handbag size={20}/> 
            <span className='size-4 absolute flex justify-center items-center leading-4 bg-secondary rounded-full text-white font-medium text-[10px] -right-1 -bottom-2'>3</span>
         </button>
        <button><Menu size={20}/></button>
    </div>
  )
}

export default HeaderIcons