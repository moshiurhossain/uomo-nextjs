import React from 'react'
import {
  NativeSelect,
  NativeSelectOptGroup,
  NativeSelectOption,
} from "@/components/ui/native-select"

const items =[
    {label:'computer',value:'computer'},
    {label:'laptop',value:'laptop'},
    {label:'smartphone',value:'smartphone'},
    {label:'gaming console',value:'gaming console'},
    {label:'monitors',value:'monitors'},
]
const Dropdown = () => {
  return (
<div className='text-primary-black'>
<NativeSelect>
  {/* <NativeSelectOption value="">All Category</NativeSelectOption>
  <NativeSelectOption value="apple">Apple</NativeSelectOption>
  <NativeSelectOption value="banana">Banana</NativeSelectOption>
  <NativeSelectOption value="blueberry">Blueberry</NativeSelectOption>
  <NativeSelectOption value="pineapple">Pineapple</NativeSelectOption> */}
  <NativeSelectOption value="">All Category</NativeSelectOption>
  {items.map((item)=>(
  
  <NativeSelectOption key={item.value} value={item.value}>{item.label}</NativeSelectOption>))}
</NativeSelect>
</div>
  )
}

export default Dropdown