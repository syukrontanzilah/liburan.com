import React from 'react'
import {  FaCalendarWeek, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[90%]'>
      {/* search 1 input */}
      <div className='flex items-center space-x-6'>
        <div>
        <FaMap className='w-6 h-6 text-blue-600'/>
        </div>
        <div>
            <p className='text-lg font-medium mb-[0.2rem] text-left'>Location</p>
            <input type="text" placeholder='Where U going?' className='outline-none border-none placeholder:text-gray-500' />
        </div>
      </div>
      {/* search 2 input */}
      <div className='flex items-center space-x-6'>
        <div>
        <FaCalendarWeek className='w-6 h-6 text-blue-600' />
        </div>
        <div>
            <p className='text-lg font-medium mb-[0.2rem] text-left'>Start Date</p>
            <input type="date" className='outline-none border-none placeholder:text-gray-500' />
        </div>
      </div>
      {/* search 3 input */}
      <div className='flex items-center space-x-6'>
        <div>
        <FaCalendarWeek className='w-6 h-6 text-blue-600 placeholder:text-gray-500' />
        </div>
        <div>
            <p className='text-lg font-medium mb-[0.2rem] text-left'>End Date</p>
            <input type="date" className='outline-none border-none' />
        </div>
      </div>
      {/* search 4 input */}
      <div className='flex items-center space-x-6'>
        <div>
           <FaUserGroup className='w-6 h-6 text-blue-600'/>  
        </div>
       <div>
            <p className='text-lg font-medium mb-[0.2rem] text-left'>Guest</p>
            {/* <p className='text-gray-500 text-base font-normal'>1 Guest 1 Room</p> */}
            <input type="text" placeholder='1 Guest 1 Room' className='outline-none border-none placeholder:text-gray-500' />
        </div>
      </div>
      
    </div>
  )
}

export default SearchBox
