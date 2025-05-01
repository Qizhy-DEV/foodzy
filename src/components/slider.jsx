import { foods } from '@/data/food'
import React from 'react'

const Slider = ({currentIndexFood}) => {

    return (
        <div className='absolute bottom-3 left-[50%] flex items-center gap-3 translate-x-[-50%]'>
            {foods.map((food, index) => (
                <button 
                    style={{backgroundColor: currentIndexFood === index ? 'white' : '#ffffff5d'}}
                    className='h-4 aspect-square transition-all duration-1000 rounded-full'
                    key={food.name + index}/>
            ))}
        </div>
    )
}

export default Slider