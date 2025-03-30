import React from 'react';
import { FaInstagram, FaYoutube, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const ContactUs = () => {
  const socialMediaLinks = [
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/rohith_photography15?igsh=MW9hbjZqbXczbTNrdw==',
      icon: <FaInstagram />,
      color: 'text-pink-500',
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@ramagirirohith6668?si=2CA99yYOX2irzPCU',
      icon: <FaYoutube />,
      color: 'text-red-500',
    },
    {
      platform: 'Email',
      url: 'rohithphotography1@gmail.com',
      icon: <FaEnvelope />,
      color: 'text-gray-700',
    },
    {
      platform: 'WhatsApp',
      url: 'https://wa.me/9951947756',
      icon: <FaWhatsapp />,
      color: 'text-green-500',
    },
  ];

  return (
    <div className="bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
      <div className="flex justify-center space-x-6">
        {socialMediaLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-4xl ${link.color} hover:scale-110 transition-transform`}
            title={link.platform}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
