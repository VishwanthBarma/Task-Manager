import React from 'react'

function Note({ data } : any) {
  return (
    <div className='flex flex-col space-y-3'>
        <div className='flex items-center cursor-pointer'>
          <div className='flex items-center space-x-2'>
            <h1 className='font-bold text-lg'>{ data.id }.</h1>
            <h1 className='font-semibold'>{ data.content }</h1>
          </div>
            <div className='p-1 bg-yellow-500 ml- opacity rounded-lg ml-auto'>
                <h1 className='dark:text-black font-bold'>{ data.tag }</h1>
            </div>
        </div>
        <hr className='dark:opacity-20'></hr>
    </div>
  )
}

export default Note