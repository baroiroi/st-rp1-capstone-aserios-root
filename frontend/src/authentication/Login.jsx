import { Link } from "react-router-dom"
const Login = () => {
    return (

        <>
            <div className="flex items-center justify-center h-screen bg-aqua">
                <form className="flex flex-col gap-4 items-center h-[24rem] w-[20rem] bg-darkgray rounded-xl pt-4 px-6 font-sans text-lightgray">
                    <span className="font-bold text-[2rem]">LOGIN</span>
                    <div className="flex-col justify-center">
                        <div className="font-medium">USERNAME</div>
                        <input type="text" className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Username" />
                        <div className="font-medium">PASSWORD</div>
                        <input type="password" className="rounded-lg h-10 w-[17rem] p-3 mb-4 bg-lightgray text-darkgray" placeholder="Password" />
                    </div>
                    <div className="flex gap-3 font-semibold underline text-darkgray text-decoration-line:">
                        <button className="w-24 p-2 rounded-md bg-lightgray">Login</button>
                        <button className="w-24 p-2 rounded-md bg-lightgray">Cancel</button>
                    </div>
                    <div className="mt-5">
                        <span>Not yet registered? </span>
                        <Link to="/Modal">Create an Account</Link>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login