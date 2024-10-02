import React from 'react'

const Container = (props) => {
    const {children} = props;
  return (
    <div className='w-[60%] p-4 bg-gray-500 mx-[20%]'>
        {children}
    </div>
  )
}

export default Container