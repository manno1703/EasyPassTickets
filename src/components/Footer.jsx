import Card from "./Card";

const Footer = () => {
  return (
    <div className="footer mt-5 pt-4 bg-dark text-light">
      <div className="container">
        <div className="row text-center text-md-start">
          {/* About Us */}
          <div className="col-md-4 mb-4">
            <h5 className="text-info">About Us</h5>
            <p>
              EasyPass Tickets is your go-to platform for seamless event ticketing.
              Browse, purchase, and manage your tickets effortlessly.
            </p>
            <p>
              Whether you're hosting or attending an event, we ensure a smooth and connected experience.
            </p>
          </div>

          {/* Feedback */}
          <div className="col-md-4 mb-4">
            <h5 className="text-info text-center mb-3">Send Feedback</h5>
            <Card />
          </div>

          {/* Connect With Us */}
          <div className="col-md-4 mb-4 text-center">
            <h5 className="text-info mb-3">Connect With Us</h5>
            <div className="d-flex justify-content-center gap-3 mb-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src="images/facebook2.png" alt="Facebook" className="social-icon" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src="images/instagram2.png" alt="Instagram" className="social-icon" />
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                <img src="images/twitterx.png" alt="twitterx" className="social-icon" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                <img src="images/tiktok.png" alt="tiktok" className="social-icon" />
              </a>
            </div>
            <p className="text-light small">Follow us for updates and exclusive discounts on events!</p>
          </div>
        </div>
      </div>

      <footer className="bg-secondary text-white text-center py-3 mt-4">
        <h6 className="mb-0">Developed by Emmanuel Kinda &copy; 2025. All rights reserved.</h6>
      </footer>
    </div>
  );
};

export default Footer;
