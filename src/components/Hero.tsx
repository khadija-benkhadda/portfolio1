import React, { useEffect, useState } from 'react';
import { Download, Mail, MapPin, Phone, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/resumeData';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const [typedText, setTypedText] = useState('');
  const fullText = personalInfo.title;
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    let timerId: NodeJS.Timeout;

    const type = () => {
      const currentText = isDeleting
        ? fullText.substring(0, typedText.length - 1)
        : fullText.substring(0, typedText.length + 1);

      setTypedText(currentText);

      if (!isDeleting && currentText === fullText) {
        // Pause at the end before deleting
        setTimeout(() => {
          setShowCursor(true);
        }, 1000);
        return;
      }

      const typingSpeed = isDeleting ? 30 : 100;
      timerId = setTimeout(type, typingSpeed);
    };

    timerId = setTimeout(type, 1000);

    // Blink cursor effect
    const blinkCursorTimerId = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearTimeout(timerId);
      clearInterval(blinkCursorTimerId);
    };
  }, [typedText, fullText]);

  return (
    <section 
      id="home" 
      className={`min-h-screen pt-28 pb-16 px-4 flex flex-col justify-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h2 className="text-xl mb-1 text-blue-600 font-medium tracking-wide">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              {personalInfo.name}
            </h1>
            
            <div className="h-8 mb-6">
              <h3 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300">
                {typedText}
                <span className={`ml-1 inline-block w-2 h-6 bg-blue-600 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}></span>
              </h3>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed max-w-xl">
              {personalInfo.profile}
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a 
                href="#contact"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <Mail size={18} /> Contact Me
              </a>

              <a 
                href="/cv.pdf" 
                download
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${
                  darkMode 
                    ? 'bg-gray-800 text-white hover:bg-gray-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                } border border-gray-300 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <Download size={18} />
                Download CV
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-blue-600" />
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-blue-600" />
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {personalInfo.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} className="text-blue-600" />
                <a 
                  href={`https://linkedin.com/in/${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors duration-300"
                >
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-float">
            <div className={`w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ${
              darkMode ? 'shadow-[0_0_30px_rgba(59,130,246,0.3)]' : 'shadow-[0_0_30px_rgba(37,99,235,0.15)]'
            } transition-all duration-300`}>
              <img 
                src="/public/abd.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;