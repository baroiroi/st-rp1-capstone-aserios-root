import React, { useState } from 'react'
import { LiaToothSolid } from 'react-icons/lia'
import { navbar } from '../utils/data'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false)

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    return (
        <div className="">
            <div className="flex items-center justify-between px-3 bg-lightgray h-15">
                <span></span>
                <LiaToothSolid size={30} onClick={handleClick} />
            </div>
            {showMenu && <div className="fixed w-full h-full px-3 text-right text-lightgray opacity-0.5">
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