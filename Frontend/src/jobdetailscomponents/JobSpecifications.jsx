import React from 'react'

const JobSpecifications = () => {
    return (
        <>
            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Job Specification</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <p>Qualification Required</p>
                        <p>Not Available</p>

                        <p>Key Skills</p>
                        <ul>
                            <li>Creativity</li>
                            <li>Analytics</li>
                            <li>Content curation</li>
                            <li>Customer service</li>
                        </ul>

                        <p>Preferred Age Range</p>
                        <p>Not Available</p>

                        <p>Preferred Gender</p>
                        <span className="badge badge-secondary">Female</span>

                        <p>Cover Letter</p>
                        <span className="badge badge-accent">Required </span>

                        <p>Functional Area</p>
                        <p>Your Functional Area</p>


                    </div>
                </div>
            </div>

        </>
    )
}

export default JobSpecifications
