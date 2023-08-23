import React from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Modal } from './components/Modal'
import { Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'

const App = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Modal' element={<Modal />} />
            </Routes>
        </div>

    )
}

export default App