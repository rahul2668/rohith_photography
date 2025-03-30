// import React from 'react';

// const Inquiry = () => {
//   return (
//     <div className="bg-gray-100 py-8">
//       <div className="max-w-4xl mx-auto text-center bg-white p-6 shadow-lg rounded-lg">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Get a Photography Quotation</h2>
//         <p className="text-lg text-gray-600 mb-6">
//           For any inquiries or to get a custom quotation, feel free to reach out to us. We’d love to capture your moments!
//         </p>
//         <p className="text-lg text-gray-700 mb-2">
//           <strong>Email:</strong> <a href="mailto:rohithphotography1@gmail.com" className="text-blue-500">rohithphotography1@gmail.com</a>
//         </p>
//         <p className="text-lg text-gray-700">
//           <strong>Phone:</strong> <a href="tel:+91 9951947756" className="text-green-500">+91 9951947756</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Inquiry;

import React from 'react';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Inquiry = () => {
  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto text-center bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get a Photography Quotation</h2>
        <p className="text-lg text-gray-600 mb-6">
          For any inquiries or to get a custom quotation, feel free to reach out to us. We’d love to capture your moments!
        </p>
        <p className="text-lg text-gray-700 mb-2 flex items-center justify-center">
          <FaEnvelope className="mr-2 text-blue-500" />
          <a href="mailto:rohithphotography1@gmail.com" className="text-blue-500">rohithphotography1@gmail.com</a>
        </p>
        <p className="text-lg text-gray-700 flex items-center justify-center">
          <FaPhoneAlt className="mr-2 text-green-500" />
          <a href="tel:+919951947756" className="text-green-500">+91 9951947756</a>
        </p>
      </div>
    </div>
  );
};

export default Inquiry;
