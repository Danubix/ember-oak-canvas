
import React from "react";
import { Leaf } from "lucide-react";

const DirectTrade: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-1">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="rounded-ember overflow-hidden shadow-ember-1">
              <img
                src="https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?auto=format&fit=crop&w=800&q=80"
                alt="Coffee farmers working in plantation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Why Direct Trade Matters
            </h2>
            <p className="text-lg text-neutral-9/80 mb-8">
              We source our beans directly from farmers, ensuring they receive a fair premium for their exceptional harvests while promoting sustainable agricultural practices.
            </p>

            <div className="space-y-6">
              {/* Value Proposition 1 */}
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Soil Regeneration</h3>
                  <p className="text-neutral-9/80">
                    Our partner farms use sustainable farming practices that rebuild soil health and sequester carbon.
                  </p>
                </div>
              </div>

              {/* Value Proposition 2 */}
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6" />
                    <path d="M12 18v2m0-16v2" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Fair Premium</h3>
                  <p className="text-neutral-9/80">
                    We pay 50-75% above fair trade prices, ensuring farmers can invest in their communities and families.
                  </p>
                </div>
              </div>

              {/* Value Proposition 3 */}
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M22 12h-4l-3 9-3-9H8" />
                    <path d="M2 12h4l3-9 3 9h4" />
                    <path d="M19 5 H5" />
                    <path d="M19 19 H5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Community Clinics</h3>
                  <p className="text-neutral-9/80">
                    A portion of every purchase funds healthcare clinics in coffee-growing regions of Guatemala and Ethiopia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectTrade;
