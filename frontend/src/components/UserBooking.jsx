import React from 'react'

const UserBooking = () => {
    return (

        <div className='h-screen bg-sky-800'>
            <h2 className='flex justify-center text-white'>Book a Schedule</h2>
            <form id="inputForm" className="flex flex-col pt-10 bg-sky-600">
                <div>
                    <label htmlFor="BookDate" className='pl-2 text-white'>Book Date</label>
                    <input
                        type="date"
                        id="BookDate"
                        name="BookDate"
                        className='ml-[35px]'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="PatientName" className='pl-2 text-white'>Patient Name</label>
                    <input type="text" id="PatientName" name="PatientName"
                        className='ml-[12px]'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="Age" className='pl-2 text-white'>Age</label>
                    <input
                        type="number"
                        id="Age"
                        name="Age"
                        className='ml-[78px]'
                    />
                </div>
                <br />
                <div>
                    <label htmlFor="Service" className='pl-2 text-white'>Service</label>
                    <select
                        type="text"
                        id="Service"
                        name="Service"
                        className='ml-[56px]'
                    >
                        <option value="toothExtract">Tooth Extract</option>
                        <option value="Pasta">Pasta</option>
                        <option value="rootCanal">Root Canal</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="braces">Braces</option>
                    </select>
                </div>
                <br />
                <div className='pb-4'>
                    <label htmlFor="Time" className='pl-2 text-white'>Time</label>
                    <input
                        type="time"
                        id="Time"
                        name="Time"
                        className='ml-[72px]'
                    />
                </div>
                <span className='flex justify-center w-full pb-4'>
                    <button className='text-white '>Book Now</button>
                    <button className='pl-20 text-white'>Cancel</button>
                </span>
            </form>
        </div>
    );
};

export default UserBooking;