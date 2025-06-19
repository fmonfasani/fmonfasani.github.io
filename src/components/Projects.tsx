
import { ExternalLink, Github, Smartphone, Globe, Database } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Plataforma de comercio electrónico completa con panel de administración, gestión de inventario y pasarela de pagos integrada.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Globe size={24} />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Task Management App",
      description: "Aplicación móvil de gestión de tareas con sincronización en tiempo real, colaboración en equipo y notificaciones push.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&q=80",
      technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Smartphone size={24} />,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Analytics Dashboard",
      description: "Dashboard interactivo para análisis de datos con gráficos en tiempo real, filtros avanzados y exportación de reportes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
      technologies: ["Vue.js", "D3.js", "Python", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Database size={24} />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Social Media Platform",
      description: "Red social con funcionalidades de posts, stories, chat en tiempo real y sistema de notificaciones.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
      technologies: ["Next.js", "Socket.io", "Redis", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Globe size={24} />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Learning Management System",
      description: "Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento de progreso.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
      technologies: ["React", "Django", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Database size={24} />,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Weather App",
      description: "Aplicación del clima con predicciones detalladas, mapas interactivos y alertas meteorológicas personalizadas.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&q=80",
      technologies: ["Flutter", "OpenWeather API", "SQLite", "Maps API"],
      liveUrl: "#",
      githubUrl: "#",
      icon: <Smartphone size={24} />,
      color: "from-cyan-500 to-blue-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una selección de mis trabajos más recientes y proyectos que demuestran mis habilidades técnicas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute top-4 left-4 w-12 h-12 rounded-lg bg-gradient-to-r ${project.color} flex items-center justify-center text-white`}>
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Github size={16} />
                    <span className="text-sm font-medium">Código</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
