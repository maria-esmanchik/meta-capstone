import React from 'react';
import ReservationForm from './ReservationForm';

const Content = ({ reservationMade }) => {
  return (
    <div>
      {reservationMade ? <ReservationForm /> : null }
    </div>
  );
};

export default Content;