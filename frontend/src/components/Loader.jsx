import React from 'react'

export const Loader = () => {
    return (

        <div className='flex items-center justify-center w-full h-screen bg-aqua'>
            <div className='flex items-center justify-center rounded-full opacity-0.5 bg-gradient-to-tr from-aqua to-lightgray h-14 w-14 animate-spin'>
                <div className='rounded-full bg-aqua h-9 w-9'></div>
            </div>
        </div>
    )
}
