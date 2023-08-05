import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {GrCart} from 'react-icons/gr'
import {AiFillHeart} from 'react-icons/ai'
import {BiSolidUserCircle} from 'react-icons/bi'

export const Search = () => {
  return (
    <div className='flex justify-between items-center bg-red-400 text-white p-4'>
        <h1 className= 'text-5xl ml-8'> Berrymart </h1>
        <div className = 'flex items-center'>
        <input type="text" className="rounded-l-full rounded-r-none border border-gray-300 px-4 py-2 focus:outline-none  focus:border-blue-500 w-full bg-transparent">
            
        </input>
        <BsSearch className='px-2 bg-gray-300 ' size={42} />
        </div>

        

        <button className='flex items-center'> Login <BiSolidUserCircle className='ml-2' size={35} /></button>
        

        
    
        <div className='flex mr-8'>
            <AiFillHeart className='px-2' size={40}/>
            <GrCart className='px-2 text-white' size={40}/>
            

        </div>
        

        
    </div>
  )
}
