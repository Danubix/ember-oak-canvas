
import React, { useEffect } from 'react';
import { useLocation, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-neutral-1 py-16">
        <div className="text-center px-4">
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1556742393-d75f468bfcb0?auto=format&fit=crop&w=400&q=80"
              alt="Spilled coffee cup"
              className="w-64 h-64 object-cover rounded-full mx-auto shadow-lg"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Oops! Page Not Found</h1>
          <p className="text-xl text-neutral-9/70 mb-8 max-w-md mx-auto">
            Looks like this brew doesn't exist. Let's get you back to our fresh roasts.
          </p>
          <Link to="/" className="btn-accent">
            Return to Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
