import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center">
          <img src="/images/logo.png" alt="MediCare" className="h-10 mr-3" />
          <span className="text-2xl font-bold text-blue-600">MediCare</span>
        </NavLink>

        <div className="hidden md:flex  space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold underline"
                : "text-gray-700 font-medium"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/bookings"
            className={({ isActive }) =>
              isActive
                ? "text-green-600  font-semibold underline"
                : "text-gray-700 hover:text-green-600 font-medium"
            }
          >
            My-Bookings
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold underline"
                : "text-gray-700 hover:text-green-600 font-medium"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-green-600 font-semibold underline"
                : "text-gray-700 hover:text-green-600 font-medium"
            }
          >
            Contact Us
          </NavLink>
        </div>

        <NavLink
          to="/bookings"
          className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition"
        >
          Emergency
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
