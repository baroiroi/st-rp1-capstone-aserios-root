import React from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Modal } from './components/Modal'
import { Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
import { Loader } from './components/Loader'

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Modal' element={<Modal />} />
            </Routes>
            <Loader />
        </div>

    )
}

export default App