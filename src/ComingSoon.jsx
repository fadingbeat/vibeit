import React from 'react';
import './ComingSoon.css'; // Optional: Add styles
import SubscribeBox from './SubscriptionComponent';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      <h1 className="audiowide-regular landing-page-name">VibeIT</h1>
      <h1 className="jersey-15-regular">Izrada i održavanje Web stranica</h1>
      <p className="jersey-15-regular">
        Gradimo moderne Web stranice prilagođene vašim potrebama. Pretplatite se
        i prvi budite dio priče.
      </p>
      <SubscribeBox />
    </div>
  );
};

export default ComingSoon;
