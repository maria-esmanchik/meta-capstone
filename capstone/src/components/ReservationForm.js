import React, { useState } from 'react';
import '../style/ReservationForm.css';

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
        <label htmlFor="fName">First Name *</label>
        <input
          type="text"
          id="fName"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="lName">Last Name *</label>
        <input
          type="text"
          id="lName"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="tel">Phone Number *</label>
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
        <label htmlFor="people">Number of People *</label>
        <input
          type="number"
          id="people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="date">Select Date *</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="time">Select Time *</label>
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
      <button type="submit" aria-label='On Click'>Book Table</button>
    </form>
  );
};

export default ReservationForm;