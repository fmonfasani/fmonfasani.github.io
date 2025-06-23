// src/components/Skills.tsx
import { Globe, Bot, Database, Smartphone, Building2, Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.fullstack'),
      icon: <Globe size={32} />,
      skills: ["React", "TypeScript", "Next.js", "Vue.js", "Node.js", "Python", "Django", "Express", "Tailwind CSS", "Figma", "UI/UX"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: t('skills.agents'),
      icon: <Bot size={32} />,
      skills: ["OpenAI", "Claude AI", "LangChain", "Pinecone", "Hugging Face", "TensorFlow", "PyTorch", "RAG", "Vector DB"],
      color: "from-purple-500 to-violet-500"
    },
    {
      title: t('skills.apidb'),
      icon: <Database size={32} />,
      skills: ["REST APIs", "GraphQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "Prisma"],
      color: "from-red-500 to-rose-500"
    },
    {
      title: t('skills.mobile'),
      icon: <Smartphone size={32} />,
      skills: ["React Native", "Flutter", "Ionic", "Expo", "Android Studio", "Swift", "Kotlin"],
      color: "from-orange-500 to-amber-500"
    },
    {
      title: t('skills.architecture'),
      icon: <Building2 size={32} />,
      skills: ["Microservices", "Event Driven", "Clean Architecture", "CQRS", "Domain Driven", "Serverless", "Event Sourcing"],
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: t('skills.devops'),
      icon: <Terminal size={32} />,
      skills: ["Docker", "AWS", "Azure", "Git", "GitHub Actions", "Vercel", "Netlify", "CI/CD"],
      color: "from-gray-500 to-gray-700"
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
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-400 transition-all duration-300 hover:shadow-lg hover:shadow-teal-400/20 group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {IconComponent}
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