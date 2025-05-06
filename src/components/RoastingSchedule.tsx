
import React, { useState, useEffect } from "react";

interface RoastItem {
  id: number;
  name: string;
  origin: string;
  flag: string;
  time: string;
  status: "upcoming" | "roasting" | "completed";
}

const MOCK_ROASTS: RoastItem[] = [
  { id: 1, name: "Antigua Highlands", origin: "Guatemala", flag: "🇬🇹", time: "09:30 AM", status: "completed" },
  { id: 2, name: "Yirgacheffe Natural", origin: "Ethiopia", flag: "🇪🇹", time: "11:00 AM", status: "completed" },
  { id: 3, name: "Huila Reserve", origin: "Colombia", flag: "🇨🇴", time: "01:30 PM", status: "roasting" },
  { id: 4, name: "Sumatra Mandheling", origin: "Indonesia", flag: "🇮🇩", time: "03:00 PM", status: "upcoming" },
  { id: 5, name: "Kenya AA", origin: "Kenya", flag: "🇰🇪", time: "04:30 PM", status: "upcoming" },
  { id: 6, name: "Costa Rica Tarrazu", origin: "Costa Rica", flag: "🇨🇷", time: "Tomorrow", status: "upcoming" },
];

const RoastingSchedule: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = direction === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount 
        : scrollContainerRef.current.scrollLeft + scrollAmount;
        
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              Live Roasting Schedule
            </h2>
            <p className="text-neutral-9/70">
              Watch as we roast today's specialty beans
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <div className="flex items-center mr-4">
              <div className="w-2 h-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm">Live Now</span>
            </div>
            <span className="text-accent font-mono font-medium">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end mb-4 gap-2">
          <button 
            onClick={() => scroll('left')}
            className="p-2 rounded-full hover:bg-neutral-1 transition-colors"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="p-2 rounded-full hover:bg-neutral-1 transition-colors"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
        
        {/* Scrollable Cards */}
        <div 
          ref={scrollContainerRef} 
          className="flex overflow-x-auto pb-6 scrollbar-none snap-x"
        >
          {MOCK_ROASTS.map((roast) => (
            <div 
              key={roast.id}
              className="min-w-[280px] md:min-w-[320px] snap-start mr-4 bg-white rounded-ember shadow-ember-1 border border-neutral-1 flex-shrink-0"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl" aria-hidden="true">{roast.flag}</span>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    roast.status === 'roasting' 
                      ? 'bg-green-100 text-green-800' 
                      : roast.status === 'completed'
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-amber-100 text-amber-800'
                  }`}>
                    {roast.status.charAt(0).toUpperCase() + roast.status.slice(1)}
                  </div>
                </div>

                <h3 className="font-bold text-xl mb-1">{roast.name}</h3>
                <p className="text-neutral-9/70 mb-3">{roast.origin}</p>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <span>{roast.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoastingSchedule;
