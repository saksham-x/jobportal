import React from 'react'
import Navbar from '../components/Navbar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from '../components/Footer';


const AboutUs = () => {
    return (
        <>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div className="container mx-auto px-4 py-12 mb-5">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold">About Us</h1>
                    <p className="mt-4 text-lg">Discover more about JOBSATHI and our mission.</p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold">Our Mission</h2>
                    <p className="mt-4">
                        At JOBSATHI, we aim to bridge the gap between job seekers and employers in the IT field in Nepal. Our mission is to create a platform that facilitates the search for internships and jobs, empowering individuals to build successful careers while providing companies with access to talented professionals.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold">Our History</h2>
                    <p className="mt-4">
                        JOBSATHI was founded in 2020 by a group of tech enthusiasts who identified a need for a dedicated platform to connect IT professionals with employers in Nepal. Over the years, we have grown significantly, helping thousands of individuals find their dream jobs and internships.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold">Our Services</h2>
                    <ul className="mt-4 list-disc list-inside">
                        <li>Internship opportunities in IT</li>
                        <li>Job listings in the IT field</li>
                        <li>Career advice and resources</li>
                        <li>Company profiles and reviews</li>
                    </ul>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold">Testimonials</h2>
                    <div className="mt-4 space-y-4">
                        <blockquote className="p-4 bg-gray-100 rounded-lg shadow">
                            <p className="italic">"JOBSATHI helped me find the perfect internship that kickstarted my career in IT. I highly recommend their platform to anyone looking for opportunities in this field."</p>
                            <footer className="mt-2 text-sm">- Suman, Kathmandu</footer>
                        </blockquote>
                        <blockquote className="p-4 bg-gray-100 rounded-lg shadow">
                            <p className="italic">"Thanks to JOBSATHI, our company was able to find talented developers who have become valuable members of our team."</p>
                            <footer className="mt-2 text-sm">- Tech Solutions, Lalitpur</footer>
                        </blockquote>
                    </div>
                </div>

                <div className="mb-12">
                    <h2 className="text-2xl font-semibold">Contact Us</h2>
                    <p className="mt-4">Feel free to reach out to us at:</p>
                    <ul className="mt-2">
                        <li>Email: contact@jobsathi.com</li>
                        <li>Phone: +977-123456789</li>
                        <li>Address: 123 IT Park, Kathmandu, Nepal</li>
                    </ul>
                </div>

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
            <Footer />
        </>
    )
}

export default AboutUs
