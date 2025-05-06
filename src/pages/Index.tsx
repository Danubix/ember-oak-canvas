
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import DirectTrade from "../components/DirectTrade";
import RoastingSchedule from "../components/RoastingSchedule";
import CustomerFavorites from "../components/CustomerFavorites";
import CommunityEvents from "../components/CommunityEvents";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-0">
      <Navbar />
      <Hero />
      <DirectTrade />
      <RoastingSchedule />
      <CustomerFavorites />
      <CommunityEvents />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
