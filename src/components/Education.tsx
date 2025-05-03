import React, { useRef, useEffect, useState } from 'react';
import { BookOpen, Calendar } from 'lucide-react';
import { education } from '../data/resumeData';

interface EducationProps {
  darkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ darkMode }) => {
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
      id="education"
      className={`py-20 ${
        darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Academic <span className="text-blue-600">Background</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className={`${
                visibleItems.includes(index) ? 'animate-fadeInRight' : 'opacity-0'
              }`}
            >
              <div 
                className={`h-full p-6 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-700 border-gray-700' : 'bg-white border border-gray-200'
                } transition-transform duration-300 hover:scale-[1.02]`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-blue-100 text-blue-600">
                    <BookOpen size={16} />
                  </div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                </div>

                <div className="flex items-center mb-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                  <span className="block">{edu.institution}</span>
                  <span className="mx-2">•</span>
                  <span className="block">{edu.location}</span>
                </div>

                <div className="flex items-center mb-4 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar size={14} className="mr-2 text-blue-600" />
                  <span>{edu.period}</span>
                </div>

                {edu.description && (
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;