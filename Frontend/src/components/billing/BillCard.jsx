import React from 'react'

const BillCard = () => {
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">JOBSATHI Premium</h2>
                    <p>RS 49/month</p>
                    <div className="badge badge-outline">Your premium plan</div>
                    <ul className="list-none mt-4 space-y-2">
                        <li>✓ Featured job listings</li>
                        <li>✓ Priority support</li>
                        <li>✓ Access to advanced analytics</li>
                        <li>✓ Unlimited resume views</li>
                    </ul>
                    <div className="card-actions justify-end">
                        <a href="/upgrade" className="link link-primary">Upgrade now</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BillCard
