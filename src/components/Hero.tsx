
import React from "react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-neutral-9/30">
        <video
          className="w-full h-full object-cover"
          poster="/placeholder.svg"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-pouring-coffee-beans-into-a-container-512-large.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-display text-5xl md:text-6xl lg:text-7xl max-w-4xl mb-6 drop-shadow-lg animate-fade-in">
          Ember & Oak Coffee Roasters
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl mb-8 drop-shadow-md animate-fade-in" style={{animationDelay: "0.2s"}}>
          Ethically sourced, artisanally roasted beans from farm to cup
        </p>
        <Link 
          to="/shop" 
          className="btn-accent animate-fade-in"
          style={{animationDelay: "0.4s"}}
        >
          Explore Our Roasts
        </Link>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="drop-shadow-md"
        >
          <path d="M12 5v14"></path>
          <path d="m19 12-7 7-7-7"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
