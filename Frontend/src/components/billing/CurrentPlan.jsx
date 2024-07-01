import React from 'react'

const CurrentPlan = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">JOBSATHI Free Plan</h2>
                    <p>FREE</p>
                    <div className="badge badge-outline">Your Current Plan</div>
                    <ul className="list-none mt-4 space-y-2">
                        <li>Featured job listings</li>
                        <li> No priority support</li>
                        <li>Limited Access to advanced analytics</li>
                        <li> Limited resume views</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <a href="/upgrade" className="link link-primary">Upgrade to premium now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CurrentPlan
