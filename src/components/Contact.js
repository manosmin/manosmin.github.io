import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaRegEnvelope } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_3pgp9iw', // Replace with your Service ID
      'template_l8a1qcw', // Replace with your Template ID
      formData,
      'loiwkxN7InuHHoddp' // Replace with your User ID
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      alert('Message sent successfully!');
    }).catch((error) => {
      console.error('FAILED...', error);
      alert('Failed to send the message, please try again later.');
    });
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className='bg-gray-900 text-gray-200 dark:bg-gray-200 dark:text-gray-900 p-10 mb-10'>
      <div id="contact" onClick={toggleFormVisibility} className="cursor-pointer">
        <h2 className="animate-slide-in opacity-0 text-2xl font-semibold" style={{ "--delay": 1.2 + "s" }}>
        <FaRegEnvelope className='inline'/> Contact
        </h2>
    </div>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mt-8 cursor-normal space-y-4" >
          <p className='animate-fade-in opacity-0' style={{ "--delay":  0.2 + "s" }}>You can also send me a message through this form. Yes, it actually works! 😎</p>
          <div className='animate-slide-in opacity-0' style={{ "--delay":  0.6 + "s" }}>
            <label className="block">Name:</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 dark:bg-gray-300 dark:border-gray-400" 
              required 
            />
          </div>
          <div className='animate-slide-in-left opacity-0' style={{ "--delay":  1 + "s" }}>
            <label className="block">Email:</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 dark:bg-gray-300 dark:border-gray-400" 
              required 
            />
          </div>
          <div className='animate-slide-in opacity-0' style={{ "--delay":  1.4 + "s" }}>
            <label className="block">Message:</label>
            <textarea 
              name="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-700 rounded bg-gray-800 dark:bg-gray-300 dark:border-gray-400" 
              required
            ></textarea>
          </div>
          <button type="submit" style={{ "--delay":  1.8 + "s" }} className="animate-fade-in opacity-0 bg-blue-700 hover:bg-blue-600 text-gray-100 font-semibold py-2 px-4 rounded-full">Send</button>
        </form>
      )}
    </div>
  );
};

export default Contact;
