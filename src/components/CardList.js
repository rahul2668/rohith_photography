import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CardList = () => {
  const navigate = useNavigate();

  // const cards = [
  //   // Wedding
  //   { id: 1, image: `${process.env.PUBLIC_URL}/media/pre_wedding/pw1.jpg`, title: "Pre-Wedding", category: "Wedding", description: "Celebration of a Life of love begins with these magical moments." },
  //   { id: 2, image: `${process.env.PUBLIC_URL}/media/wedding/m22.jpg`, title: "Wedding", category: "Wedding", description: "Celebrate the union with grand and memorable moments of joy." },
  //   { id: 3, image: `${process.env.PUBLIC_URL}/media/reception/r4.jpg`, title: "Reception", category: "Wedding", description: "An evening filled with laughter, music, and cherished memories." },
  //   { id: 4, image: `${process.env.PUBLIC_URL}/media/haldi/h6.jpg`, title: "Haldi Ceremony", category: "Wedding", description: "Capture the vibrant hues and joyous moments of Haldi." },
  //   { id: 5, image: `${process.env.PUBLIC_URL}/media/sangeeth/s12.jpg`, title: "Sangeeth Night", category: "Wedding", description: "Relive the music, dance, and energy of Sangeeth Night." },
  //   { id: 17, image: `${process.env.PUBLIC_URL}/media/engagement/e1.jpg`, title: "Engagement", category: "Wedding", description: "Relive the music, dance, and energy of Engagement Shoot." },

  //   //Birthday
  //   { id: 6, image: `${process.env.PUBLIC_URL}/media/pre_birthday/pb11.jpg`, title: "Pre-Birthday", category: "Birthday", description: "Counting down the days to a celebration of life, love, and laughter." },
  //   { id: 7, image: `${process.env.PUBLIC_URL}/media/birthday/b5.jpg`, title: "Birthday", category: "Birthday", description: "Two souls, one journey, and a lifetime of love awaits." },
    
  //   //Corporate
    
  //   { id: 8, image: `${process.env.PUBLIC_URL}/media/event/e1.jpg`, title: "Event Photography", category: "Corporate", description: "Preserving unforgettable moments with elegance and artistry." },
  //   { id: 9, image: `${process.env.PUBLIC_URL}/media/government/g4.jpg`, title: "Government Projects", category: "Corporate", description: "Showcase your brand’s vision with striking visuals." },
  //   { id: 10, image: `${process.env.PUBLIC_URL}/media/default.jpg`, title: "Corporate Shoots", category: "Corporate", description: "Enhance your corporate identity with professional photos." },
  //   { id: 11, image: `${process.env.PUBLIC_URL}/media/portfolio/p2.jpg`, title: "Portfolio Shoots", category: "Corporate", description: "Create a stunning portfolio highlighting your unique talents." },
  //   { id: 12, image: `${process.env.PUBLIC_URL}/media/marketMedia/mm1.jpg`, title: "Marketing & Media", category: "Corporate", description: "Compelling visuals to elevate your marketing campaigns." },
  //   { id: 13, image: `${process.env.PUBLIC_URL}/media/realestate/r1.jpg`, title: "Real Estate", category: "Corporate", description: "Bring properties to life with high-quality visuals." },
    
  //   // Special
  //   { id: 14, image: `${process.env.PUBLIC_URL}/media/maternity/b3.jpg`, title: "Maternity Shoot", category: "Special", description: "Capture the joy of parenthood with precious moments." },
  //   { id: 15, image: `${process.env.PUBLIC_URL}/media/cradle/c6.jpg`, title: "Cradle Shoot", category: "Special", description: "Capture the joy of parenthood with precious moments." },
  //   { id: 16, image: `${process.env.PUBLIC_URL}/media/drone/d19.jpg`, title: "Drone Shoot", category: "Special", description: "Breathtaking aerial views for unique perspectives." },
    
  // ];

  const cards = [
    // Wedding
    { id: 1, image: `${process.env.PUBLIC_URL}/media/pre_wedding/pw1.jpg`, title: "Pre-Wedding", category: "Wedding", description: "Celebrate the journey of love before the big day with enchanting pre-wedding moments." },
    { id: 2, image: `${process.env.PUBLIC_URL}/media/wedding/m22.jpg`, title: "Wedding", category: "Wedding", description: "Capture the essence of love and commitment on your special day." },
    { id: 3, image: `${process.env.PUBLIC_URL}/media/reception/r4.jpg`, title: "Reception", category: "Wedding", description: "A glamorous evening celebrating the union with friends and family." },
    { id: 4, image: `${process.env.PUBLIC_URL}/media/haldi/h6.jpg`, title: "Haldi Ceremony", category: "Wedding", description: "Relive the vibrant traditions and joyful moments of the Haldi ritual." },
    { id: 5, image: `${process.env.PUBLIC_URL}/media/sangeeth/s12.jpg`, title: "Sangeeth Night", category: "Wedding", description: "Dance, music, and joyous celebrations captured beautifully." },
    { id: 17, image: `${process.env.PUBLIC_URL}/media/engagement/e1.jpg`, title: "Engagement", category: "Wedding", description: "Mark the beginning of your forever love story with cherished engagement moments." },
  
    // Birthday
    { id: 6, image: `${process.env.PUBLIC_URL}/media/pre_birthday/pb11.jpg`, title: "Pre-Birthday", category: "Birthday", description: "Anticipate the big day with heartwarming pre-birthday celebrations." },
    { id: 7, image: `${process.env.PUBLIC_URL}/media/birthday/b5.jpg`, title: "Birthday", category: "Birthday", description: "Cherish the joy and fun of your special day with vibrant memories." },
  
    // Corporate
    { id: 8, image: `${process.env.PUBLIC_URL}/media/event/e1.jpg`, title: "Event Photography", category: "Corporate", description: "Document your professional events with attention to every detail." },
    { id: 9, image: `${process.env.PUBLIC_URL}/media/government/g4.jpg`, title: "Government Projects", category: "Corporate", description: "Highlight impactful initiatives with compelling visuals." },
    // { id: 10, image: `${process.env.PUBLIC_URL}/media/default.jpg`, title: "Corporate Shoots", category: "Corporate", description: "Showcase professionalism and success with stunning corporate imagery." },
    { id: 11, image: `${process.env.PUBLIC_URL}/media/portfolio/p2.jpg`, title: "Portfolio Shoots", category: "Corporate", description: "Create a portfolio that reflects your unique style and expertise." },
    { id: 12, image: `${process.env.PUBLIC_URL}/media/marketMedia/mm1.jpg`, title: "Marketing & Media", category: "Corporate", description: "Boost your brand’s presence with creative marketing visuals." },
    { id: 13, image: `${process.env.PUBLIC_URL}/media/realestate/r1.jpg`, title: "Real Estate", category: "Corporate", description: "Showcase properties with stunning visuals that highlight their best features." },
  
    // Special
    { id: 14, image: `${process.env.PUBLIC_URL}/media/maternity/b3.jpg`, title: "Maternity Shoot", category: "Special", description: "Capture the beauty and emotion of your journey to parenthood." },
    { id: 15, image: `${process.env.PUBLIC_URL}/media/cradle/c6.jpg`, title: "Cradle Shoot", category: "Special", description: "Celebrate the arrival of your little one with precious moments." },
    { id: 16, image: `${process.env.PUBLIC_URL}/media/drone/d19.jpg`, title: "Drone Shoot", category: "Special", description: "Experience breathtaking aerial perspectives with cutting-edge drone photography." },
  ];
  
  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  const filterCards = () => {
    if (filteredCategory === "All") return cards;
    return cards.filter((card) => card.category === filteredCategory);
  };

  return (
    <div className="p-5">
      <h2 className="text-3xl font-bold text-center mb-6">Explore Events</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-6 space-x-4 space-y-4 sm:space-y-0">
        {/* flex justify-center mb-6 space-x-4"> */}
        {["All", "Wedding", "Corporate", "Birthday", "Special"].map((category) => (
          <button
            key={category}
            onClick={() => setFilteredCategory(category)}
            className={`px-4 py-2 rounded-lg font-medium ${
              filteredCategory === category
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Card List */}
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
        {filterCards().map((card) => (
          // <div
          //   key={card.id}
          //   onClick={() => handleCardClick(card.id)}
          //   className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
          //   style={{ height: "400px" }}
          // >
          //   <img
          //     src={card.image}
          //     alt={card.title}
          //     // className="w-full h-48 sm:h-56 md:h-48 object-cover"
          //     className="w-full h-64 object-cover"
          //   />
          //   <div className="p-4">
          //     <h3 className="text-lg font-semibold">{card.title}</h3>
          //     <p className="text-gray-600">{card.description}</p>
          //   </div>
          // </div>
          <div
  key={card.id}
  onClick={() => handleCardClick(card.id)}
  className="cursor-pointer bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow flex flex-col"
  style={{ height: "400px" }} // Set the card height
>
  <img
    src={card.image}
    alt={card.title}
    className="w-full flex-grow object-cover" // Flex-grow ensures the image takes up available space
  />
  <div className="p-4">
    {/* <h3 className="text-lg font-semibold">{card.title}</h3>
    <p className="text-sm text-gray-600">{card.description}</p> */}
    <h3 className="text-base md:text-lg lg:text-xl font-semibold">{card.title}</h3> {/* Responsive title */}
    <p className="text-sm md:text-base lg:text-md text-gray-600">{card.description}</p> {/* Responsive description */}
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
