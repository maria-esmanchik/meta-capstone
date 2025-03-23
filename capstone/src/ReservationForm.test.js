import { render, screen, fireEvent } from '@testing-library/react';
import ReservationForm from './components/ReservationForm';

describe('ReservationForm Component', () => {
  const mockSubmitForm = jest.fn();
  const mockUpdateTimes = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];

  const isValidDate = (date) => {
    const today = new Date();
    const selectedDate = new Date(date);
    today.setHours(0, 0, 0, 0); // Set today's time to midnight
    return selectedDate >= today; // Ensure the selected date is today or in the future
  };

  test('isValidDate returns true for today or future dates', () => {
    const today = new Date().toISOString().split('T')[0];
    const futureDate = new Date(Date.now() + 86400000).toISOString().split('T')[0]; // Tomorrow

    expect(isValidDate(today)).toBe(true);
    expect(isValidDate(futureDate)).toBe(true);
  });

  test('isValidDate returns false for past dates', () => {
    const pastDate = new Date(Date.now() - 86400000).toISOString().split('T')[0]; // Yesterday

    expect(isValidDate(pastDate)).toBe(false);
  });

  test('renders the ReservationForm component', () => {
    render(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    // Check if form fields are rendered
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of People/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
  });

  test('displays an alert for invalid date submission', () => {
    render(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
        />
    );

    const dateInput = screen.getByLabelText(/Select Date/i);
    const submitButton = screen.getByText(/Book Table/i);

    // Set an invalid date (yesterday)
    fireEvent.change(dateInput, { target: { value: '2023-01-01' } });
    fireEvent.click(submitButton);

    // Check if alert is displayed
    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  test('calls submitForm for valid form submission', () => {
    render(
      <ReservationForm
        availableTimes={mockAvailableTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />
    );

    const firstNameInput = screen.getByLabelText(/First Name/i);
    const lastNameInput = screen.getByLabelText(/Last Name/i);
    const emailInput = screen.getByLabelText(/Email/i);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    const peopleInput = screen.getByLabelText(/Number of People/i);
    const dateInput = screen.getByLabelText(/Select Date/i);
    const timeSelect = screen.getByLabelText(/Select Time/i);
    const submitButton = screen.getByText(/Book Table/i);

    // Fill out the form with valid data
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    fireEvent.change(phoneInput, { target: { value: '1234567890' } });
    fireEvent.change(peopleInput, { target: { value: '4' } });
    fireEvent.change(dateInput, { target: { value: new Date().toISOString().split('T')[0] } }); // Today
    fireEvent.change(timeSelect, { target: { value: '18:00' } });

    // Submit the form
    fireEvent.click(submitButton);

    // Check if submitForm was called
    expect(mockSubmitForm).toHaveBeenCalled();
  });
});