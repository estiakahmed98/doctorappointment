import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppointmentProvider } from './context/AppointmentContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DoctorDetails from './pages/DoctorDetails';
import BookingsPage from './pages/BookingsPage';
import BlogsPage from './pages/BlogsPage';
import ErrorPage from './pages/ErrorPage';
import LoadingSpinner from './components/LoadingSpinner';

// Route change loading component
const RouteChangeListener = ({ setIsLoading }) => {
  const location = useLocation();
  
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location, setIsLoading]);
  
  return null;
};

// Dynamic title component
const DynamicTitle = () => {
  const location = useLocation();
  
  useEffect(() => {
    let title = 'MediCare';
    
    if (location.pathname === '/') {
      title = 'MediCare | Home';
    } else if (location.pathname === '/bookings') {
      title = 'MediCare | Bookings';
    } else if (location.pathname === '/blogs') {
      title = 'MediCare | Blogs';
    } else if (location.pathname.includes('/doctors/')) {
      const doctorName = document.querySelector('h2')?.innerText || 'Doctor Details';
      title = `MediCare | ${doctorName}`;
    } else {
      title = 'MediCare | Page Not Found';
    }
    
    document.title = title;
  }, [location]);
  
  return null;
};

const AppContent = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isErrorPage = !['/', '/bookings', '/blogs'].includes(location.pathname) 
                      && !location.pathname.startsWith('/doctors/');

  return (
    <>
      <RouteChangeListener setIsLoading={setIsLoading} />
      <DynamicTitle />
      <Navbar />
      
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <main className="min-h-screen">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/doctors/:id" element={<DoctorDetails />} />
              <Route path="/bookings" element={<BookingsPage />} />
              <Route path="/blogs" element={<BlogsPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </main>
          
          {!isErrorPage && <Footer />}
        </>
      )}
      
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppointmentProvider>
        <AppContent />
      </AppointmentProvider>
    </BrowserRouter>
  );
};

export default App;