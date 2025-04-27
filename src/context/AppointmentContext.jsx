import { createContext, useContext, useEffect, useState } from 'react';

const AppointmentContext = createContext();

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load appointments from localStorage on mount
  useEffect(() => {
    const savedAppointments = localStorage.getItem('appointments');
    if (savedAppointments) {
      setAppointments(JSON.parse(savedAppointments));
    }
    setLoading(false);
  }, []);

  // Save appointments to localStorage whenever they change
  useEffect(() => {
    if (!loading) {
      localStorage.setItem('appointments', JSON.stringify(appointments));
    }
  }, [appointments, loading]);

  const bookAppointment = (doctor) => {
    // Check if user already has an appointment with this doctor
    const existingAppointment = appointments.find(app => app.id === doctor.id);
    
    if (existingAppointment) {
      return { success: false, message: `You already have an appointment with ${doctor.name}` };
    }
    
    // Add new appointment
    const newAppointment = {
      ...doctor,
      bookingDate: new Date().toISOString()
    };
    
    setAppointments([...appointments, newAppointment]);
    return { success: true, message: `Appointment booked with ${doctor.name}` };
  };

  const cancelAppointment = (doctorId) => {
    setAppointments(appointments.filter(appointment => appointment.id !== doctorId));
    return { success: true, message: "Appointment cancelled successfully" };
  };

  const checkAvailabilityToday = (doctor) => {
    const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    return doctor.availability.includes(today);
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      bookAppointment,
      cancelAppointment,
      checkAvailabilityToday,
      loading
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => useContext(AppointmentContext);