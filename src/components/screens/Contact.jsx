import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="relative h-full w-full p-8 flex flex-col justify-center items-center" style={{ height: '100vh' }}>
      <div className="flex flex-col lg:flex-row w-full" style={{ width: '60%' }}>
        <div className="lg:w-1/2 lg:pr-4 mb-4 lg:mb-0">
          <h2 className="text-3xl font-bold">Send me a message</h2>
          <form className="mt-4 space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="lg:w-1/2 mb-4 lg:mb-0">
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div className="lg:w-1/2">
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-medium text-gray-700">Subject</label>
              <input
                type="text"
                name="subject"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                Mail Me
              </button>
            </div>
          </form>
        </div>
        <div className="border-l border-gray-300 mx-4 hidden lg:block"></div>
        <div className="lg:w-1/2 lg:pl-4">
          <h2 className="text-3xl font-bold">Contact Details</h2>
          <div className="flex flex-col mt-4 space-y-4">
            <div className="flex items-center">
              <FontAwesomeIcon icon={faEnvelope} size="2x" className="mr-2 text-gray-500" />
              <span className="text-lg md:text-xl">john.doe@example.com</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faPhone} size="2x" className="mr-2 text-gray-500" />
              <span className="text-lg md:text-xl">+123 456 7890</span>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faLinkedin} size="2x" className="mr-2 text-gray-500" />
              <a href="#" className="text-lg md:text-xl text-gray-500 hover:text-gray-900">LinkedIn</a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faGithub} size="2x" className="mr-2 text-gray-500" />
              <a href="#" className="text-lg md:text-xl text-gray-500 hover:text-gray-900">GitHub</a>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon icon={faTwitter} size="2x" className="mr-2 text-gray-500" />
              <a href="#" className="text-lg md:text-xl text-gray-500 hover:text-gray-900">Twitter</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
