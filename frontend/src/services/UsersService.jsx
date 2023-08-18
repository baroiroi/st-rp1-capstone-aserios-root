import React from 'react'

const App = () => {
    return (
        <div className="w-full h-screen bg-slate-400">
            <div className="blue-part w-full h-[6.5rem] bg-slate-900 flex items-center justify-between p-4">
                <div className="circle bg-white w-[4.5rem] h-[4.5rem] rounded-full flex items-center justify-center">
                    pic
                </div>
                <div className="w-[16rem] h-[4.5rem] ">
                    <div className="font-bold text-2xl h-[2rem] tracking-[0.1rem] text-white">
                        Dental Smile
                    </div>
                    <div className="flex justify-between justify-items-center">
                        <div className="font-bold text-2xl h-[3rem] tracking-[0.1rem] flex items-center">
                            <input
                                type="text"
                                placeholder="Lost Something?"
                                name="search"
                                className="p-2 text-[1rem] h-[2.5rem] w-[10rem]"
                            />
                        </div>
                        <select name="lang" id="lang" className="h-[2.5rem]">
                            <option value="english" defaultValue="English">
                                English
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
