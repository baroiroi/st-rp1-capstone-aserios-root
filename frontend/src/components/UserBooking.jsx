import { useEffect, useState } from 'react'
import { services } from '../utils/data';

const UserBooking = () => {
    const [user, setUser] = useState(null)
    const [servicesList, setServices] = useState(services)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'))
            setUser(user)
            // setServices(services)
    } , [])

    const handleOnChangeQuantity = (e) => {
        e.preventDefault()
        const { value } = e.target
        let ParsedValue=parseInt(value)
        console.log('ParsedValue', ParsedValue)
        if (ParsedValue < 0) {
        alert("Please don't input negative numbers.");
        } else if (ParsedValue === 0) {
        alert("Please don't input zero.");
        }
        // value >= 0 && alert("Please don't input negative or zero") 
    }

    if (user === null) {
        return <div>Loading Buddy...</div>
    }

    console.log(servicesList)
    return (
        <>
            <div className='flex items-center justify-center h-screen pt-12 bg-aqua'>
                <form id="inputForm" className="flex flex-col gap-4 pt-8 items-center h-[30rem] w-[20rem] bg-darkgray rounded-xl px-6 font-sans text-lightgray shadow-md">
                    <h1 className='text-[1.5rem] mb-2'>Book a Schedule</h1>
                    <div className='flex justify-between w-full'>
                        <label htmlFor="PatientName" className='text-lightgray'>Customer:</label>
                        <input type="text" id="PatientName" name="PatientName"
                            className='rounded-sm text-darkgray' readOnly defaultValue={user.name}
                        />
                    </div>
                    <div className='flex justify-between w-full'>
                        <label htmlFor="BookDate" className='text-lightgray'>Book Date:</label>
                        <input
                            type="date"
                            id="BookDate"
                            name="BookDate"
                            className='rounded-sm text-darkgray'
                        />
                    </div>
                    <div className='flex justify-between w-full'>
                        <label htmlFor="Time" className='text-lightgray'>Time:</label>
                        <input
                            type="time"
                            id="Time"
                            name="Time"
                            className='ml-[72px] text-darkgray rounded-sm'
                        />
                    </div>

                    <div id="availedService" className="flex flex-col items-center justify-center w-full gap-4 px-4 py-4 font-sans rounded-md bg-lightgray text-darkgray">
                        <div className='flex justify-between w-full'>
                            <label htmlFor="PatientName" className='text-darkgray'>Patient:</label>
                            <input type="text" id="PatientName" name="PatientName"
                                className='rounded-sm shadow-md text-darkgray'/>
                        </div>  

                        <div className='flex justify-between w-full gap-4'>
                            <label htmlFor="Service" className='text-darkgray'>Service:</label>
                            <select
                                type="text"
                                id="Service"
                                name="Service"
                                className='rounded-sm shadow-md text-darkgray'
                            >
                                {servicesList && servicesList.map((service, index) => (
                                    <option key={index} value={service.service}>{service.service}</option>
                                ))}
                            </select>
                        </div>
                        
                        <div className='flex justify-between w-full'>
                            <label htmlFor="quantity" className='text-darkgray'>Quantity:</label>
                            <input type="number" id="quantity" name="quantity" onChange={handleOnChangeQuantity}
                                className='w-[4rem] rounded-sm shadow-md text-darkgray'/>
                        </div>
                          
                        <div className='flex justify-between w-full'>
                            <label htmlFor="total" className='text-darkgray'>Total:</label>
                            <span className='font-semibold shadow-md'>P 100.00</span>
                            {/* <input type="number" id="total" name="total"
                                className='w-[8rem] rounded-sm shadow-md text-darkgray'/> */}
                        </div>  
                    </div>

                    <div className='flex justify-center w-full gap-3 mt-1 mb-4 font-semibold text-darkgray'>
                        <button type='submit' className='w-3/4 p-2 rounded-md bg-[#30d6d6] text-[#000] shadow-lg'>Book Now</button>
                        <button type='button' className='w-1/4 p-2 rounded-md bg-[#535658] text-[#FFFFFF] shadow-lg'>Clear</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UserBooking;