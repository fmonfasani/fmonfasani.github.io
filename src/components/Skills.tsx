
import { Code2, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Globe size={32} />,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend",
      icon: <Server size={32} />,
      skills: ["Node.js", "Python", "Java", "Express", "Django", "Spring Boot", "REST APIs"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Base de Datos",
      icon: <Database size={32} />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Supabase"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "Mobile",
      icon: <Smartphone size={32} />,
      skills: ["React Native", "Flutter", "Ionic", "Expo", "Android Studio"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "DevOps",
      icon: <Code2 size={32} />,
      skills: ["Docker", "AWS", "Git", "GitHub Actions", "Vercel", "Netlify"],
      color: "from-gray-600 to-gray-800"
    },
    {
      title: "Diseño",
      icon: <Palette size={32} />,
      skills: ["Figma", "Adobe XD", "UI/UX", "Responsive Design", "Wireframing"],
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#121E2F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales completas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="group hover:scale-105 transition-all duration-300"
            >
              <div className="bg-gray-800/50 rounded-xl shadow-lg hover:shadow-xl p-6 border border-gray-600 backdrop-blur-sm">
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm font-medium hover:bg-gray-600 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
