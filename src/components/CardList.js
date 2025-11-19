import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Building, Cake, Star } from 'lucide-react';
import OptimizedImage from './OptimizedImage';

const CardList = () => {
  const navigate = useNavigate();

  const cards = [
    // Wedding
    {
      id: 1,
      folder: 'pre_wedding',
      filename: 'pw1.jpg',
      title: "Pre-Wedding",
      category: "Wedding",
      description: "Celebrate the journey of love before the big day with enchanting pre-wedding moments.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 2,
      folder: 'wedding',
      filename: 'm22.jpg',
      title: "Wedding",
      category: "Wedding",
      description: "Capture the essence of love and commitment on your special day.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 3,
      folder: 'reception',
      filename: 'r4.jpg',
      title: "Reception",
      category: "Wedding",
      description: "A glamorous evening celebrating the union with friends and family.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 4,
      folder: 'haldi',
      filename: 'h6.jpg',
      title: "Haldi Ceremony",
      category: "Wedding",
      description: "Relive the vibrant traditions and joyful moments of the Haldi ritual.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 5,
      folder: 'sangeeth',
      filename: 's12.jpg',
      title: "Sangeeth Night",
      category: "Wedding",
      description: "Dance, music, and joyous celebrations captured beautifully.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 17,
      folder: 'engagement',
      filename: 'e1.jpg',
      title: "Engagement",
      category: "Wedding",
      description: "Mark the beginning of your forever love story with cherished engagement moments.",
      icon: Heart,
      color: "from-pink-500 to-rose-500"
    },

    // Birthday
    {
      id: 6,
      folder: 'pre_birthday',
      filename: 'pb11.jpg',
      title: "Pre-Birthday",
      category: "Birthday",
      description: "Anticipate the big day with heartwarming pre-birthday celebrations.",
      icon: Cake,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 7,
      folder: 'birthday',
      filename: 'b5.jpg',
      title: "Birthday",
      category: "Birthday",
      description: "Cherish the joy and fun of your special day with vibrant memories.",
      icon: Cake,
      color: "from-yellow-500 to-orange-500"
    },

    // Corporate
    {
      id: 8,
      folder: 'event',
      filename: 'e1.jpg',
      title: "Event Photography",
      category: "Corporate",
      description: "Document your professional events with attention to every detail.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 9,
      folder: 'government',
      filename: 'g4.jpg',
      title: "Government Projects",
      category: "Corporate",
      description: "Highlight impactful initiatives with compelling visuals.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 11,
      folder: 'portfolio',
      filename: 'p2.jpg',
      title: "Portfolio Shoots",
      category: "Corporate",
      description: "Create a portfolio that reflects your unique style and expertise.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 12,
      folder: 'marketMedia',
      filename: 'mm1.jpg',
      title: "Marketing & Media",
      category: "Corporate",
      description: "Boost your brand's presence with creative marketing visuals.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 13,
      folder: 'realestate',
      filename: 'r1.jpg',
      title: "Real Estate",
      category: "Corporate",
      description: "Showcase properties with stunning visuals that highlight their best features.",
      icon: Building,
      color: "from-blue-500 to-indigo-500"
    },

    // Special
    {
      id: 14,
      folder: 'maternity',
      filename: 'b3.jpg',
      title: "Maternity Shoot",
      category: "Special",
      description: "Capture the beauty and emotion of your journey to parenthood.",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 15,
      folder: 'cradle',
      filename: 'c6.jpg',
      title: "Cradle Shoot",
      category: "Special",
      description: "Celebrate the arrival of your little one with precious moments.",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 16,
      folder: 'drone',
      filename: 'd19.jpg',
      title: "Drone Shoot",
      category: "Special",
      description: "Experience breathtaking aerial perspectives with cutting-edge drone photography.",
      icon: Star,
      color: "from-purple-500 to-pink-500"
    },
  ];

  const [filteredCategory, setFilteredCategory] = useState("All");

  const handleCardClick = (id) => {
    navigate(`/gallery/${id}`);
  };

  const filterCards = () => {
    if (filteredCategory === "All") return cards;
    return cards.filter((card) => card.category === filteredCategory);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="p-5">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our Services
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of photography services, each designed to capture your unique moments with artistic excellence.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center mb-12 space-x-4 space-y-4 sm:space-y-0">
        {["All", "Wedding", "Corporate", "Birthday", "Special"].map((category) => (
          <motion.button
            key={category}
            onClick={() => setFilteredCategory(category)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              filteredCategory === category
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-100 shadow-md hover:shadow-lg"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Card Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {filterCards().map((card) => {
          const IconComponent = card.icon;
          return (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="group cursor-pointer"
              onClick={() => handleCardClick(card.id)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:scale-105">
                {/* Image Container */}
                <div className="relative overflow-hidden h-64">
                  <OptimizedImage
                    folder={card.folder}
                    filename={card.filename}
                    alt={card.title}
                    size="medium"
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${card.color}`}>
                      {card.category}
                    </div>
                  </div>
                  {/* Icon Overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <IconComponent className="w-12 h-12 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-4 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CardList;
