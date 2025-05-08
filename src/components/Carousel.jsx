//carousel
import { Link } from "react-router-dom";

const ImageCarousel = () => {
return (
<section className="row">
    <div className="col-md-1"></div>
    <div className="col-md-10">
        <div className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000" id="mycarousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="images/SportEvent.jpg" alt="" className="d-block w-100" height="300px"/>

                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Enjoy Live Sports</h5>
                    <p>Join other sport lovers and enjoy your favourite sports.</p>
                </div>
                
                </div>

                <div className="carousel-item">
                <img src="images/MusicCarousel.jpg" alt="" className="d-block w-100" height="300px"/>

                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Experience Live Music</h5>
                    <p>Join top artists and music lovers in unforgettable festivals.</p>
                </div>
                </div>

                <div className="carousel-item">
                <img src="images/fashionEvent.avif" alt="" className="d-block w-100" height="300px"/>

                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Latest Trends</h5>
                    <p>Attend the best fashion shows and get the new trends early.</p>
                </div>
                </div>

                <div className="carousel-item">
                <img src="images/techEvent.avif" alt="" className="d-block w-100" height="300px"/>

                <div className="carousel-caption d-none d-md-block bg-dark bg-opacity-50 rounded p-2">
                    <h5>Tech Conferences</h5>
                    <p>Stay updated with the latest in innovation and networking.</p>
                </div>
                </div>
            </div>

        <Link to="#mycarousel" className="carousel-control-prev" data-bs-slide="prev">
        <span className="carousel-control-prev-icon"></span>
        </Link >


        <Link to="#mycarousel" className="carousel-control-next" data-bs-slide="next">
        <span className="carousel-control-next-icon"></span>
        </Link >

       
        </div>
    </div>
    <div className="col-md-1"></div>
</section>
);
}
 

export default ImageCarousel;