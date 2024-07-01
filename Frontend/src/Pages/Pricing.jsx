import React from 'react'
import BillCard from '../components/billing/BillCard'
import CurrentPlan from '../components/billing/CurrentPlan'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Pricing = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center min-h-screen '>
                <div className='flex flex-col md:flex-row space-y-5  md:space-y-0 md:space-x-5'>
                    <CurrentPlan />
                    <BillCard />
                </div>
                <div> <Link to={'/'}>
                    <button className="btn btn-primary mt-5">GO Back to Homepage</button>
                </Link>
                </div>
            </div>

        </>
    )
}

export default Pricing
