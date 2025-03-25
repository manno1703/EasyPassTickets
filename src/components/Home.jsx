import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ImageCarousel from './Carousel';

const Home = () => {
  return (
    <div className="text-center mt-5">
      <ImageCarousel/>
        <h1>Welcome to EasyPass Tickets</h1>
        <p className="mt-4">Your hassle-free event ticketing solution.</p>

        <div className="mt-4">
            <Link to="/Getevents" className="btn btn-primary m-2">View Events</Link>
            <Link to="/Gettickets" className="btn btn-secondary m-2">Check My Tickets</Link>
        </div>
      <Footer/>
    </div>
  )
}

export default Home
