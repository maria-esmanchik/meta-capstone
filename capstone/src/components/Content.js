import React from 'react';

import { useReducer } from 'react';
import BookingSection from './BookingSection';
import ConfirmedBooking from './ConfirmedBooking';


const Content = ({ reservationMade, setReservationMade }) => {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    if (reservationMade === 1) {
        return <BookingSection setReservationMade = {setReservationMade} />;
    }
    if (reservationMade === 2) {
        return <ConfirmedBooking />;
    }
    return (
        <div>
        </div>
    );
};

const initializeTimes = () => {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
            // For now, return the same available times regardless of the date
            return initializeTimes();
        default:
            return state;
    }
};

export default Content;