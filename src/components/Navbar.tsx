import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-black/80 backdrop-blur-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-emerald-400">
            RT
          </Link>
          <div className="flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Projects
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}