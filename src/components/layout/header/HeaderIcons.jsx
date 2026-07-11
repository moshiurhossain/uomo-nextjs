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
        <button><Handbag size={20}/></button>
        <button><Menu size={20}/></button>
    </div>
  )
}

export default HeaderIcons