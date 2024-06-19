import { Routes, Route } from "react-router-dom";
import EventPage from "../event/index";
import RegistrationPage from '../registration/signUp';
import PaymentPage from '../payment/mobile-money';
import ConfirmationPage from '../confirmation/index'
import NavBar from '../../components/layouts/nav';

const GetStarted = () => {
    return ( 
        <div>
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