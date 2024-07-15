import React from 'react';

const projectsData = [
  {
    title: 'Project One',
    description: 'This is a brief description of Project One.',
    imageUrl: 'https://via.placeholder.com/150',
    websiteUrl: 'https://example.com/project-one',
    repoUrl: 'https://github.com/example/project-one',
  },
  {
    title: 'Project Two',
    description: 'This is a brief description of Project Two.',
    imageUrl: 'https://via.placeholder.com/150',
    websiteUrl: 'https://example.com/project-two',
    repoUrl: 'https://github.com/example/project-two',
  },
];

const OtherProjects = () => {
  return (
    <div className="relative h-full w-full p-8 flex flex-col justify-center items-center" style={{ height: '100vh' }}>
      <h2 className="text-3xl font-bold mb-8">My contributions to company A</h2>
      <div className="grid gap-8 w-full" style={{ width: '60%' }}>
        {projectsData.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6">
            <img src={project.imageUrl} alt={project.title} className="w-32 h-32 object-cover rounded-full md:mr-6 mb-4 md:mb-0" />
            <div className="flex flex-col text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex space-x-4">
                <a href={project.websiteUrl} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Website</a>
                <a href={project.repoUrl} className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Repository</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProjects;
