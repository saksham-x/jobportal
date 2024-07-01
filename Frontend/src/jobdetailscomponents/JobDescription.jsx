import React from 'react'

const JobDescription = () => {
    return (
        <>

            <div className="card w-full bg-base-100 shadow-xl mt-5">
                <div className="card-body">
                    <h2 className="card-title">Job Description</h2>
                    <p><strong>Title:</strong> Social Media Manager</p>
                    <ul>
                        <li>Create development plans.</li>
                        <li>Manage social media campaigns.</li>
                        <li>Design social media content.</li>
                        <li>Monitor social media performance.</li>
                        <li>Write social media content.</li>
                        <li>Manage social media accounts.</li>
                        <li>Manage social media platforms.</li>
                        {/* Add other core responsibilities */}
                    </ul>
                    {/* Add other sections like Strategic Development */}
                    <p><strong>Requirements:</strong></p>
                    <ul>
                        {/* Add list of requirements */}
                        <li>Strong written and verbal communication skills</li>
                        <li>Must be fluent in English and Nepali</li>
                        <li>Must be able to work in a fast-paced environment</li>
                    </ul>

                </div>
            </div>
        </>
    )
}

export default JobDescription
