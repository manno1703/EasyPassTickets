import React from 'react';
import Footer from './Footer';

const Aboutus = () => {
  return (
    <>
      <div className="container-fluid py-3 min-vh-100 position-relative overflow-hidden">
        {/* Video Background */}
        <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src="/images/aboutvideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div> {/* This is the new overlay */}
      </div>

        {/* Foreground Content */}
        <div className="container position-relative text-white fade-in-content">
          <h1 className="display-4 text-center mb-4">About Us</h1>

          <div className="row align-items-center">
            <div className="col-md-6 text-center">
              <img src="images/epass.jpg" alt="EasyPass Tickets" className="img-fluid rounded shadow-lg" />
            </div>
            <div className="col-md-6">
              <p className="lead">
                EasyPass Tickets is your go-to platform for seamless event ticketing. 
                We make it easy to browse, purchase, and manage your event tickets with just a few clicks.
              </p>
              <p>
                Whether you're hosting an event or attending one, EasyPass Tickets ensures a smooth experience. 
                Stay connected, enjoy the best events, and never miss out!
              </p>
              <h3 className="text-success mt-4">Over 300+ Event Tickets Sold!</h3>
              <a href="/Getevents" className="btn btn-primary mt-3">Browse Events</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
