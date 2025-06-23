// src/context/LanguageContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations = {
  en: {
    // Header
    'nav.home': 'Home',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'SOFTWARE DEVELOPER',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.subtitle': 'Technologies and tools I master to create complete digital solutions',
    'skills.fullstack': 'Full Stack',
    'skills.agents': 'IA Agents',
    'skills.apidb': 'API and Database',
    'skills.mobile': 'Mobile',
    'skills.architecture': 'Architecture', 
    'skills.devops': 'DevOps',
    
    // Projects
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A selection of my most recent work and projects that demonstrate my technical skills',
    'projects.demo': 'Demo',
    'projects.code': 'Code',
    
    // Project descriptions
    'projects.ecommerce.title': 'E-Commerce Platform',
    'projects.ecommerce.desc': 'Complete e-commerce platform with admin panel, inventory management and integrated payment gateway.',
    
    'projects.taskmanager.title': 'Task Management App',
    'projects.taskmanager.desc': 'Mobile task management app with real-time synchronization, team collaboration and push notifications.',
    
    'projects.analytics.title': 'Analytics Dashboard',
    'projects.analytics.desc': 'Interactive analytics dashboard with real-time charts, advanced filters and report export.',
    
    'projects.social.title': 'Social Media Platform',
    'projects.social.desc': 'Social network with posts, stories, real-time chat and notification system features.',
    
    'projects.lms.title': 'Learning Management System',
    'projects.lms.desc': 'Learning management system with interactive courses, assessments and progress tracking.',
    
    'projects.weather.title': 'Weather App',
    'projects.weather.desc': 'Weather app with detailed forecasts, interactive maps and personalized weather alerts.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.subtitle': 'Do you have a project in mind? Let\'s talk and create something amazing together!',
    'contact.info': 'Contact Information',
    'contact.form': 'Send me a message',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.button': 'Chat on WhatsApp',
    'contact.schedule': 'Schedule a Meeting',
    'contact.book': 'Book a Meeting',
    'contact.social.media': 'Follow me on social media',
    'contact.social.community': 'Follow me on community',
    'contact.placeholder.name': 'Your name',
    'contact.placeholder.email': 'your@email.com',
    'contact.placeholder.message': 'Tell me about your project...',
    
    // Footer
    'footer.rights': '© 2024 Federico Monfasani. All rights reserved.',
    'footer.made': 'Made with',
    'footer.and': 'and lots of',
  },
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'DESARROLLADOR DE SOFTWARE',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones digitales completas',
    'skills.fullstack': 'Full Stack',
    'skills.agents': 'Agentes IA',
    'skills.apidb': 'API y Base de Datos',
    'skills.mobile': 'Móvil',
    'skills.architecture': 'Arquitectura',
    'skills.devops': 'DevOps',
    
    // Projects
    'projects.title': 'Proyectos Destacados',
    'projects.subtitle': 'Una selección de mis trabajos más recientes y proyectos que demuestran mis habilidades técnicas',
    'projects.demo': 'Demo',
    'projects.code': 'Código',
    
    // Project descriptions
    'projects.ecommerce.title': 'Plataforma E-Commerce',
    'projects.ecommerce.desc': 'Plataforma e-commerce completa con panel de administración, gestión de inventario y pasarela de pago integrada.',
    
    'projects.taskmanager.title': 'App de Gestión de Tareas',
    'projects.taskmanager.desc': 'App móvil de gestión de tareas con sincronización en tiempo real, colaboración en equipo y notificaciones push.',
    
    'projects.analytics.title': 'Dashboard de Analytics',
    'projects.analytics.desc': 'Dashboard de analytics interactivo con gráficos en tiempo real, filtros avanzados y exportación de reportes.',
    
    'projects.social.title': 'Plataforma de Redes Sociales',
    'projects.social.desc': 'Red social con funciones de posts, historias, chat en tiempo real y sistema de notificaciones.',
    
    'projects.lms.title': 'Sistema de Gestión de Aprendizaje',
    'projects.lms.desc': 'Sistema de gestión de aprendizaje con cursos interactivos, evaluaciones y seguimiento de progreso.',
    
    'projects.weather.title': 'App del Clima',
    'projects.weather.desc': 'App del clima con pronósticos detallados, mapas interactivos y alertas meteorológicas personalizadas.',
    
    // Contact
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? ¡Hablemos y hagamos algo increíble juntos!',
    'contact.info': 'Información de Contacto',
    'contact.form': 'Envíame un mensaje',
    'contact.name': 'Nombre',
    'contact.email': 'Email',
    'contact.message': 'Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.phone': 'Teléfono',
    'contact.location': 'Ubicación',
    'contact.whatsapp': 'WhatsApp',
    'contact.whatsapp.button': 'Chatear por WhatsApp',
    'contact.schedule': 'Agendar una Reunión',
    'contact.book': 'Agendar Reunión',
    'contact.social.media': 'Sígueme en redes sociales',
    'contact.social.community': 'Sígueme en comunidades',
    'contact.placeholder.name': 'Tu nombre',
    'contact.placeholder.email': 'tu@email.com',
    'contact.placeholder.message': 'Cuéntame sobre tu proyecto...',
    
    // Footer
    'footer.rights': '© 2024 Federico Monfasani. Todos los derechos reservados.',
    'footer.made': 'Desarrollado con',
    'footer.and': 'y mucho',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Inglés por defecto
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};