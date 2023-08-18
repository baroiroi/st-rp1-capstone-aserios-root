import React from 'react'
import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Modal } from './components/Modal'
import UsersService from './services/UsersService'

const App = () => {
    return (
        <>
            <div className=''>
                <Login />
                <UserBooking />
                <Modal />
            </div>



        </>

    )
}

export default App