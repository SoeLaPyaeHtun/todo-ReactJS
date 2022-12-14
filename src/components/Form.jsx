import React from 'react'

function Form() {
  return (
   <form className='block w-full md:w-1/3'>
        <div className='flex gap-4 w-full'>

            <input type="text" placeholder='Enter ' className='bg-gray-700 text-gray-200 py-2 px-3 rounded-lg w-2/3' />
            <button className='bg-amber-600 text-light w-1/3 rounded-lg text-white'>Add Task</button>

        </div>
   </form>
  )
}

export default Form