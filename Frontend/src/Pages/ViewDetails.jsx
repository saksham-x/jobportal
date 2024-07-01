import React from 'react'
import CompanyDetails from '../jobdetailscomponents/CompanyDetails'
import AboutCompany from '../jobdetailscomponents/AboutCompany'
import JobDetail from '../jobdetailscomponents/JobDetail'
import JobSpecifications from '../jobdetailscomponents/JobSpecifications'
import JobDescription from '../jobdetailscomponents/JobDescription'

const ViewDetails = () => {
  return (
    <>

      <CompanyDetails />
      <AboutCompany />
      <JobDetail />
      <JobSpecifications />
      <JobDescription />
      <div className='flex items-center justify-center mt-6 mb-6'>
        <button className="mr-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md ">
          Apply Now
        </button>
      </div>
    </>
  )
}

export default ViewDetails
