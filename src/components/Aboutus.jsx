import React from 'react'
import Footer from './Footer'

const Aboutus = () => {
  return (
    <div className="row">
    <h1 className="display-4 text-primary">About Us</h1>

    <div className="col-md-6">
        <div className="card shadow p-4 m-3 about-image">
            <img src="images/epass.jpg" alt="epass" />
        </div>
    </div>

    <div className="col-md-6 text-justify-start p-5 mt-5 ">
      <p>
        EasyPass Tickets is your go-to platform for seamless event ticketing. 
        We make it easy to browse, purchase, and manage your event tickets with just a few clicks.
      </p>
      <p>
        Whether you're hosting an event or attending one, EasyPass Tickets ensures a smooth experience. 
        Stay connected, enjoy the best events, and never miss out!
      </p>
    <br/>
      <h3>Over 300+ Event tickets sold!</h3>
    </div>
    </div>
    
  )
}

export default Aboutus
