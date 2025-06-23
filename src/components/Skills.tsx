// src/components/Skills.tsx
import { Globe, Server, Database, Smartphone, Terminal, Palette } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      icon: Globe,
      title: t('skills.frontend'),
      color: 'bg-blue-600',
      skills: ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'HTML5', 'CSS3']
    },
    {
      icon: Server,
      title: t('skills.backend'),
      color: 'bg-green-600',
      skills: ['Node.js', 'Python', 'Java', 'Express', 'Django', 'Spring Boot', 'REST APIs']
    },
    {
      icon: Database,
      title: t('skills.database'),
      color: 'bg-purple-600',
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase', 'Supabase']
    },
    {
      icon: Smartphone,
      title: t('skills.mobile'),
      color: 'bg-orange-600',
      skills: ['React Native', 'Flutter', 'Ionic', 'Expo', 'Android Studio']
    },
    {
      icon: Terminal,
      title: t('skills.devops'),
      color: 'bg-gray-600',
      skills: ['Docker', 'AWS', 'Git', 'GitHub Actions', 'Vercel', 'Netlify']
    },
    {
      icon: Palette,
      title: t('skills.design'),
      color: 'bg-pink-600',
      skills: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Wireframing']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#1a1a2e] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('skills.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-medium hover:bg-teal-600 hover:text-white transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;