import { useState } from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
// import { Loader } from './components/Loader'
import { Form } from './components/Form'
import Services from './components/Services'
import About from './components/About'
import Redirect from './common/Redirect'
import PageNotFound from './common/PageNotFound'

let userToken = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null

const App = () => {
    const [jwt, setJwt] = useState(userToken)

    return (
        <div>
            <NavBar setJwt={setJwt} jwt={jwt} />

            <Routes>
                {jwt ? (
                    <>
                        <Route path="/" element={<Redirect setJwt={setJwt} />} />
                        <Route path='/user/booking' element={<UserBooking />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='About' element={<About />} />
                    </> 
                ) : (
                    <>
                        <Route path='/' element={<Login setJwt={setJwt} />} />
                        <Route path='/Form' element={<Form />} />
                        <Route path='/user/booking' element={<PageNotFound />} />
                        <Route path='/Services' element={<Services />} />
                        <Route path='About' element={<About />} />
                    </>
                )}
                    
            </Routes>

            {/* <Loader /> */}
        </div>

    )
}

export default App