import React from 'react'
import Container from '../container/Container'
import Link from 'next/link'


const menuItems = [
    {id:1,label:'HOME'},
    {id:2,label:'SHOP'},
    {id:3,label:'COLLECTION'},
    {id:4,label:'JOURNAL'},
    {id:5,label:'LOOKBOOK'},
    {id:6,label:'PAGES'},
   ]
const Navbar = () => {
  
  return (
    <div className='bg-secondary'>
        <Container>
         <div>
             <ul className='flex text-white gap-11 text-sm font-medium'>
            {menuItems.map((item)=>(
               
                <li key={item.id}>
                    <Link href={`/${item.label.toLocaleLowerCase()}`}>{item.label}</Link>
                </li>
            
               
            ))}
            </ul>
         </div>
        </Container> 
    </div>
  )
}

export default Navbar