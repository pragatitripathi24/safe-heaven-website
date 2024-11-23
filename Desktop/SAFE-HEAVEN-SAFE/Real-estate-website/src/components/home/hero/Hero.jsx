import React from "react";
import Heading from "../../common/Heading";
import "./hero.css";
import im1 from "../../../images/LandingPage/im2.jpg";
import im2 from "../../../images/LandingPage/im1.jpg";
import im3 from "../../../images/LandingPage/im3.jpg";
import Marquee from "../Marquee/Marquee";

const Hero = () => {
  return (
 <>
 
    <section className='hero'>
      <div id="heroCarousel" className="carousel slide" data-ride="carousel" data-interval="2000"> {/* Faster interval */}
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ backgroundImage: `url(${im1})` }}>
            <div className='container'>
              <Heading 
                title='Caring Today for a Brighter Tomorrow' 
                subtitle='Together, we ensure every child has the opportunity to thrive and succeed in a nurturing environment.' 
              />
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${im2})` }}>
            <div className='container'>
              <Heading 
                title='Building Hope, One Child at a Time' 
                subtitle='Dedicated to transforming lives and fostering resilience in children through support and advocacy.' 
              />
            </div>
          </div>
          <div className="carousel-item" style={{ backgroundImage: `url(${im3})` }}>
            <div className='container'>
              <Heading 
                title='Every Child, Every Chance' 
                subtitle='We believe in providing equal opportunities for every child to grow, learn, and flourish.' 
              />
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </section></>
    
  );
}

export default Hero;
