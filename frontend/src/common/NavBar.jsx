import React, { useState } from 'react'
import { LiaToothSolid } from 'react-icons/lia'
import { navbar } from '../utils/data'
import Logo from '../assets/DentalSmileLogo.jpg';

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <div className="">
            <div className="flex items-center justify-between h-16 pr-3">
            <img src={Logo} alt="Dental Smile Logo" className='w-16 h-16'/>
                <span className='font-mono'>
                    Dental Smile</span>
                <LiaToothSolid size={30} onClick={handleClick} />
            </div>
            {showMenu && <div className="absolute w-full px-3 text-right text-aqua bg-lightgray">
                <ul className="">
                    {navbar.map((nav, index) => {
                        return (
                            <li key={index}>
                                <a href={nav.href}>{nav.name}</a>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>}
        </div>
    )
}

export default NavBar