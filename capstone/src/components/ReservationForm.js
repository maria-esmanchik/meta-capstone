// import React, { useState, useEffect } from 'react';
// import ConfirmedBooking from './ConfirmedBooking';

// const ReservationForm = (props) => {
//   const [fName, setFName] = useState("");
//   const [lName, setLName] = useState("");
//   const [email, setEmail] = useState("");
//   const [tel, setTel] = useState("");
//   const [people, setPeople] = useState(1);
//   const [date, setDate] = useState("");
//   const [occasion, setOccasion] = useState("");
//   const [preferences, setPreferences] = useState("");
//   const [comments, setComments] = useState("");

//   const [finalTime, setFinalTime] = useState(
//     props.availableTimes.map((times) => <option>{times}</option>)
//   );

//   function handleDateChange(e) {
//     setDate(e.target.value);

//     var stringify = e.target.value;
//     const date = new Date(stringify);

//     props.updateTimes(date);

//     setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
//   }

//   return (
//     <form className="reservation-form">
//       <div>
//         <label htmlFor="fName">First Name</label> <br></br>
//         <input
//           type="text"
//           id="fName"
//           placeholder="First Name"
//           required
//           minLength={2}
//           maxLength={50}
//           value={fName}
//           onChange={(e) => setFName(e.target.value)}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="lName">Last Name</label> <br></br>
//         <input
//           type="text"
//           id="lName"
//           placeholder="Last Name"
//           minLength={2}
//           maxLength={50}
//           value={lName}
//           onChange={(e) => setLName(e.target.value)}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="email">Email</label> <br></br>
//         <input
//           type="email"
//           id="email"
//           placeholder="Email"
//           value={email}
//           required
//           minLength={4}
//           maxLength={200}
//           onChange={(e) => setEmail(e.target.value)}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="phonenum">Phone Number</label> <br></br>
//         <input
//           type="tel"
//           id="phonenum"
//           placeholder="(xxx)-xxx-xxxx"
//           value={tel}
//           required
//           minLength={10}
//           maxLength={25}
//           onChange={(e) => setTel(e.target.value)}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="people">Number of People</label> <br></br>
//         <input
//           type="number"
//           id="people"
//           placeholder="Number of People"
//           value={people}
//           required
//           min={1}
//           max={100}
//           onChange={(e) => setPeople(e.target.value)}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="date">Select Date</label> <br></br>
//         <input
//           type="date"
//           id="date"
//           required
//           value={date}
//           onChange={handleDateChange}
//         ></input>
//       </div>

//       <div>
//         <label htmlFor="time">Select Time</label> <br></br>
//         <select id="time" required>
//           {finalTime}
//         </select>
//       </div>

//       <div>
//         <label htmlFor="occasion">Occasion</label> <br></br>
//         <select
//           id="occasion"
//           value={occasion}
//           onChange={(e) => setOccasion(e.target.value)}
//         >
//           <option>None</option>
//           <option>Birthday</option>
//           <option>Anniversary</option>
//           <option>Engagement</option>
//           <option>Other</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="preferences">Seating preferences</label> <br></br>
//         <select
//           id="preferences"
//           value={preferences}
//           onChange={(e) => setPreferences(e.target.value)}
//         >
//           <option>None</option>
//           <option>Indoors</option>
//           <option>Outdoor (Patio)</option>
//           <option>Outdoor (Sidewalk)</option>
//         </select>
//       </div>

//       <div>
//         <label htmlFor="comments">Additional Comments</label> <br></br>
//         <textarea
//           id="comments"
//           rows={8}
//           cols={50}
//           placeholder="Additional Comments"
//           value={comments}
//           onChange={(e) => setComments(e.target.value)}
//         ></textarea>
//       </div>

//       <div>
//         <br></br>
//         <small>
//           <p>
//             Note: You cannot edit your reservation after submission. Please
//             double-check your answer before submitting your reservation request.
//           </p>
//         </small>
//         <button className="action-button" to="/confirmed" element={<ConfirmedBooking />}>
//           Book Table
//         </button>
//       </div>
//     </form>
//   );
// }

// export default ReservationForm;

import React, { useState } from 'react';

const ReservationForm = ({ availableTimes, updateTimes, submitForm }) => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [occasion, setOccasion] = useState('');
  const [preferences, setPreferences] = useState('');
  const [comments, setComments] = useState('');

  const isValidDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    today.setHours(0, 0, 0, 0); // Set today's time to midnight
    return selectedDate >= today; // Ensure the selected date is today or in the future
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidDate(date)) {
      alert('Please select a valid date. The date cannot be in the past.');
      return;
    }
    const formData = {
      fName,
      lName,
      email,
      tel,
      people,
      date,
      time,
      occasion,
      preferences,
      comments,
    };
    submitForm(formData);
  };

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fName">First Name</label>
        <input
          type="text"
          id="fName"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lName">Last Name</label>
        <input
          type="text"
          id="lName"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="tel">Phone Number</label>
        <input
          type="tel"
          id="tel"
          pattern="[0-9]{10}"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="people">Number of People</label>
        <input
          type="number"
          id="people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Select Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Select Time</label>
        <select
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((timeOption, index) => (
            <option key={index} value={timeOption}>
              {timeOption}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="">None</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="preferences">Seating Preferences</label>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option value="">None</option>
          <option value="Indoors">Indoors</option>
          <option value="Outdoor (Patio)">Outdoor (Patio)</option>
          <option value="Outdoor (Sidewalk)">Outdoor (Sidewalk)</option>
        </select>
      </div>
      <div>
        <label htmlFor="comments">Additional Comments</label>
        <textarea
          id="comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>
      <button type="submit">Book Table</button>
    </form>
  );
};

export default ReservationForm;