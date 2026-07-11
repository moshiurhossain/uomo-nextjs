import Logo from '@/components/common/Logo'
import React from 'react'
import Container from '../container/Container'
import SearchInput from './SearchInput'
import HeaderIcons from './HeaderIcons'

const Topheader = () => {
  return (
    <div className='bg-primary '>
    <Container className={`flex justify-between items-center`}>
      {/* left side */}
        <div className=' text-white flex items-center gap-8.25 '>
            <Logo/>
            <SearchInput/>
        </div>
      {/* left right */}  
      <div className='flex'>
       <HeaderIcons/>
      </div>
    </Container>
    </div>
  )
}

export default Topheader