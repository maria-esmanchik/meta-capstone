import { render, fireEvent, screen } from '@testing-library/react';
import App from './App.js';
import ReservationForm from './components/ReservationForm.js';
import { initializeTimes, updateTimes } from './components/Content';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
  render(<ReservationForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
  screen.getByText("ReservatioForm");
})

test('initializeTimes returns the correct initial state', () => {
  const initialState = initializeTimes();
  expect(initialState).toEqual(['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the same state when action type is UPDATE_TIMES', () => {
  const initialState = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const action = { type: 'UPDATE_TIMES', date: '2025-03-10' };
  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});

// test("Adds one", () => {
//   // render the App component
//   render(<App />); 
  
//   // save the heading in a variable
//   const heading = screen.getByTestId("currentNumber"); 
  
//   // save the button in a variable
//   const btn = screen.getByTestId("addOne"); 
  
//   // click the btn
//   fireEvent.click(btn); 
  
//   // test assumption
//   expect(heading).toHaveTextContent("2");
// });
