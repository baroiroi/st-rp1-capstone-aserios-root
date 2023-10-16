import { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'
import { navbar, loggedNav } from '../utils/data'
import Logo from '../assets/DentalSmileLogo.jpg';
import { useNavigate } from 'react-router-dom';
const NavBar = ({ setJwt, jwt }) => {
    const [showMenu, setShowMenu] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        setShowMenu(prev => !prev)
    }

    let NavOption = jwt ? loggedNav : navbar
    
    const handleOnClick = () => {
        localStorage.removeItem('user')
        setJwt(null)
        navigate('/')
    }

    return (
        <div className="bg-lightgray">
            <div className="fixed z-50 flex items-center justify-between w-full pr-3 h-18 bg-[#FFFFFF] shadow-sm">
            <img src={Logo} alt="Dental Smile Logo" className='w-16 h-16'/>
                <span className='font-mono text-2xl'>
                    Dental Smile</span>
                <RxHamburgerMenu size={30} onClick={handleClick} />
            </div>
            {showMenu && <div className="absolute w-full h-[20rem] px-3 pt-[4.5rem] text-right text-aqua bg-lightgray">
                <ul className="p-2 space-y-2">
                    {NavOption.map((nav, index) => {
                        return (
                            <li key={index} className="text-md">
                                <a href={nav.href}>{nav.name}</a>
                            </li>
                        )
                    })
                    }
                    {
                        jwt && 
                        <li className="text-md">
                            <button onClick={handleOnClick}>Logout</button>
                        </li>
                    }
                </ul>
            </div>}
        </div>
    )
}

export default NavBar