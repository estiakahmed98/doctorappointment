import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="MediCare" className="h-10 mr-3" />
            <span className="text-2xl font-bold text-blue-600">MediCare</span>
          </Link>
          <div className="flex justify-center space-x-8 my-8">
            <Link to="/" className="hover:text-green-600">
              Home
            </Link>
            <Link to="/bookings" className="hover:text-green-600">
              My-Bookings
            </Link>
            <Link to="/blogs" className="hover:text-green-600">
              Blogs
            </Link>
            <Link to="/about" className="hover:text-green-600 text-bold">
              Contact Us
            </Link>
          </div>

          <hr></hr>

          <div className="flex space-x-6">
            <a
              href="https://github.com/estiakahmed98"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/estiak-ahmed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a
              href="https://www.facebook.com/estiakahmed.tusher/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600"
            >
              <i className="fab fa-facebook text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
