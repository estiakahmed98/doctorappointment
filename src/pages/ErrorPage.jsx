import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16 bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition inline-block"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;