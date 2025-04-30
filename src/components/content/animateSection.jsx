import { foods } from '@/data/food';
import React from 'react'

const AnimateSection = ({currentFood}) => {

    return (
        <div className='aspect-square absolute z-10 top-0 right-0 h-full overflow-hidden flex justify-end'>
            <div className='relative flex flex-col items-center gap-2 h-full aspect-square justify-center'>
                <div
                    style={{
                        transform: `rotate(${foods[currentFood].rotate}deg)`,
                        backgroundColor: foods[currentFood].color
                    }}  
                    className='w-[100%] transition-all duration-1000 aspect-square rounded-full flex items-center justify-center absolute right-[-50%] top-[50%]'>

                    {foods.map((food, index) => {

                        return (
                            <img
                                key={food.name + index}
                                src={`/${food.name}.png`}
                                style={{ top: food.top, left: food.left}}
                                className={`w-[75vh] absolute -translate-x-1/2 -translate-y-1/2`}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default AnimateSection