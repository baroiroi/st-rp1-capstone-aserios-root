import Login from './authentication/Login'
import UserBooking from './components/UserBooking'
import { Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
// import { Loader } from './components/Loader'
import { Form } from './components/Form'
import Services from './components/Services'
import About from './components/About'

const App = () => {
    return (
        <div>
            <NavBar />

            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/Form' element={<Form />} />
                <Route path='/UserBooking' element={<UserBooking />} />
                <Route path='/Services' element={<Services />} />
                <Route path='About' element={<About />} />
            </Routes>

            {/* <Loader /> */}
        </div>

    )
}

export default App