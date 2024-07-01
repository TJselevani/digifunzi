import { Routes, Route, useLocation } from "react-router-dom";
import EventPage from "../event/index";
import RegistrationPage from '../registration/signUp';
import PaymentPage from '../payment/index';
import ConfirmationPage from '../confirmation/index'
import NavBar from '../../components/layouts/nav';
import React, { useState, useEffect } from 'react';

const GetStarted = () => {
    const [ContentTitle, setContentTitle] = useState('');
    const location = useLocation();

    useEffect(() => {
        // Map paths to titles
        const pathTitleMap = {
            "/api": 'Get Started',
            "/api/event": 'Upcoming Event',
            "/api/register": 'User Registration',
            "/api/payment": 'Payment',
            "/api/confirmation": 'Confirmation'
        };

        // Set the content title based on the current path
        console.log(location.pathname);
        setContentTitle(pathTitleMap[location.pathname]);
    }, [location.pathname]);

    return ( 
        <div>
        <div className="mid" >
            <h1 style={{margin: '30px 0', fontSize: '48px'}}> { ContentTitle }</h1> 
         </div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<EventPage/>}/>
            <Route path="/event" element={<EventPage/>}/>
            <Route path="/register" element={<RegistrationPage/>}/>
            <Route path="/payment" element={<PaymentPage/>}/>
            <Route path="/confirmation" element={<ConfirmationPage/>}/>
        </Routes> 
        </div>
     );
}
 
export default GetStarted;