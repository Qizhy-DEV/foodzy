import { foods } from '@/data/food'
import React from 'react'

const HeroSection = ({setCurrentIndexFood}) => {

    return (
        <div className='flex z-10 flex-col gap-2 w-[50%] h-[90%] justify-center text-[white]'>
            <h1 className='text-[28px] font-bold w-[90%]'>"Get Ready to Taste the Rainbow — One Delicious Bite at a Time!"</h1>
            <span className='w-[70%]'>From smoothie bowls bursting with color to mouthwatering creations you’ll want to share, our kitchen is your playground</span>
            <div className='flex items-center gap-4 mt-2'>
                {foods.map((food, index) => (
                    <img 
                        onClick={() => setCurrentIndexFood(index)}
                        className='w-[100px] cursor-pointer aspect-square'
                        src={`${food.name}.png`}
                        key={food.name + index}/>
                ))}
            </div>
        </div>
    )
}

export default HeroSection