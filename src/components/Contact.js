import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

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

  return (
    <section id="contact" className="p-5">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <form onSubmit={handleSubmit} className="mt-2 space-y-4">
        <div>
          <label className="block">Name:</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block">Email:</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required 
          />
        </div>
        <div>
          <label className="block">Message:</label>
          <textarea 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded" 
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Send</button>
      </form>
    </section>
  );
};

export default Contact;
