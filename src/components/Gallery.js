// import React from 'react';

// const Gallery = () => {
//   const images = [
//     '/path-to-image1.jpg',
//     '/path-to-image2.jpg',
//     '/path-to-image3.jpg',
//   ];

//   return (
//     <div className="p-4 grid grid-cols-2 md:grid-cols-3 gap-4">
//       {images.map((image, index) => (
//         <img key={index} src={image} alt={`Gallery ${index}`} className="w-full h-64 object-cover rounded-lg shadow-md" />
//       ))}
//     </div>
//   );
// };

// export default Gallery;
import React from 'react';
import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { id } = useParams();

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Gallery {id}</h2>
      <p className="text-center text-gray-700">This is the gallery page for card {id}.</p>
    </div>
  );
};

export default Gallery;
