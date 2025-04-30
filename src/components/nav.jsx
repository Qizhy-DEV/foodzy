import React from 'react'
import Logo from './logo'

const Nav = () => {
    return (
        <div className="flex z-10 items-center justify-between gap-[6rem] w-full px-[5%]">
            <Logo/>
            <ul className="font-medium text-[white] text-[16px] flex items-center gap-10">
                <li>Home</li>
                <li>Categories</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Nav