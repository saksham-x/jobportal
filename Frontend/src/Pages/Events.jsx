import React from 'react'
import Navbar from '../components/Navbar'
import EventCard from '../components/events/EventCard'
import Footer from '../components/Footer'

const Events = () => {
    return (
        <>
            <div className='shadow-lg'>
                <Navbar />
            </div>
            <div>
                <EventCard />
            </div>
            <Footer />
        </>
    )
}

export default Events
