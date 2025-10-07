import React from 'react';

const About = ({ description }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-2">About this event</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;
