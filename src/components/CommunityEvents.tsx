
import React from "react";
import { Link } from "react-router-dom";

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
  isFree: boolean;
}

const UPCOMING_EVENTS: Event[] = [
  {
    id: 1,
    title: "Cupping Lab: Ethiopian Single Origins",
    date: "Thursday, May 8",
    time: "6:00 PM",
    description: "Join our head roaster for a guided tasting through 5 distinctive Ethiopian coffees from different regions.",
    location: "Main Roastery",
    isFree: false
  },
  {
    id: 2,
    title: "Latte Art Jam",
    date: "Saturday, May 10",
    time: "10:00 AM",
    description: "Practice your latte art skills with our barista team. All skill levels welcome!",
    location: "Downtown Café",
    isFree: true
  },
  {
    id: 3,
    title: "Home Brewing Workshop",
    date: "Sunday, May 11",
    time: "2:00 PM",
    description: "Learn how to make cafe-quality pour-overs at home with simple techniques and equipment.",
    location: "Main Roastery",
    isFree: false
  }
];

const CommunityEvents: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-1">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
              Community Events
            </h2>
            <p className="text-lg text-neutral-9/70">
              Join us for tastings, workshops, and more
            </p>
          </div>
          <Link to="/community" className="mt-4 md:mt-0 text-accent hover:text-accent/90 font-medium inline-flex items-center transition-colors">
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><path d="m9 18 6-6-6-6"/></svg>
          </Link>
        </div>

        <div className="space-y-6">
          {UPCOMING_EVENTS.map((event) => (
            <div key={event.id} className="bg-white rounded-ember shadow-ember-1 border border-neutral-1 p-6">
              <div className="flex flex-col md:flex-row">
                {/* Date Column */}
                <div className="md:w-1/6 mb-4 md:mb-0">
                  <div className="font-medium text-neutral-9">{event.date}</div>
                  <div className="font-bold text-xl text-primary">{event.time}</div>
                </div>
                
                {/* Content Column */}
                <div className="md:w-4/6 md:px-6">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-neutral-9/80 mb-3">
                    {event.description}
                  </p>
                  <div className="flex items-center text-sm text-neutral-9/70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                    {event.location}
                  </div>
                </div>
                
                {/* Action Column */}
                <div className="md:w-1/6 mt-4 md:mt-0 flex md:justify-end items-center">
                  {event.isFree ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                      Free Event
                    </span>
                  ) : (
                    <button className="border border-primary text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-colors">
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEvents;
