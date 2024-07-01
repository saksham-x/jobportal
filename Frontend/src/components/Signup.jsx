import React from 'react'
import { FaGoogle, FaGithub } from 'react-icons/fa';
const Signup = () => {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
                    <h3 className="text-2xl font-bold text-center">Signup form</h3>
                    <form action="">
                        <div className="mt-4">
                            <label className="block" htmlFor="email">Email address</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="email"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="password"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Confirm Password</label>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="password"
                            />
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="age">Age</label>
                            <input
                                type="number"
                                placeholder="Age"
                                className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                                id="age"
                                min="16"
                                max="75"
                                required

                            />
                        </div>

                        <div className="flex items-baseline justify-between mt-4">

                            <button type='submit' className="btn btn-outline bg-zinc-600 text-white">Register</button>


                            <a href="/login" className="text-blue-500 hover:underline ml-5">
                                Already have account? Login
                            </a>
                        </div>
                        <div className="mt-4">
                            <p className="text-center">Or continue with</p>
                            <div className="flex justify-center space-x-4 mt-2">
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center">
                                    <FaGoogle className="mr-2" /> Google {/* Add Google icon */}
                                </button>
                                <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 flex items-center">
                                    <FaGithub className="mr-2" /> GitHub {/* Add GitHub icon */}
                                </button>
                            </div>
                        </div>
                        <p className="mt-4 text-center">
                            <a href="/" className="text-blue-500 hover:underline">Go Back to HomePage</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signup
