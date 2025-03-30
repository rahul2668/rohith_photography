import React from 'react';

const ContactForm = () => {
  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <input type="text" placeholder="Name" className="p-2 border rounded-md" />
        <input type="email" placeholder="Email" className="p-2 border rounded-md" />
        <textarea placeholder="Message" className="p-2 border rounded-md" rows="5"></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Send</button>
      </form>
    </div>
  );
};

export default ContactForm;
