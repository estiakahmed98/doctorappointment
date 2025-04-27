import { useAppointments } from '../context/AppointmentContext';
import { toast } from 'react-toastify';

const AppointmentCard = ({ appointment }) => {
  const { cancelAppointment } = useAppointments();

  const handleCancel = () => {
    const result = cancelAppointment(appointment.id);
    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0">
        <div>
          <h3 className="text-xl font-bold text-gray-800">{appointment.name}</h3>
          <p className="text-blue-600 font-medium">${appointment.fee}</p>
          <p className="text-gray-600">{appointment.education}</p>
          <p className="text-gray-600">Speciality: {appointment.speciality}</p>
        </div>
      </div>
      <button
        onClick={handleCancel}
        className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
      >
        Cancel Appointment
      </button>
    </div>
  );
};

export default AppointmentCard;