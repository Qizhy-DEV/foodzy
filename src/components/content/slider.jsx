import React from 'react'

const Slider = ({currentFood}) => {
  return (
    <div className='w-[6%] grid grid-cols-4 gap-2 absolute bottom-2 left-[50%] translate-x-[-50%]'>
        <div 
            style={{backgroundColor: currentFood === 0 ? 'white' : '#efefef78'}}
            className='w-full aspect-square rounded-full transition-all duration-500'/>
        <div 
            style={{backgroundColor: currentFood === 1 ? 'white' : '#efefef78'}}
            className='w-full aspect-square rounded-full transition-all duration-500'/>
        <div 
            style={{backgroundColor: currentFood === 2 ? 'white' : '#efefef78'}}
            className='w-full aspect-square rounded-full transition-all duration-500'/>
        <div 
            style={{backgroundColor: currentFood === 3 ? 'white' : '#efefef78'}}
            className='w-full aspect-square rounded-full transition-all duration-500'/>
    </div>
  )
}

export default Slider