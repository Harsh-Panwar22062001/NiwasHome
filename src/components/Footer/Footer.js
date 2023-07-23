import React, { useState, useEffect } from 'react';
import './Footer.css';

const Footer = () => {
  const [colors, setColors] = useState(['#ff0000', '#00ff00', '#0000ff']); // Array of colors
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(changeColor, 2000); // Change color every 2 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Function to change the color randomly
  const changeColor = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-conatiner">
        {/*---------- Left side ------------ */}
        <div className="flexColStart f-left">
          <h1 className='title-row'>NiwasHome</h1>
          <span className="secondaryText">
            Our vision is to make all people<br /> the best place to live for for them.
          </span>
        </div>

        {/*---------- Right side ------------ */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">karnal, Haryana, India</span>
        </div>
      </div>

      <div className="credit">
        Made and Developed with Love❤️ by <span  className='credit-i'    style={{ color: colors[currentIndex] }}> Harsh Panwar</span>
      </div>
    </section>
  );
};





export default Footer;
