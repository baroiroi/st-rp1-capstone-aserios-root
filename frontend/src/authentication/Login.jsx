import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setJwt }) => {

    const [loginInputs, setLoginInputs] = useState({})
    const navigate = useNavigate()

    const handleonChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        setLoginInputs((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(loginInputs)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(
                'http://localhost:8000/api/v1/login',
                loginInputs
            )
            console.log(response.data)
            
            if(response.status === 200) {
                localStorage.setItem('user',JSON.stringify(response.data))
                toast.success('Login Successfully')
                setJwt(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null)
                console.log(JSON.parse(localStorage.getItem('user')))
                setTimeout(navigate('/user/booking'), 2000)
            }
        } catch (error) {
            toast.error('Invalid Credentials')
        }

    }

    return (
        <>
            <ToastContainer />
            <div className="flex items-center justify-center h-screen bg-aqua">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center h-[25rem] w-[22rem] bg-darkgray rounded-xl pt-4 px-6 mr-2 font-sans text-lightgray">
                    <span className="font-bold text-[2rem]">LOGIN</span>
                    <div className="flex-col justify-center">
                        <div className="m-1 font-medium">Email</div>
                        <input
                            onChange={handleonChange}
                            type="text"
                            name="email"
                            id="email"
                            className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Username" />
                        <div className="m-1 font-medium">Password</div>
                        <input
                            onChange={handleonChange}
                            type="password"
                            name="password"
                            id="password"
                            className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Password" />
                    </div>
                    <div className="flex w-[17rem] gap-3 font-semibold text-darkgray">
                        <button type="submit" className="w-full p-2 rounded-md bg-[#30d6d6] text-[#000] shadow-lg">Login</button>
                        {/* <button className="w-24 p-2 rounded-md bg-lightgray">Cancel</button> */}
                    </div>
                    <div className="mt-3">
                        <span className="text-lightgray">Not yet registered? </span>
                        <Link to="/Form" className="font-semibold text-orange-200">Create an Account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login