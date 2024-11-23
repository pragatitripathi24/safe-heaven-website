import React from 'react';
import './Marquee.css';  // Import the CSS for styling

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee text-white">
        <p>
          A child is a person who is going to carry on what you have started... He will assume control of
          your cities, states, and nations. He is going to move in and take over your churches, schools,
          universities, and corporations... the fate of humanity is in his hand.
        </p>
      </div>
    </div>
  );
};

export default Marquee;
