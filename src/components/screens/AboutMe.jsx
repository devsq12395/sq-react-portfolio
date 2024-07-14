import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

const AboutMe = () => {
  return (
    <div className="relative h-full w-full py-10 grid gap-4 md:grid-cols-2">
      <div className="flex flex-col items-center justify-center col-span-2 ml-3 md:col-span-1 md:self-start">
        <h1 className="text-3xl md:text-4xl font-bold">Hello, I'm</h1>
        <h2 className="text-4xl md:text-6xl font-bold mt-2">John Doe</h2>
        <div className="border-t-2 border-gray-300 my-4 w-1/2"></div>
        <p className="text-lg md:text-xl">Professional Software Engineer</p>
        <p className="text-lg md:text-xl">Website designing and building</p>
        <div className="border-t-2 border-gray-300 my-4 w-1/2"></div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="#" className="text-gray-500 hover:text-gray-900">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        <div className="mt-4">
          <a
            href="/path/to/cv.pdf"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </div>
      <div className="flex items-center justify-center md:items-end md:justify-end col-span-2 md:col-span-1">
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-24 h-24 md:w-48 md:h-48 rounded-full object-cover"
        />
      </div>
    </div>
  );
};

export default AboutMe;
