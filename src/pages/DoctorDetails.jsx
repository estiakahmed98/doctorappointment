import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAppointments } from '../context/AppointmentContext';
import doctorsData from '../data/doctors.json';
import LoadingSpinner from '../components/LoadingSpinner';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { bookAppointment, checkAvailabilityToday } = useAppointments();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      const foundDoctor = doctorsData.doctors.find(doc => doc.id === id);
      
      if (foundDoctor) {
        setDoctor(foundDoctor);
      }
      
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  const handleBookNow = () => {
    if (!doctor) return;
    
    const result = bookAppointment(doctor);
    
    if (result.success) {
      toast.success(result.message);
      navigate('/bookings');
    } else {
      toast.error(result.message);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-4">Doctor Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">The doctor you're looking for doesn't exist.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const isAvailable = checkAvailabilityToday(doctor);

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Info Card */}
      <div className="bg-blue-50 rounded-lg shadow-md p-8 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Doctor's Profile Details</h2>
        <p className="text-xl text-gray-600">Get to know your healthcare provider</p>
      </div>

      {/* Doctor Info Section */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3 mb-6 md:mb-0">
            <img 
              src={doctor.image} 
              alt={doctor.name} 
              className=" rounded-lg object-cover"
              style={{ maxHeight: '400px' }}
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{doctor.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 mb-2"><span className="font-medium">Education:</span> {doctor.education}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Specialities:</span> {doctor.speciality}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Designation:</span> {doctor.designation}</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2"><span className="font-medium">Workplace:</span> {doctor.workplace}</p>
                <p className="text-gray-600 mb-2"><span className="font-medium">Experience:</span> {doctor.experience}</p>
                <p className="text-blue-600 font-medium mb-2">Fee: ${doctor.fee}</p>
              </div>
            </div>

            {/* Availability Section */}
            <div className="mt-6">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Availability</h3>
              <div className="flex flex-wrap gap-2">
                {doctor.availability.map((day, index) => (
                  <span 
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {day}
                  </span>
                ))}
              </div>
            </div>

            {/* Appointment Card */}
            <div className="mt-8 bg-gray-50 rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Make an Appointment</h3>
                <span 
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isAvailable 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {isAvailable ? 'Available Today' : 'Unavailable Today'}
                </span>
              </div>
              <button
                onClick={handleBookNow}
                className={`w-full py-3 rounded-md font-medium ${
                  isAvailable
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
                disabled={!isAvailable}
              >
                {isAvailable ? 'Book Now' : 'Doctor Unavailable Today'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;