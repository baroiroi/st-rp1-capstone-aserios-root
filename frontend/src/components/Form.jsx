import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RxCross2 } from 'react-icons/rx'

const defaultValues = {

    email: '',
    first_name: '',
    last_name: '',
    address: '',
    contact_num: '',
    birthdate: '',
    gender: '',
    password: '',
}
export const Form = ({ handleClickbutton }) => {
    const [userInputs, setUserInputs] = useState(defaultValues)
    const [formErrors, setFormErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)

    const email_value = useRef(null);
    const first_name_value = useRef(null);
    const last_name_value = useRef(null);
    const address_value = useRef(null);
    const contact_num_value = useRef(null);
    const birthdate_value = useRef(null);
    const gender_value = useRef(null);
    const password_value = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {

            const createUser = async () => {
                try {
                    const response = await axios.post('http://localhost:8000/users', userInputs)
                    console.log('User created:', response.data)
                    toast.success("Account Successfully Created!")
                }
                catch (error) {
                    toast.error("Error creating account")
                    console.error('Error creating user:', error)
                }
            }
            createUser()
            setIsSubmit(false)
            setFormErrors({})
            setUserInputs(defaultValues)

            email_value.current.value = '';
            first_name_value.current.value = '';
            last_name_value.current.value = '';
            address_value.current.value = '';
            contact_num_value.current.value = '';
            birthdate_value.current.value = '';
            gender_value.current.value = '';
            password_value.current.value = '';
        }
    }, [formErrors, isSubmit, userInputs])


    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserInputs((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const validate = (userInputs) => {
        const errors = {}

        if (userInputs.email === "") {
            errors.email = "Email is required"
        } else {
            const EmailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z]+.[a-zA-Z]+.[a-zA-Z]{2,4}$/
            if (!EmailRegex.test(userInputs.email)) {
                errors.email = "Invalid email address"
            }
        }
        if (userInputs.first_name === "") {
            errors.first_name = "First Name is required"
        } else {
            const first_nameRegex = /^[a-zA-Z].\D*$/
            if (!first_nameRegex.test(userInputs.first_name)) {
                errors.first_name = "Invalid First Name"
            }
        }
        if (userInputs.last_name === "") {
            errors.last_name = "Last Name is required"
        } else {
            const last_nameRegex = /^[a-zA-Z].\D*$/
            if (!last_nameRegex.test(userInputs.last_name)) {
                errors.last_name = "Invalid Last Name"
            }
        }
        if (userInputs.address === "") {
            errors.address = "Address is required"
        }
        if (userInputs.contact_num === "") {
            errors.contact_num = "Contact Number is required"
        } else {
            const contact_numRegex = /^[09]{2}[0-9]{9}$/
            if (!contact_numRegex.test(userInputs.contact_num)) {
                errors.contact_num = "Invalid Contact Number Format"
            }
        }
        if (userInputs.birthdate === "") {
            errors.birthdate = "birthday is required"
        }
        if (userInputs.gender === "") {
            errors.gender = "Gender is required"
        }
        if (userInputs.password === "") {
            errors.password = "Password is required"
        } else {
            const PasswordRegex = /[a-zA-Z0-9]{8,}/
            if (!PasswordRegex.test(userInputs.password)) {
                errors.password = "Invalid Password"
            }
        }
        return errors
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setFormErrors(validate(userInputs))
        setIsSubmit(true)
    }


    return (
        <>
            <ToastContainer />
            <div className="flex justify-center items-top bg-aqua text-lightgray">
                <div className="my-32 mr-2 rounded-lg bg-darkgray">
                    <div className="px-8 py-6 w-80">
                        <div className="flex items-center justify-between w-full mb-6">
                            <h3 className="text-gray-900 text-[1.3rem] mb-[0.2rem] dark:text-white">
                                Create a New Account
                            </h3>
                            <button type="button" onClick={() => navigate('/')}>
                                        <RxCross2 size={15} />
                            </button>
                        </div>
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Email
                                </label>
                                <input
                                    ref={email_value}
                                    onChange={handleOnChange}
                                    type="text"
                                    name="email"
                                    id="email"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                    placeholder="email"
                                    autoComplete='on'
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.email}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Password
                                </label>
                                <input
                                    ref={password_value}
                                    onChange={handleOnChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="atleast 8 characters"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray font-style: italic"
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.password}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    First Name
                                </label>
                                <input
                                    ref={first_name_value}
                                    onChange={handleOnChange}
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="First Name"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                    autoComplete='on'
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.first_name}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Last Name
                                </label>
                                <input
                                    ref={last_name_value}
                                    onChange={handleOnChange}
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Last Name"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                    autoComplete='on'
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.last_name}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Address
                                </label>
                                <input
                                    ref={address_value}
                                    onChange={handleOnChange}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="address"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.address}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Contact Number
                                </label>
                                <input
                                    ref={contact_num_value}
                                    onChange={handleOnChange}
                                    type="number"
                                    name="contact_num"
                                    id="contact_num"
                                    placeholder="09*********"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.contact_num}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Birthdate
                                </label>
                                <input
                                    ref={birthdate_value}
                                    onChange={handleOnChange}
                                    type="date"
                                    name="birthdate"
                                    id="birthdate"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.birthdate}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Gender
                                </label>
                                <select
                                    ref={gender_value}
                                    onChange={handleOnChange}
                                    type="text"
                                    name="gender"
                                    id="gender"
                                    defaultValue={null}
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray text-darkgray">
                                    <option value="" disabled hidden>Choose here</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                                <span className='absolute text-aqua text-[0.75rem]'>{formErrors.gender}</span>
                            </div>
                            
                            <div className='flex justify-center text-darkgray'>
                                <button
                                    type='submit'
                                    onClick={handleClickbutton}
                                    className='w-full p-2 my-4 font-semibold rounded-lg bg-[#223e58] text-[#FFFFFF] shadow-lg'>Create Account</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
