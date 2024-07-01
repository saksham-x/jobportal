import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './components/Login'
import Signup from './components/Signup'
import Homepage from './Pages/Homepage'
import ViewDetails from './Pages/ViewDetails'
import Pricing from './Pages/Pricing'
import Events from './Pages/Events'
import AboutUs from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

export default function MyRoute() {
    return (
        <Router>
            <Routes>

                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/viewdetails' element={<ViewDetails />} />
                <Route path='/pricing' element={<Pricing />} />
                <Route path='/events' element={<Events />} />
                <Route path='/aboutus' element={<AboutUs />} />
                <Route path='/contactus' element={<ContactUs />} />


            </Routes>

        </Router>
    )


}
