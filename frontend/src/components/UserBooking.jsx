import React from 'react'

const UserBooking = () => {
    return (
        <>
            <div className='flex items-center justify-center h-screen bg-aqua'>
                <form id="inputForm" className="flex flex-col gap-4 items-center h-[21rem] w-[20rem] bg-darkgray rounded-xl pt-4 px-1 font-sans text-lightgray">
                    <h1 className='text-[1.5rem]'>Book a Schedule</h1>
                    <div className='flex w-full gap-3'>
                        <label htmlFor="BookDate" className='pl-2 text-lightgray'>Book Date</label>
                        <input
                            type="date"
                            id="BookDate"
                            name="BookDate"
                            className='ml-[35px] text-darkgray'
                        />
                    </div>
                    <div className='flex w-full gap-3'>
                        <label htmlFor="PatientName" className='pl-2 text-lightgray'>Patient Name</label>
                        <input type="text" id="PatientName" name="PatientName"
                            className='ml-[12px] text-darkgray'
                        />
                    </div>
                    <div className='flex w-full gap-3'>
                        <label htmlFor="Age" className='pl-2 text-lightgray'>Age</label>
                        <input
                            type="number"
                            id="Age"
                            name="Age"
                            className='ml-[78px] text-darkgray'
                        />
                    </div>
                    <div className='flex w-full gap-3'>
                        <label htmlFor="Service" className='pl-2 text-lightgray'>Service</label>
                        <select
                            type="text"
                            id="Service"
                            name="Service"
                            className='ml-[56px] text-darkgray'
                        >
                            <option value="toothExtract">Tooth Extract</option>
                            <option value="Pasta">Pasta</option>
                            <option value="rootCanal">Root Canal</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="braces">Braces</option>
                        </select>
                    </div>
                    <div className='flex w-full gap-3'>
                        <label htmlFor="Time" className='pl-2 text-lightgray'>Time</label>
                        <input
                            type="time"
                            id="Time"
                            name="Time"
                            className='ml-[72px] text-darkgray'
                        />
                    </div>
                    <div className='flex justify-center w-full gap-3 pb-4 mt-1 font-semibold underline text-darkgray text-decoration-line:'>
                        <button className='p-2 rounded-md bg-lightgray'>Book Now</button>
                        <button className='p-2 rounded-md bg-lightgray'>Cancel</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserBooking;