import { foods } from '@/data/food'
import React from 'react'

const CircleSection = ({currentIndexFood}) => {

    return (
        <div className='absolute h-full aspect-square right-0 top-0'>
            <div 
                style={{
                    transform: `rotate(${foods[currentIndexFood].rotate}deg)`,
                    backgroundColor: foods[currentIndexFood].color
                }}
                className='h-[100%] transition-all duration-1000 top-[50%] absolute left-[50%] aspect-square rounded-full bg-[white]'>
                {foods.map((food, index) => (
                    <img 
                        style={{top: food.top, left: food.left}}
                        className='w-[75vh] absolute aspect-square translate-x-[-50%] translate-y-[-50%]'
                        src={`${food.name}.png`}
                        key={food.name + index}/>
                ))}
            </div>
        </div>
    )
}

export default CircleSection