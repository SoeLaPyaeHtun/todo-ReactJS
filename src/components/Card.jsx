import React from 'react'
import { BiXCircle } from "react-icons/bi";

const Card = ({tasks}) => {
  return (
    <>
        {
            tasks.map((task, index) => (
                <li key={index} className='bg-gray-600 text-gray-200 py-4 px-3 rounded-lg transiton duration-200 hover:bg-slate-500 flex justify-between items-center'>
                    <p> react lesson</p>
                    <BiXCircle className='text-2xl'/>
                </li>
            ))            
        }
    </>
  )
}

export default Card 