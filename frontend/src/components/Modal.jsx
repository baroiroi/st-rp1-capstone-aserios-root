import React from 'react'

export const Modal = () => {
    return (
        <>
            <div className="z-50 flex items-center justify-center bg-darkgray text-lightgray">
                <div
                    id="authentication-modal"
                    tabIndex="-1"
                    aria-hidden="true"
                    className="w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative w-full max-w-md max-h-full">
                        <div className="relative rounded-lg shadow bg-aqua dark:bg-gray-700">
                            <button
                                type="button"
                                className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="authentication-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="px-6 py-6 lg:px-8">
                                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                                    Create a new account
                                </h3>
                                <form className="space-y-6" action="#">
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            placeholder="name@company.com"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your address
                                        </label>
                                        <input
                                            type="text"
                                            name="address"
                                            id="address"
                                            placeholder="address"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your contact number
                                        </label>
                                        <input
                                            type="number"
                                            name="contact"
                                            id="contact"
                                            placeholder="09*********"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your birthday*
                                        </label>
                                        <input
                                            type="date"
                                            name="birthday"
                                            id="birthday"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your gender*
                                        </label>
                                        <select
                                            type="text"
                                            name="gender"
                                            id="gender"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray text-darkgray"
                                            required>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block mb-1 text-sm font-medium text-lightgray">
                                            Your password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="**********"
                                            className="text-sm rounded-lg block w-full p-2.5 bg-lightgray border border-darkgray placeholder-darkgray text-darkgray"
                                            required
                                        />
                                    </div>
                                    <div className='flex justify-between text-lightgray'>
                                        <button className='p-2 rounded-lg bg-darkgray'>Create Account</button>
                                        <button className='p-2 rounded-lg bg-darkgray'>Cancel</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
