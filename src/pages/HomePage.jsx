import { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import SuccessCard from '../components/SuccessCard';
import doctorsData from '../data/doctors.json';
import successData from '../data/successData.json';
import LoadingSpinner from '../components/LoadingSpinner';

const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDoctors(doctorsData.doctors);
      setFilteredDoctors(doctorsData.doctors);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const lowerSearch = searchTerm.toLowerCase().split(' ');
    const filtered = doctors.filter(
      (doctor) =>
        doctor?.name?.toLowerCase().includes(lowerSearch) ||
        doctor.speciality?.toLowerCase().includes(lowerSearch)
    );
    setFilteredDoctors(filtered);
    setShowAll(false); // Reset view to first 6
  };

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      {/* Banner Section */}
      <section>
        <div className="px-4 py-12 bg-gradient-to-b from-white to-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-gray-600 mb-6">
              Book appointments with top doctors in your area and get the care you deserve.
            </p>
            <form
              onSubmit={handleSearch}
              className="flex justify-center items-center gap-2"
            >
              <input
                type="text"
                placeholder="Search any doctor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Search Now
              </button>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <img src="/images/banner-img-1.png" alt="Doctor team" className="rounded-lg shadow-md" />
            <img src="/images/banner-img-1.png" alt="Doctor team" className="rounded-lg shadow-md" />
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Expert Doctors</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule appointments with highly qualified healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? filteredDoctors : filteredDoctors.slice(0, 6)).length > 0 ? (
              (showAll ? filteredDoctors : filteredDoctors.slice(0, 6)).map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))
            ) : (
              <p className="text-center col-span-full text-gray-500">No doctors found.</p>
            )}
          </div>

          {filteredDoctors.length > 6 && (
            <div className="flex justify-center items-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2 mb-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                {showAll ? 'Show Less' : 'View All Doctors'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Success Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to providing the best healthcare services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successData.successCards.map((card) => (
              <SuccessCard
                key={card.id}
                image={card.image}
                number={card.number}
                title={card.title}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
