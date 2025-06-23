// src/components/Projects.tsx
import { ExternalLink, Github, Globe, Database, Smartphone, Server } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'ecommerce',
      icon: Globe,
      color: 'bg-blue-600',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'taskmanager',
      icon: Smartphone,
      color: 'bg-green-600',
      image: '/api/placeholder/400/250',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'analytics',
      icon: Database,
      color: 'bg-purple-600',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'D3.js', 'Python', 'MongoDB'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'social',
      icon: Globe,
      color: 'bg-red-600',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'Socket.io', 'Redis', 'AWS'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'lms',
      icon: Server,
      color: 'bg-orange-600',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Django', 'PostgreSQL', 'Docker'],
      demoUrl: '#',
      codeUrl: '#'
    },
    {
      id: 'weather',
      icon: Smartphone,
      color: 'bg-cyan-600',
      image: '/api/placeholder/400/250',
      technologies: ['Flutter', 'OpenWeather API', 'SQLite', 'Maps API'],
      demoUrl: '#',
      codeUrl: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Project Icon */}
                <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <div className={`w-16 h-16 ${project.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent size={32} className="text-white" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {t(`projects.${project.id}.title`)}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {t(`projects.${project.id}.desc`)}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demoUrl}
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      <span>{t('projects.demo')}</span>
                    </a>
                    <a
                      href={project.codeUrl}
                      className="flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>{t('projects.code')}</span>
                    </a>
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

export default Projects;