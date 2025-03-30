import React, { useState } from "react";

const Videos = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  // Array of videos with title, description, image, and YouTube URL
  const videos = [
    {
      id: 1,
      title: "Pre-Wedding Cinematic",
      description: "Cinematic Video | Vaishnav & Ashwini",
      imageUrl: `${process.env.PUBLIC_URL}/media/pre_wedding/pw2.jpg`, // Correct image path
      youtubeLink: "https://www.youtube.com/embed/JqeQHfL7ZGI?si=MMyfXg-MuzxYIdPw",
    },
    {
      id: 2,
      title: "Wedding Cinematic",
      description: "Cinematic Video | Shruthi & Sai Kumar",
      imageUrl: `${process.env.PUBLIC_URL}/media/wedding/m25.jpg`, // Replace with your actual image path
      youtubeLink: "https://www.youtube.com/embed/pl_Xzec0jSY?si=hPUd0Ta03ZrhH7hs",
    },
    {
      id: 3,
      title: "Kaleshwaram Project",
      description: "project Link -7",
      imageUrl: `${process.env.PUBLIC_URL}/media/government/g1.jpg`, // Replace with your actual image path
      youtubeLink: "https://www.youtube.com/embed/lsFAyQx7MXw?si=AWwTDggFdqAzG5OX",
    },
    {
      id: 4,
      title: "Agriculture Land",
      description: "Cinematic 4K Drone footage ",
      imageUrl: `${process.env.PUBLIC_URL}/media/realestate/r3.jpg`, // Replace with your actual image path
      youtubeLink: "https://www.youtube.com/embed/slqQYIsjdzM?si=t-T_zpMXrceECeRi",
    },
    {
      id: 5,
      title: "Telangana Tirumala Devasthanam",
      description: "Cinematic 4k drone Footage",
      imageUrl: `${process.env.PUBLIC_URL}/media/drone/d3.jpg`, // Replace with your actual image path
      youtubeLink: "https://www.youtube.com/embed/xdZ_D4Sgwns?si=EySuixiTW_vUF0mf",
    },
    {
      id: 6,
      title: "Siddula Gutta Temple",
      description: "Sri Navanatha Siddeshwara temple is located in Armoor",
      imageUrl: `${process.env.PUBLIC_URL}/media/drone/d12.jpg`, // Replace with your actual image path
      youtubeLink: "https://www.youtube.com/embed/xLEXqhBoIgg?si=C_QcU6kP5pdquIZq",
    },
  ];

  // Open modal with selected YouTube video
  const openModal = (url) => {
    setVideoUrl(url);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setVideoUrl("");
  };

  return (
<div className="w-full px-4 py-4 bg-gray-100">
{/* Light grey background for container */}
  <h2 className="text-3xl font-bold text-center mb-6">Explore Videos</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {videos.map((video) => (
      <div
      key={video.id}
      className="bg-white p-2 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-200 ease-in-out border border-white"
      onClick={() => openModal(video.youtubeLink)}
    >
        <img
            src={video.imageUrl}
            alt={video.title}
            className="w-full h-48 object-cover rounded-lg"
        />
        <h3 className="text-xl font-bold text-center mt-4">{video.title}</h3>
        <p className="text-gray-600 text-sm mt-2 text-center">{video.description}</p>
        </div>
    ))}
  </div>

  {/* Modal for displaying YouTube video */}
  {isModalOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative w-11/12 sm:w-9/12 md:w-8/12 lg:w-1/2 p-4 rounded-lg">
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 text-white text-3xl font-bold"
        >
          &times;
        </button>
        <iframe
          className="w-full h-[60vh] sm:h-[80vh] lg:h-[80vh] xl:h-[80vh]" // Responsive height
          src={videoUrl}
          title="YouTube Video"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}
</div>


  );
};

export default Videos;
