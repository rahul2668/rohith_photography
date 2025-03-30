import React from 'react';

const Description = () => {
  return (
    <section
      className="bg-cover bg-center py-12 px-4 sm:px-6 lg:px-8 mt-0 flex items-center justify-center"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/media/bg2.jpg')`, // Replace with the background image path
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-white bg-opacity-70 shadow-lg rounded-lg p-6 sm:p-8 w-full sm:w-4/5 lg:w-3/4 mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-gray-800">
            We Are Providing Exceptional Photography Services
          </h2>
          <p className="text-base sm:text-md text-gray-600 leading-relaxed">
            At <span className="font-semibold text-gray-900">Rohith Photography</span>, we pride ourselves on offering a wide range of professional photography services to capture every special moment in your life. From weddings, Haldi, and Sangeeth ceremonies to corporate events, maternity shoots, portfolio creation, and more, we ensure each memory is preserved beautifully.
          </p>
          <p className="text-base sm:text-md text-gray-900 leading-relaxed mt-4">
            Our team is committed to turning your moments into timeless treasures, with a keen eye for detail and a passion for storytelling through the lens. Whether it's vibrant celebrations or serene portraits, we have you covered.
          </p>
          <p className="text-base sm:text-md text-gray-900 leading-relaxed mt-4">
            Let us bring your vision to life and make your events unforgettable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
