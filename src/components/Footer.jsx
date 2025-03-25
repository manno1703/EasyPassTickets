const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p>EasyPass Tickets is your go-to platform for seamless event ticketing. We make it easy to browse, purchase, and manage your event tickets with just a few clicks.</p>
                <p>Whether you're hosting an event or attending one, EasyPass Tickets ensures a smooth experience. Stay connected, enjoy the best events, and never miss out!</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/facebook.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/instagram.png" alt="" className="socialspictures"/>
                </a>
                <br/><br/>
                <p className="text-dark">Visit our social media pages to get updates on the latest events and discounts!</p>
            </div>
        </section>
        <footer className="bg-dark text-white text-center p-2 mt-4 py-3 bootom-footer">
                <h5>Developed by Emmanuel Kinda &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;