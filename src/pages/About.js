// import React from 'react';

// const AboutUs = () => {
//   const profiles = [
//     {
//       id: 1,
//       name: "Rohith Ramagiri",
//       role: "Licensed Drone Pilot",
//       description:
//         "I have a keen interest in photography and excel at capturing unforgettable memories. With expertise in drone operations and visual storytelling, I specialize in creating stunning imagery.",
//       image: `${process.env.PUBLIC_URL}/media/rohith.jpg`, // Replace with actual image path
//     },
//   ];

//   return (
//     <div
//       className="min-h-screen bg-cover bg-center flex justify-center items-center"
//       style={{
//         backgroundImage: `url('${process.env.PUBLIC_URL}/media/profile.jpg')`, // Replace with the background image path
//       }}
//     >
//       <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-8 max-w-md">
//         {profiles.map((profile) => (
//           <div key={profile.id} className="flex flex-col items-center">
//             <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
//               <img
//                 src={profile.image}
//                 alt={profile.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-semibold text-gray-800 text-center">
//               {profile.name}
//             </h3>
//             <p className="text-sm text-gray-600 text-center italic">
//               {profile.role}
//             </p>
//             <p className="text-gray-600 text-center mt-4 leading-relaxed">
//               {profile.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from 'react';

const AboutUs = () => {
  const profiles = [
    {
      id: 1,
      name: "Rohith Ramagiri",
      role: "Licensed Drone Pilot",
      description:
        "I have a keen interest in photography and excel at capturing unforgettable memories. With expertise in drone operations and visual storytelling, I specialize in creating stunning imagery.",
      image: `${process.env.PUBLIC_URL}/media/rohith.jpg`, // Replace with actual image path
    },
  ];

  return (
    <div
      className="min-h-screen flex justify-center items-center px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/media/profile.jpg')`, // Replace with the background image path
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white bg-opacity-80 shadow-lg rounded-lg p-6 sm:p-8 max-w-sm sm:max-w-md lg:max-w-lg w-full">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center">
            {/* Responsive Profile Image */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden mb-4">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Responsive Text */}
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 text-center">
              {profile.name}
            </h3>
            <p className="text-sm sm:text-md text-gray-600 text-center italic">
              {profile.role}
            </p>
            <p className="text-gray-600 text-center mt-4 leading-relaxed text-sm sm:text-base">
              {profile.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
