import ReservationForm from '../components/ReservationForm';
import { useReducer } from "react";
import { fetchAPI } from "../components/BookingAPI";
import { submitAPI } from "../components/BookingAPI";
import { useNavigate } from "react-router-dom";
const BookingSection = ({setReservationMade}) => {
//   function updateTimes(date) {
//     return fetchAPI(date);
//   }

//   const output = fetchAPI(new Date());

//   const [availableTimes, dispatch] = useReducer(updateTimes, output);

//   return (
//     <>
//       <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} />
//     </>
//   );
// }

const navigate = useNavigate();

function updateTimes(date) {
  return fetchAPI(date);
}

const output = fetchAPI(new Date());
const [availableTimes, dispatch] = useReducer(updateTimes, output);

const submitForm = async (formData) => {
  const success = await submitAPI(formData);
  if (success) {
    navigate('/confirmation');
    setReservationMade(2);
  } else {
    alert('Failed to submit the reservation. Please try again.');
  }
};

return (
  <ReservationForm
    availableTimes={availableTimes}
    updateTimes={dispatch}
    submitForm={submitForm}
  />
);
};

export default BookingSection;