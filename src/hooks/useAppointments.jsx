import { useContext } from 'react';
import { AppointmentContext } from '../context/AppointmentContext';

/**
 * Custom hook to access the appointment context
 * @returns {Object} appointment context values and methods
 */
const useAppointments = () => {
  const context = useContext(AppointmentContext);
  
  if (context === undefined) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  
  return context;
};

export default useAppointments;