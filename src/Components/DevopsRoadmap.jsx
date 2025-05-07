import React from 'react';
import Section from './Section';
import devopsImage from '../assets/devops1.jpg';
import { devopsSections } from '../../constants';

const DevOpsRoadmap = () => {

  return (
    <div className="flex flex-col p-10 justify-center max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        DevOps Roadmap 2025: The Complete Guide
      </h1>

      <img src={devopsImage} alt="devops-Development" className="m-auto mt-6 rounded-lg shadow-lg" />

      <p className="mt-4 text-lg">
        This roadmap outlines the key stages in becoming a proficient DevOps engineer. It spans basic concepts like version control and system administration to advanced topics such as cloud computing, CI/CD, and container orchestration.
      </p>

      {devopsSections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          listItems={section.listItems}
        />
      ))}
    </div>
  );
};

export default DevOpsRoadmap;

