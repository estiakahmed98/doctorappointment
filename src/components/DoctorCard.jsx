import { Link } from 'react-router-dom';
import { useAppointments } from '../context/AppointmentContext';

const DoctorCard = ({ doctor }) => {
  const { checkAvailabilityToday } = useAppointments();
  const isAvailable = checkAvailabilityToday(doctor);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={doctor.image} 
          alt={doctor.name} 
          className="p-6 rounded-lg object-cover object-center"
        />
        {!isAvailable && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Unavailable Today
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{doctor.name}</h3>
        <p className="text-gray-600 mb-1">{doctor.education}</p>
        <p className="text-blue-600 font-medium mb-1">Speciality: {doctor.speciality}</p>
        <p className="text-gray-600 mb-1">Experience: {doctor.experience}</p>
        <p className="text-gray-600 mb-4">Reg #: {doctor.regNumber}</p>
        <Link 
          to={`/doctors/${doctor.id}`}
          className="block text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          View Details
        </Link>
      </div>
      </div>
  );
};

export default DoctorCard;