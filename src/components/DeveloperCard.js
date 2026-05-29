import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const DeveloperCard = () => {
  const profiles = [
    {
      id: 1,
      name: "Rahul Ramagiri",
      role: "Full Stack Developer",
      description:
        "Passionate Full Stack Developer with expertise in building scalable web applications, from front-end interfaces to back-end solutions, ensuring seamless user experiences and efficient performance.",
      image: `${process.env.PUBLIC_URL}/media/rahul.jpg`, // Replace with the actual image path
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/rahul-ramagiri-782a85189",
        instagram: "https://www.instagram.com/rahulramagiri",
      },
    },
  ];

  return (
    <div
      className="min-h-screen flex justify-center items-center bg-cover bg-center px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/media/im4.avif')`, // Replace with the background image path
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white bg-opacity-70 shadow-lg rounded-lg p-6 sm:p-8 max-w-sm sm:max-w-md lg:max-w-lg w-full">
        {profiles.map((profile) => (
          <div key={profile.id} className="flex flex-col items-center">
            {/* Responsive Image */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
              {profile.name}
            </h3>
            <p className="text-sm sm:text-md text-gray-900 text-center italic">
              {profile.role}
            </p>
            <p className="text-gray-900 text-center mt-4 leading-relaxed text-sm sm:text-base">
              {profile.description}
            </p>
            {/* Social Media Icons */}
            <div className="mt-6 flex space-x-4">
              <a
                href={profile.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaLinkedin size={24} className="sm:size-30" />
              </a>
              <a
                href={profile.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram size={24} className="sm:size-30" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeveloperCard;
