import React from 'react';
import { personalInfo } from '../data/resumeData';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer 
      className={`py-8 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="mb-6">
          <a 
            href="#home"
            className="text-2xl font-bold inline-block"
          >
            {personalInfo.name.split(' ')[0]}
            <span className="text-blue-600">.Bourkha</span>
          </a>
        </div>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a 
            href="#home"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Home
          </a>
          <a 
            href="#experience"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Experience
          </a>
          <a 
            href="#education"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Education
          </a>
          <a 
            href="#skills"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Skills
          </a>
          <a 
            href="#contact"
            className="hover:text-blue-600 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
        
        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center gap-1">
          <span>&copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</span>
          <div className="flex items-center ml-1">
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;