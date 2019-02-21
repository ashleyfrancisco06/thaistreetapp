import React from 'react'
import Map from '../Map/Map.js'
import './About.css'
const About =()=>{
    return (
      <div className="About">
        <h1 className="About-Us">About Us</h1>
        <div>
          <div className="top">
            <div>
              <Map />
            </div>
            <div>
              <h3 className="Our-Story">Our Story</h3>
              <p className="Thai-Street-offers">
                <span>
                  Thai Street offers delicious dining, takeout and delivery
                  to New York, NY.
                  <br />
                </span>
                <span>
                  <br />
                  Thai Street is a cornerstone in the New York community and
                  has been recognized for its outstanding Thai cuisine,
                  excellent service, and friendly staff.
                </span>
                <br />
                <br />
                <span>
                  Our Thai restaurant is known for its modern interpretation
                  of classic dishes and its insistence on only using high
                  quality fresh ingredients.
                </span>
              </p>
            </div>
          </div>
          <div className="bottom">
            <div className="words">
              <div>
                <h3 className="We-Deliver">We Deliver</h3>
              </div>
              <div>
                <p className="The-estimated-delive">
                  <span>
                    The estimated delivery time is: 30 to 60 minutes.
                    <br/>
                    <br/>
                  </span>
                  Delivery fee: $0 in 1 mile range,
                  <br/>
                  $5 in 1.2 miles range
                  <br/> 
                  We do not deliver beyond 1.2 miles.
                </p>
              </div>
            </div>
            <div>
              <p className="-E-21st-St-New-Yor ">
                31 E 21st St New York, NY 10010 
                <br/>
                <br />
                Phone: (212) 420-7500
              </p>
              <p className="Store-Hours-Mon---F ">
                <br />
                Store Hours:
                <br />
                <br />
                Mon - Fri: 12:00 PM - 09:30 PM
                <br />
                Saturday:<span className="red">Closed</span>
                <br />
                Sunday: 12:00 PM - 09:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>
    );
}
export default About 