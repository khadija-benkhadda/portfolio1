import React, { useRef, useEffect, useState } from 'react';
import { skills, languages, achievements } from '../data/resumeData';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleSections.includes(index)) {
            setVisibleSections((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleSections]);

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      } transition-colors duration-300`}
    >
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Skills & <span className="text-blue-600">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-blue-600 rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Column */}
          <div
            ref={(el) => (sectionRefs.current[0] = el)}
            data-index={0}
            className={`${
              visibleSections.includes(0) ? 'animate-fadeInLeft' : 'opacity-0'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            <div className="space-y-8">
              {skills.map((skillCategory, categoryIndex) => (
                <div key={categoryIndex} className="mb-6">
                  <h4 className="text-lg font-medium mb-3 text-blue-600">
                    {skillCategory.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode
                            ? 'bg-gray-800 text-gray-200'
                            : 'bg-gray-100 text-gray-800'
                        } transition-transform duration-300 hover:scale-105 hover:shadow-md`}
                        style={{
                          animationDelay: `${(categoryIndex * 5 + skillIndex) * 0.05}s`,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & Achievements Column */}
          <div>
            <div
              ref={(el) => (sectionRefs.current[1] = el)}
              data-index={1}
              className={`mb-12 ${
                visibleSections.includes(1) ? 'animate-fadeInRight' : 'opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div 
                    key={index} 
                    className={`flex flex-col p-4 rounded-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-100'
                    } transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-blue-600">{language.level}</span>
                    </div>
                    <div 
                      className={`h-2 rounded-full bg-gray-300 dark:bg-gray-700 overflow-hidden`}
                    >
                      <div 
                        className="h-full bg-blue-600 rounded-full animate-skillBar"
                        style={{ 
                          width: language.level === "Natal" ? '100%' : 
                                language.level === "Avancé" ? '85%' : 
                                language.level === "Moyen" ? '65%' : '50%',
                          animationDelay: `${index * 0.1}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              ref={(el) => (sectionRefs.current[2] = el)}
              data-index={2}
              className={`${
                visibleSections.includes(2) ? 'animate-fadeInRight' : 'opacity-0'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index} 
                    className={`p-4 rounded-lg ${
                      darkMode ? 'bg-gray-800' : 'bg-gray-100'
                    } transition-transform duration-300 hover:scale-[1.02]`}
                  >
                    <h4 className="font-medium text-blue-600">{achievement.title}</h4>
                    {achievement.description && (
                      <p className="text-sm mt-1">{achievement.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;