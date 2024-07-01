import React from 'react'

const EventCard = () => {
    return (
        <>
            <div className='flex flex-col space-y-5 sm:space-y-5 justify-center items-center min-h-screen'>
                <div className='md:flex md:flex-row  space-y-5 md:space-y-0 md:space-x-5'>


                    <div className="max-w-md mx-auto p-4">
                        {/* Card container */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                            {/* Event image */}
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5OzNJPX4D-IiN_2SVkoN2JDyxnTEv22tVw&s" alt="Hackathon" className="w-full h-48 object-cover" />
                            {/* Event details */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold mb-2">Hackathon Event</h2>
                                <p className="text-gray-600 text-sm mb-4">
                                    Date: June 15, 2024<br />
                                    Time: 9:00 AM - 5:00 PM<br />
                                    Address: 123 Main St, City<br />
                                    Organizer: <a href="https://hackathon-organizer.com" className="text-blue-500 hover:underline">Hackathon Organizer</a>
                                </p>
                                {/* View details button */}
                                <a href="#" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card glass w-96">
                        <figure>
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr5OzNJPX4D-IiN_2SVkoN2JDyxnTEv22tVw&s"
                                alt="car!" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">Life hack</h2>
                            <p>How to park your car at your garage?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Learn now!</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventCard
