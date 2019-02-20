import React from 'react'
import Map from '../Map/Map.js'
import './About.css'
const About =()=>{
    return (
      <div className="About">
        <h1 className="About-Us">About Us</h1>
        <div>
        <div>
          <Map />
        <h3 className="Our-Story">Our Story</h3>
            <p className="Thai-Street-offers">
          Thai Street offers delicious dining, takeout and delivery to New
          York, NY. Thai Street is a cornerstone in the New York community
          and has been recognized for its outstanding Thai cuisine,
          excellent service, and friendly staff. Our Thai restaurant is
          known for its modern interpretation of classic dishes and its
          insistence on only using high quality fresh ingredients.
        </p>
        </div>
        <div>
            <h3 className="We-Deliver">We Deliver</h3>
            <p className="The-estimated-delive">
          The estimated delivery time is: 30 to 60 minutes. Delivery fee: $0
          in 1 mile range, $5 in 1.2 miles range We do not deliver beyond
          1.2 miles.
        </p>
        </div>
        </div>
        <div>
            <p className="-E-21st-St-New-Yor ">31 E 21st St New York, NY 10010 Phone: (212) 420-7500</p>
            <p className="Store-Hours-Mon---F ">
            <br/>
            Store Hours:
            <br/>
            Mon - Fri:	12:00 PM - 09:30 PM
            <br/>
            Saturday:	Closed
            <br/>
            Sunday:	12:00 PM - 09:30 PM</p>
        </div>
      </div>
    );
}
export default About 