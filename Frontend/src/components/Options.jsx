import React from 'react'

const Options = () => {
    return (
        <>



            <div className="nav grid grid-cols-1 sm:grid-cols-3 gap-4 w-full  font-medium font-sans font-12 shadow-lg pb-1">
                <button>
                    <select className="select select-secondary w-full max-w-xs bg-pink-200  hover:bg-pink-600 h-12 hover:text-white">
                        <option disabled selected>BASED ON STACK</option>
                        <option>Java</option>
                        <option>Go</option>
                        <option>C</option>
                        <option>C#</option>
                        <option>C++</option>
                        <option>Rust</option>
                        <option>JavaScript</option>
                        <option>Python</option>
                    </select>
                </button>
                <button className=" mx-auto bg-neutral-300 text-black-600 w-full max-w-xs flex items-center justify-center space-x-2  hover:bg-neutral-600 hover:text-white  h-12 ">

                    <span className="btm-nav-label">BASED ON LOCATION</span>
                </button>
                <button className="mx-auto border-blue-600 bg-blue-300 text-black-600 w-full max-w-xs flex items-center justify-center space-x-2 hover:bg-blue-600 h-12">

                    <span className="btm-nav-label">BASED ON COMPANIES</span>
                </button>

            </div>

        </>
    )
}

export default Options
