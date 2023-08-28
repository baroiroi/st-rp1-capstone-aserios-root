import React from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
import { Loader } from './components/Loader'
import { Form } from './components/Form'

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Modal' element={<Form />} />
            </Routes>
            <Loader />
        </div>

    )
}

export default App