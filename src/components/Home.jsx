import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import ImageCarousel from './Carousel';

const Home = () => {
  return (
    <>
      <div className="container text-center flex-grow-1 d-flex flex-column justify-content-center">
        <ImageCarousel className="mb-4" />
        <h1 className="display-4 mb-3 bounce-heading">Welcome to EasyPass Tickets</h1>
        <p className="lead">Your hassle-free event ticketing solution.</p>

        <div className="mt-4">
          <Link to="/Getevents" className="btn btn-outline-primary btn-lg m-2">
            View Events
          </Link>
          <Link to="/Gettickets" className="btn btn-outline-secondary btn-lg m-2">
            Check My Tickets
          </Link>
        </div>
      </div>

      {/* Sticky footer at bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </>
  );
};

export default Home;
