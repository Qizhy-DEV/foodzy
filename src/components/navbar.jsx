import React from 'react'

const Navbar = () => {
    return (
        <div className='w-full z-10 flex items-center justify-between text-[white]'>
            <div className='font-extrabold text-[28px]'>FoodZy</div>
            <ul className='flex items-center gap-8 font-medium'>
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>  
    )
}

export default Navbar