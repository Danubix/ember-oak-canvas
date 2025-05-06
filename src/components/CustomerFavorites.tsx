
import React from "react";
import { Link } from "react-router-dom";

interface CoffeeProduct {
  id: number;
  name: string;
  origin: string;
  process: string;
  description: string;
  price: number;
  image: string;
  roastLevel: "light" | "medium" | "dark";
}

const FAVORITE_PRODUCTS: CoffeeProduct[] = [
  {
    id: 1,
    name: "Huehuetenango Honey Process",
    origin: "Guatemala",
    process: "Honey Process",
    description: "Notes of dark chocolate, stone fruit, and honey sweetness with a velvety body.",
    price: 18.00,
    image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?auto=format&fit=crop&w=600&q=80",
    roastLevel: "medium"
  },
  {
    id: 2,
    name: "Ethiopian Sidama Natural",
    origin: "Ethiopia",
    process: "Natural Process",
    description: "Vibrant blueberry, jasmine, and bergamot notes with a juicy, sweet finish.",
    price: 19.50,
    image: "https://images.unsplash.com/photo-1589396575653-c09c794ff6a6?auto=format&fit=crop&w=600&q=80",
    roastLevel: "light"
  },
  {
    id: 3,
    name: "Sumatra Kerinci Valley",
    origin: "Indonesia",
    process: "Wet Hulled",
    description: "Rich, earthy flavor with notes of dark chocolate, cedar, and spices.",
    price: 17.50,
    image: "https://images.unsplash.com/photo-1559525839-d9d2d9c3690e?auto=format&fit=crop&w=600&q=80",
    roastLevel: "dark"
  }
];

const getRoastLevelColor = (level: string) => {
  switch(level) {
    case "light": return "bg-amber-100 text-amber-800";
    case "medium": return "bg-amber-200 text-amber-800";
    case "dark": return "bg-amber-300 text-amber-800";
    default: return "bg-gray-100 text-gray-800";
  }
};

const CustomerFavorites: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
            Customer Favorites
          </h2>
          <p className="text-lg text-neutral-9/70 max-w-2xl mx-auto">
            Our most beloved roasts, carefully selected and roasted to perfection
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {FAVORITE_PRODUCTS.map((product) => (
            <div key={product.id} className="bg-white rounded-ember shadow-ember-1 overflow-hidden border border-neutral-1 transition-transform hover:transform hover:scale-[1.02] duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-xl">{product.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getRoastLevelColor(product.roastLevel)}`}>
                    {product.roastLevel.charAt(0).toUpperCase() + product.roastLevel.slice(1)} Roast
                  </span>
                </div>
                <p className="text-neutral-9/70 text-sm mb-4">
                  {product.origin} · {product.process}
                </p>
                <p className="mb-4 text-neutral-9/80">
                  {product.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-primary text-lg">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="bg-accent hover:bg-accent/90 text-white font-medium px-4 py-2 rounded-full transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            to="/shop" 
            className="btn-primary"
          >
            Shop All Beans
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerFavorites;
