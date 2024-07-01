import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>

            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={1} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>HOME</a></li>
                            <li><a href='/events'>EVENTS</a></li>
                            <li><a href='/aboutus'>ABOUT US</a></li>
                            <Link to={'/pricing'}>  <li><a>PRICING</a></li></Link>
                            <li><a href='/contactus'>CONTACT US</a></li>
                            <div className="form-control lg:hidden">
                                <input type="text" placeholder="Search ..." className="input input-bordered  w-36" />
                            </div>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost text-xl">JOB SATHI</a>

                </div>
                <div className="navbar-center hidden lg:flex flex-col">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>HOME</a></li>
                        <li><a href='/events'>EVENTS</a></li>
                        <Link to={'/pricing'}>  <li><a>PRICING</a></li></Link>

                        <li><a href='/aboutus'>ABOUT US</a></li>
                        <li><a href='/contactus'>CONTACT US</a></li>
                    </ul>
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-auto " />
                    </div>
                </div>

                <div className="navbar-end">
                    <div className='mr-2'>
                        <button className="btn btn-active">EMPLOYER ZONE</button>
                    </div>
                    <div className='mr-2'>
                        <button className="btn btn-active"><Link to={'/login'} target='_blank'> Login</Link></button>
                    </div>

                    <div className="dropdown dropdown-end">

                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:mr-5">
                            <div className="w-10 rounded-full ">
                                <img
                                    alt="Tailwind CSS Navbar component"
                                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a>Theme</a></li>
                            <li><a>Logout</a></li>
                            <li> <Link to={'/login'} target='_blank'> Login</Link></li>


                        </ul>

                    </div>
                </div>
            </div>



        </>
    )
}

export default Navbar
