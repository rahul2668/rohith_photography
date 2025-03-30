// import React, { useState, useEffect } from "react";
// import ShimmerLoader from "../components/ShimmerLoader"; // Assuming ShimmerLoader is a separate component

// const CardWithLoader = ({ card, onCardClick }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Handle image load event
//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   // Change image every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length);
//     }, 3000);

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, [card.images.length]);

//   return (
//     <div
//       onClick={() => onCardClick(card.id)}
//       className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col border-2 border-gray-300"
//       style={{ height: "auto" }}
//     >
//       {/* Show shimmer loader until content (image, title, description) is loaded */}
//       {!imageLoaded && <ShimmerLoader />}

//       {/* Image Slider */}
//       <div className="relative w-full">
//         {/* Displaying the current image */}
//         <img
//           src={card.images[currentImageIndex]}
//           alt={`${card.title} - ${currentImageIndex + 1}`}
//           className={`w-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
//           onLoad={handleImageLoad} // Trigger image load handler
//         />
//       </div>

//       {/* Card Content */}
//       <div className={`p-4 flex flex-col ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
//         <h3 className="text-base md:text-lg lg:text-xl font-semibold">{card.title}</h3>
//         <p className="text-sm md:text-base lg:text-md text-gray-600 overflow-wrap break-words">{card.description}</p>
//       </div>
//     </div>
//   );
// };

// export default CardWithLoader;



// import React, { useState, useEffect } from "react";
// import ShimmerLoader from "../components/ShimmerLoader"; // Assuming ShimmerLoader is a separate component

// const CardWithLoader = ({ card, onCardClick }) => {
//   const [imageLoaded, setImageLoaded] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Handle image load event
//   const handleImageLoad = () => {
//     setImageLoaded(true);
//   };

//   // Change image every 3 seconds
//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length);
//     }, 3000);

//     return () => clearInterval(intervalId); // Cleanup interval on unmount
//   }, [card.images.length]);

//   // Handle dot click to change image
//   const handleDotClick = (index) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div
//       onClick={() => onCardClick(card.id)}
//       className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col border-2 border-gray-300"
//       style={{ height: "auto" }}
//     >
//       {/* Show shimmer loader until content (image, title, description) is loaded */}
//       {!imageLoaded && <ShimmerLoader />}

//       {/* Image Slider */}
//       <div className="relative w-full">
//         {/* Displaying the current image */}
//         <img
//           src={card.images[currentImageIndex]}
//           alt={`${card.title} - ${currentImageIndex + 1}`}
//           className={`w-full object-cover transition-opacity duration-500 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
//           onLoad={handleImageLoad} // Trigger image load handler
//         />

//         {/* Dot indicators */}
//         <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {card.images.map((_, index) => (
//             <div
//               key={index}
//               onClick={() => handleDotClick(index)}
//               className={`w-3 h-3 rounded-full ${currentImageIndex === index ? "bg-blue-600" : "bg-gray-300"} cursor-pointer`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Card Content */}
//       <div className={`p-4 flex flex-col ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500`}>
//         <h3 className="text-base md:text-lg lg:text-xl font-semibold">{card.title}</h3>
//         <p className="text-sm md:text-base lg:text-md text-gray-600 overflow-wrap break-words">{card.description}</p>
//       </div>
//     </div>
//   );
// };

// export default CardWithLoader;

import React, { useState, useEffect } from "react";
import ShimmerLoader from "../components/ShimmerLoader"; // Assuming ShimmerLoader is a separate component

const CardWithLoader = ({ card, onCardClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle image load event
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Change image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % card.images.length);
    }, 3000);

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [card.images.length]);

  return (
    <div
      onClick={() => onCardClick(card.id)}
      className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col border-2 border-gray-300"
      style={{ height: "auto" }}
    >
      {/* Show shimmer loader until content (image, title, description) is loaded */}
      {!imageLoaded && <ShimmerLoader />}

      {/* Image Slider */}
      <div className="relative w-full">
        {/* Displaying the current image */}
        <img
          src={card.images[currentImageIndex]}
          alt={`${card.title} - ${currentImageIndex + 1}`}
          className={`w-full object-cover transition-opacity duration-1000 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={handleImageLoad} // Trigger image load handler
        />
      </div>

      {/* Card Content */}
      <div className={`p-4 flex flex-col ${imageLoaded ? "opacity-100" : "opacity-0"} transition-opacity duration-1000`}>
        <h3 className="text-base md:text-lg lg:text-xl font-semibold">{card.title}</h3>
        <p className="text-sm md:text-base lg:text-md text-gray-600 overflow-wrap break-words">{card.description}</p>
      </div>
    </div>
  );
};

export default CardWithLoader;
