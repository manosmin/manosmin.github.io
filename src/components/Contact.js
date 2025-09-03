import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { FaEnvelope } from "react-icons/fa6";
import { useIsVisible } from "../App";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
        alert("Message sent successfully :D");
      })
      .catch((error) => {
        alert("Failed to send message :(");
      });
  };

  const [containerRef1, isVisible1] = useIsVisible({});

  const [containerRef2, isVisible2] = useIsVisible({});

  const [containerRef3, isVisible3] = useIsVisible({});

  const [containerRef4, isVisible4] = useIsVisible({});

  const [containerRef5, isVisible5] = useIsVisible({});

  const [containerRef6, isVisible6] = useIsVisible({});

  return (
    <div
      id="contact"
      className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 p-10 py-24 "
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
      <form onSubmit={handleSubmit} className="mt-8 cursor-normal space-y-4">
        <p
          ref={containerRef2}
          className={`opacity-0 ${isVisible2 && "animate-fade-in"}`}
          style={{ "--delay": 0.4 + "s" }}
        >
          You can send me a message through this form.
        </p>
        <div
          ref={containerRef3}
          className={`opacity-0 ${isVisible3 && "animate-fade-in"}`}
          style={{ "--delay": 0.4 + "s" }}
        >
          <label htmlFor="name" className="block">
            Name:
          </label>
          <input
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div
          ref={containerRef4}
          className={`opacity-0 ${isVisible4 && "animate-fade-in"}`}
          style={{ "--delay": 0.4 + "s" }}
        >
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        <div
          ref={containerRef5}
          className={`opacity-0 ${isVisible5 && "animate-fade-in"}`}
          style={{ "--delay": 0.4 + "s" }}
        >
          <label htmlFor="message" className="block">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded bg-gray-200 dark:bg-gray-800 dark:border-gray-700"
            required
          ></textarea>
        </div>
        <button
          ref={containerRef6}
          type="submit"
          style={{ "--delay": 0.4 + "s" }}
          className={`${
            isVisible6 && "animate-fade-in"
          } opacity-0 bg-blue-700 hover:bg-blue-600 text-gray-100 py-2 px-4 rounded-full`}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
