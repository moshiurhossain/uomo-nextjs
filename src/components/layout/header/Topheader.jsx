import Logo from '@/components/common/Logo'
import React from 'react'
import Container from '../container/Container'
import SearchInput from './SearchInput'

const Topheader = () => {
  return (
    <div className='bg-primary '>
    <Container>
        <div className=' text-white flex items-center gap-4 '>
            <Logo/>
            <SearchInput/>
        </div>
    </Container>
    </div>
  )
}

export default Topheader