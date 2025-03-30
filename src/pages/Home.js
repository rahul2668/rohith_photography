// import React from 'react';
// import CardList from '../components/CardList';
// import ContactUs from '../components/ContactUs';
// import Description from '../components/Description';
// import AboutUs from './About';
// import DeveloperCard from '../components/DeveloperCard';
// import Inquiry from '../components/Inquiry';
// import Videos from '../components/Videos';

// const Home = () => {
//   return (
//     <div
//       className="relative w-full h-screen bg-cover bg-center"
//       style={{
//         backgroundImage: `url(${process.env.PUBLIC_URL}/media/desktop.jpg)`,
//       }}
//     >
//       {/* Overlay for a dim effect */}
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>

//       {/* Content over the image */}
//       <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//         Ready to capture your special movement’s
//         </h1>
//         <p className="text-lg md:text-2xl max-w-3xl">
//         Welcome to our website, where we turn life's most precious moments into timeless memories. Specializing in wedding, portrait, and event photography, we believe every story deserves to be told through stunning visuals. Let us help you freeze time and cherish your memories forever...
//         </p>
//       </div>
//       {/* Card List Section */}
//       <div className="bg-gray-100">
//         <CardList />
//       </div>      
      
//       <Description />
//       <Videos />
//       <div className="py-8 bg-gray-100">
//         <ContactUs />
//       </div>
//       <AboutUs />
//       <Inquiry />
//       <DeveloperCard />
      
      
      
//     </div>
//   );
// };

// export default Home;

import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import ContactUs from "../components/ContactUs";
import Description from "../components/Description";
import AboutUs from "./About";
import DeveloperCard from "../components/DeveloperCard";
import Inquiry from "../components/Inquiry";
import Videos from "../components/Videos";
import Footer from "../components/Footer";

const Home = () => {
  const images = [
    `${process.env.PUBLIC_URL}/media/desktop.jpg`,
    `${process.env.PUBLIC_URL}/media/desktop3.webp`,
    `${process.env.PUBLIC_URL}/media/desktop1.webp`,
    `${process.env.PUBLIC_URL}/media/desktop2.webp`
  ];

  // State to keep track of the current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Change the background image every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Overlay for a dim effect */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content over the image */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Ready to capture your special moment’s
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl">
          Welcome to our website, where we turn life's most precious moments into timeless memories.
          Specializing in wedding, portrait, and event photography, we believe every story deserves to
          be told through stunning visuals. Let us help you freeze time and cherish your memories
          forever...
        </p>
      </div>

      {/* Dots for Image Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>

      {/* Card List Section */}
      <div className="bg-gray-100">
        <CardList />
      </div>

      <Description />
      <Videos />
      <div className="py-8 bg-gray-100">
        <ContactUs />
      </div>
      <AboutUs />
      <Inquiry />
      <DeveloperCard />
      <Footer/>
    </div>
    
  );
};

export default Home;
