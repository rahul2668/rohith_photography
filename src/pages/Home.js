import React from 'react';
import CardList from '../components/CardList';
import ContactUs from '../components/ContactUs';
import Description from '../components/Description';
import AboutUs from './About';
import DeveloperCard from '../components/DeveloperCard';
import Inquiry from '../components/Inquiry';
import Videos from '../components/Videos';

const Home = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/media/desktop.jpg)`,
      }}
    >
      {/* Overlay for a dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content over the image */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Ready to capture your special movement’s
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl">
        Welcome to our website, where we turn life's most precious moments into timeless memories. Specializing in wedding, portrait, and event photography, we believe every story deserves to be told through stunning visuals. Let us help you freeze time and cherish your memories forever...
        </p>
      </div>
      {/* Card List Section */}
      <div className="py-16 bg-gray-100">
        <CardList />
      </div>      
      
      <Description />
      <Videos />
      <div className="py-16 bg-gray-100">
        <ContactUs />
      </div>
      <AboutUs />
      <Inquiry />
      <DeveloperCard />
      
      
      
    </div>
  );
};

export default Home;
