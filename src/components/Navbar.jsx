import { Link } from 'react-router-dom';
import { FaHandsWash } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <FaHandsWash className="h-8 w-8 text-primary-500" />
              <span className="ml-2 text-xl font-bold text-gray-800">Weekly Washing</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/pricing" className="text-gray-600 hover:text-primary-500">
              Pricing
            </Link>
            <Link to="/washer" className="text-gray-600 hover:text-primary-500">
              Join as Washer
            </Link>
            <Link 
              to="/auth" 
              className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}