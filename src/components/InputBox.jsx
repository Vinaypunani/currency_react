import React from 'react'

const InputBox = ({title,amount,setAmount,options,value,setValue}) => {
  return (
    <div className='flex flex-col gap-5 bg-zinc-200 text-black p-5 rounded-lg'>
            <div className='flex items-center justify-between text-gray-800 text-xl'>
              <h2>{title}</h2>
              <h2>Currency Type</h2>
            </div>
            <div className='flex items-center justify-between text-xl font-bold' >
              <input 
              className='outline-none rounded-sm px-2 py-2 w-1/2 bg-zinc-200'
              value={amount}
              onChange={(e)=> setAmount(e.target.value)}
              type="number" />
              <select 
              className='rounded-sm px-2 py-1 outline-none'
              value={value}
              onChange={(e)=>setValue(e.target.value)}
              >
                {options.map((item)=>(<option key={item} value={item}>{item}</option>))}
              </select>
            </div>
    </div>
  )
}

export default InputBox