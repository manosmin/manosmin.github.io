import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa6";
import { useIsVisible } from "../App";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [modal, setModal] = useState({
    isOpen: false,
    type: '', // 'success' or 'error'
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await emailjs
      .send(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAIL_USER_ID
      )
      .then((response) => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setModal({
          isOpen: true,
          type: 'success',
          message: 'Message sent successfully!'
        });
      })
      .catch((error) => {
        setModal({
          isOpen: true,
          type: 'error',
          message: 'Failed to send message. Please try again.'
        });
      });
  };

  const [containerRef1, isVisible1] = useIsVisible({});

  const [containerRef2, isVisible2] = useIsVisible({});
  
  const [containerRef6, isVisible6] = useIsVisible({});
  return (
    <div
      id="contact"
      className="bg-primary text-primary p-10 py-24 "
    >
      <div className="flex justify-between">
        <h2
          ref={containerRef1}
          className={`opacity-0 text-2xl font-semibold ${
            isVisible1 && "animate-drop-in"
          }`}
          style={{ "--delay": 0.2 + "s" }}
        >
          <p className="flex justify-center items-center">
            <FaEnvelope className="mr-2" /> Contact
          </p>
        </h2>
      </div>
      <form onSubmit={handleSubmit} ref={containerRef2} className={`opacity-0 ${isVisible2 && "animate-fade-in"} mt-8 space-y-4`} style={{ "--delay": 0.6 + "s" }}>
        <p>
          Alternatively, you can use this form to send me a message.
        </p>
        <div>
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-input rounded bg-input"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-input rounded bg-input"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-input rounded bg-input"
            required
          ></textarea>
        </div>
        <button
          ref={containerRef6}
          type="submit"
          style={{ "--delay": 1 + "s" }}
          className={`${
            isVisible6 && "animate-drop-in"
          } opacity-0 bg-button-primary hover:bg-button-primary text-button-primary py-2 px-4 rounded-full`}
        >
          Send
        </button>
      </form>

      {/* Modal */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm mx-4 shadow-2xl">
            <div className="flex items-center mb-4">
              {modal.type === 'success' ? (
                <div className="flex items-center text-green-600 dark:text-green-400">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <h3 className="text-lg font-semibold">Success</h3>
                </div>
              ) : (
                <div className="flex items-center text-red-600 dark:text-red-400">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <h3 className="text-lg font-semibold">Error</h3>
                </div>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {modal.message}
            </p>
            <button
              onClick={() => setModal({ isOpen: false, type: '', message: '' })}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
