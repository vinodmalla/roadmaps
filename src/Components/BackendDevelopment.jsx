import React from 'react';
import web from "../web.webp";
import wb2 from '../wb2.jpg';
import backendroadmap from '../assets/backendroadmap.jpg';
import Section from './Section';
import ProjectIdeas from './ProjectIdeas';
import { backendSections } from '../../constants';

const BackendDevelopment = () => {
  return (
    <div className="flex flex-col p-10 justify-center max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center sm:text-4xl md:text-5xl">
        Backend Developer Roadmap 2025:<br /> The Complete Guide
      </h1>

      <img src={backendroadmap} alt="web-Development" className="w-1/2 m-auto mt-6 rounded-lg shadow-lg" />

      <p className="mt-4 text-lg">
        This roadmap is designed for individuals who are new to programming and want to become proficient in backend development. It breaks down essential topics into clear, manageable steps with detailed explanations to guide your learning process.
      </p>

      {backendSections.map((section, index) => (
        <Section
          key={index}
          title={section.title}
          description={section.description}
          listItems={section.listItems}
        />
      ))}
    </div>
  );
}

export default BackendDevelopment;
