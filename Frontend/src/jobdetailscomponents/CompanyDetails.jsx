import React from 'react'

const CompanyDetails = () => {
    return (
        <>
            <div className="bg-pink-100 p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-between">
                    <div className="flex">
                        <div className="flex items-center">
                            <div className="bg-pink-500 text-white rounded-full p-2 mr-2">
                                R
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">True Wellness Pvt Ltd.</h2>
                                <p className="text-sm text-gray-600">Wellness | Fitness | Sports | Beauty</p>
                            </div>
                        </div>

                    </div>
                    <div className="mt-4">
                        <p className="text-sm text-gray-700">
                            Bagmati, Kathmandu, Nepal
                        </p>
                        <p className="text-sm text-gray-700">
                            Phone: +977 9841353462
                        </p>
                        <p className="text-sm text-gray-700">
                            Email: info@truewellness.com
                        </p>
                        <p className="text-sm text-gray-700">
                            Website: <a href="https://www.truewellness.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.truewellness.com</a>
                        </p>
                    </div>
                </div>
                <div className="mt-4">
                    <button className="btn btn-primary mr-2">
                        Visit Official Website
                    </button>
                    <button className="btn btn-secondary">
                        Contact Us
                    </button>
                </div>
            </div>
        </>
    )
}

export default CompanyDetails
