import React from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Modal } from './components/Modal'
import { Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Modal' element={<Modal />} />
            </Routes>
        </div>

    )
}

export default App