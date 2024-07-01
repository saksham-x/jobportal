import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs = () => {
    return (
        <>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div className="container mx-auto px-4 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="mt-4 text-lg">We would love to hear from you! Please fill out the form below or use the contact information provided.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-semibold">Get In Touch</h2>
                        <form className="mt-4">
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="input input-bordered w-full"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="textarea textarea-bordered w-full"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button className="btn btn-primary" type="submit">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <strong>Email:</strong> contact@jobsathi.com
                            </li>
                            <li>
                                <strong>Phone:</strong> +977-123456789
                            </li>
                            <li>
                                <strong>Address:</strong> 123 IT Park, Kathmandu, Nepal
                            </li>
                        </ul>

                        <div className="text-center mt-12">
                            <h2 className="text-2xl font-semibold">Follow Us</h2>
                            <div className="flex justify-center mt-4 space-x-4">
                                <a href="#" className="text-blue-500">
                                    <i className="fab fa-facebook fa-2x"></i>
                                </a>
                                <a href="#" className="text-blue-400">
                                    <i className="fab fa-twitter fa-2x"></i>
                                </a>
                                <a href="#" className="text-pink-500">
                                    <i className="fab fa-instagram fa-2x"></i>
                                </a>
                                <a href="#" className="text-blue-700">
                                    <i className="fab fa-linkedin fa-2x"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
