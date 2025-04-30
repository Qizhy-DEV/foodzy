import { foods } from '@/data/food'
import React from 'react'

const HeroSection = ({currentFood, setCurrenFood}) => {

    return ( 
        <div className='w-[50%] z-10 flex flex-col gap-2 h-full text-[white] justify-center px-[5%]'>
            <span className='font-bold w-[100%] text-[35px] leading-[45px]'>"Get Ready to Taste the Rainbow — One Delicious Bite at a Time!"</span>
            <span className='font-medium w-[100%]'>From smoothie bowls bursting with color to mouthwatering creations you’ll want to share, our kitchen is your playground</span>
            <div className='flex items-center gap-4 w-[400px] mt-[1rem]'>
                {foods.map((food, index) => (
                    <button
                        onClick={() => setCurrenFood(index)}
                        className='cursor-pointer' 
                        key={food.name + index}>
                        <img src={`/${food.name}.png`} className='w-[100px] aspect-square'/>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default HeroSection