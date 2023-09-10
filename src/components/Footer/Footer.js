import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="section footer">
      <div className="container">
        <div className="grid-container">
          <div className="footer-grid-item">
            <h3>Our Hours</h3>
            <p>Tuesday-Thursday: 3:00 PM - 12:00 PM<br/>
                Fri & Sat 3:00PM - 1:00AM<br/>
                Sun From 3:00PM - 8:00PM<br/>
                Monday sadly we are Closed</p>
          </div>

          <div className="footer-grid-item">
            <h3>Find Us Here</h3>
            <p><h3>Address:</h3>
                <p>205 8th Ave <br/> 
                Madison, MN, 56256</p>
                  <p>(320) 698-7498</p>
            <Link to="#" className="text-white">
            thesticks.madison@gmail.com
            </Link>
            </p>
          </div>

          <div className="footer-grid-item">
            <h3>Our Social Media</h3>
            <p>
            <Link 
              to="https://www.facebook.com/people/The-Sticks-Bar-and-Grill/100086171793425/" 
              style={{ color: 'white' }}> 
              Our Facebook 
            </Link>
          
            </p>
          </div>

          <div className="footer-grid-item">
          <iframe 
                    className='EmbedMaps' 
                    title="Google Maps location of The Stick's Bar and Grill" 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11283.314920083916!2d-96.2068827!3d45.0080998!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52cb45b1c424e1a7%3A0xe557658e6e557d4d!2sThe%20Sticks%20Bar%20and%20Grill!5e0!3m2!1sen!2sus!4v1693838188999!5m2!1sen!2sus"
                    width="400" 
                    height="300" 
                    allowfullscreen="false" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
