import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const defaultValues = {

    email: '',
    Fname: '',
    Lname: '',
    address: '',
    contact: '',
    birthday: '',
    gender: '',
    password: '',
}
export const Form = () => {
    const [userInputs, setUserInputs] = useState(defaultValues)
    const [formErrors, setFormErrors] = useState({})
    // const [isSubmit, setIsSubmit] = useState(false)

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setUserInputs((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setFormErrors(validate(userInputs))
        console.log(userInputs)
        console.log(userInputs.email)
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
        if (userInputs.Fname === "") {
            errors.Fname = "First Name is required"
        } else {
            const FnameRegex = /^[a-zA-Z].\D*$/
            if (!FnameRegex.test(userInputs.Fname)) {
                errors.Fname = "Invalid First Name"
            }
        }
        if (userInputs.Lname === "") {
            errors.Lname = "Last Name is required"
        } else {
            const LnameRegex = /^[a-zA-Z].\D*$/
            if (!LnameRegex.test(userInputs.Lname)) {
                errors.Lname = "Invalid Last Name"
            }
        }
        if (userInputs.address === "") {
            errors.address = "Address is required"
        }
        if (userInputs.contact === "") {
            errors.contact = "Contact Number is required"
        } else {
            const ContactRegex = /^[09]{2}+[0-9]{9}$/
            if (!ContactRegex.test(userInputs.contact)) {
                errors.contact = "Invalid Contact Number Format"
            }
        }

    }
    return (
        <>
            <div className="flex items-center justify-center bg-aqua text-lightgray">
                <div className="relative rounded-lg bg-darkgray">
                    <div className="px-8 py-6 w-80">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                            Create a new account
                        </h3>
                        <form className="space-y-6" onSubmit={handleFormSubmit}>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your email
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                    placeholder="email"
                                />
                                <span className='absolute text-aqua text-[0.5rem]'>{formErrors.email}</span>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your First Name
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="text"
                                    name="Fname"
                                    id="Fname"
                                    placeholder="First Name"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your Last Name
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="text"
                                    name="Lname"
                                    id="Lname"
                                    placeholder="Last Name"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your address
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="address"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your contact number
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="number"
                                    name="contact"
                                    id="contact"
                                    placeholder="09*********"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your birthday
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="date"
                                    name="birthday"
                                    id="birthday"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your gender
                                </label>
                                <select
                                    onChange={handleOnChange}
                                    type="text"
                                    name="gender"
                                    id="gender"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray text-darkgray"
                                    required>
                                    <option value="" selected disabled>Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-1 text-sm font-medium text-lightgray">
                                    Your password
                                </label>
                                <input
                                    onChange={handleOnChange}
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="**********"
                                    className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                />
                            </div>
                            <div className='flex justify-between text-darkgray'>
                                <button
                                    type='submit'
                                    className='p-2 font-semibold underline rounded-lg bg-lightgray text-decoration-line:'>Create Account</button>
                                <Link to="/">
                                    <button className='p-2 font-semibold underline rounded-lg bg-lightgray text-decoration-line:'>Cancel</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
