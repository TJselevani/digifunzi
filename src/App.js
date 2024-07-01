import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/layouts/footer';
import './styles/App.css';
import Navbar from './components/layouts/Navbar';
import HomePage from './pages/about/index';
import AboutPage from './pages/about/index';
import CoursesPage from './pages/courses/index';
import ContactPage from './pages/contact/index'
import EventPage from './pages/event/index';
import PricingPage from  './pages/pricing/index';
import PlaceHolder from './components/placeholder';
import SignUpPage from './pages/registration/signUp';
import SignInPage from './pages/registration/SignIn';
import GetStarted from './pages/get-started/index';
import Ticket from './components/ticket';
import Message from './components/layouts/success';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signUp" element={<SignUpPage />} />
          <Route exact path="/signIn" element={<SignInPage />} />
          <Route path="/events" element={ <EventPage/> } />
          <Route path="/about" element={ <AboutPage/> }/>
          <Route path="/courses"element={ <CoursesPage/> }/>
          <Route path="/contact"element={ <ContactPage/> }/>
          <Route path="/pricing"element={ <PricingPage/> }/>
          <Route path="/api/*"element={ <GetStarted/> }/>
          <Route path="/ticket"element={ <Ticket/> }/>
          <Route path="/message"element={ <Message/> }/>
          <Route path="*"element={ <PlaceHolder/> }/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
