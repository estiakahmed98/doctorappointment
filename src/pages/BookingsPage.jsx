import { useNavigate } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentContext';
import AppointmentCard from '../components/AppointmentCard';
import BookingChart from '../components/BookingChart';
import LoadingSpinner from '../components/LoadingSpinner';

const BookingsPage = () => {
  const { appointments, loading } = useAppointments();
  const navigate = useNavigate();

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">My Appointments</h2>
      
      {appointments.length > 0 ? (
        <>
          <BookingChart appointments={appointments} />
          
          <div className="space-y-6">
            {appointments.map(appointment => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        </>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">No Appointments Found</h3>
          <p className="text-gray-600 mb-6">You haven't booked any appointments yet.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Find Doctors
          </button>
        </div>
      )}
    </div>
  );
};

export default BookingsPage;