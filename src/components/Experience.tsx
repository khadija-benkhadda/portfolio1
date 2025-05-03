import React, { useRef, useEffect, useState } from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/resumeData';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  return (
    <section
      id="experience"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Professional <span className="text-blue-600">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div 
            className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-px transform md:-translate-x-[0.5px] ${
              darkMode ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          ></div>

          {/* Timeline Items */}
          <div className="relative space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Circle */}
                <div className="absolute left-0 md:left-1/2 w-6 h-6 bg-blue-600 rounded-full transform -translate-x-1/2 translate-y-4 z-10 shadow-lg"></div>

                {/* Experience Card */}
                <div 
                  className={`md:w-1/2 ml-8 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }
                  ${visibleItems.includes(index) ? 'animate-fadeInUp' : 'opacity-0'}`}
                >
                  <div 
                    className={`p-6 rounded-lg shadow-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-white border border-gray-200'
                    } transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                        <Briefcase size={16} />
                      </div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                    </div>

                    <div className="flex items-center mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="block">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="block">{exp.location}</span>
                    </div>

                    <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                      <Calendar size={14} className="mr-2 text-blue-600" />
                      <span>{exp.period}</span>
                    </div>

                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="inline-block w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;