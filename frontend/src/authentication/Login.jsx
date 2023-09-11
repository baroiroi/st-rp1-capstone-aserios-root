import { Link } from "react-router-dom"
import { useState } from 'react'
import axios from "axios"
const Login = () => {

    const [loginInputs, setLoginInputs] = useState({})

    const handleonChange = (e) => {
        const { name, value } = e.target;
        setLoginInputs((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:8000/login', loginInputs)
            if (response.data.length > 0) {
                console.log(response.data)
            }
            else {
                alert('User not found')
            }
        }
        catch (error) {
            console.error(error)
        }

    }


    return (
        <>
            <div className="flex items-center justify-center h-screen bg-aqua">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center h-[24rem] w-[20rem] bg-darkgray rounded-xl pt-4 px-6 font-sans text-lightgray">
                    <span className="font-bold text-[2rem]">LOGIN</span>
                    <div className="flex-col justify-center">
                        <div className="font-medium">EMAIL</div>
                        <input
                            onChange={handleonChange}
                            type="text"
                            name="email"
                            id="email"
                            className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Username" />
                        <div className="font-medium">PASSWORD</div>
                        <input
                            onChange={handleonChange}
                            type="password"
                            name="password"
                            id="password"
                            className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Password" />
                    </div>
                    <div className="flex gap-3 font-semibold underline text-darkgray text-decoration-line:">
                        <button className="w-24 p-2 rounded-md bg-lightgray">Login</button>
                        <button className="w-24 p-2 rounded-md bg-lightgray">Cancel</button>
                    </div>
                    <div className="mt-5">
                        <span>Not yet registered? </span>
                        <Link to="/Form" className="underline text-decoration-line:">Create an Account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login