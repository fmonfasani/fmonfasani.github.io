
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-[#121E2F] pt-20 font-nunito overflow-hidden">
      <div className="flex items-center justify-center max-w-[90%] px-5">
        <div className="flex flex-col md:flex-row items-center">
          {/* Logo FM */}
          <div className="mr-0 md:mr-8 mb-5 md:mb-0">
            <span className="text-[4rem] md:text-[8rem] font-bold text-[#00A69D] leading-none whitespace-nowrap">
              FM
            </span>
          </div>
          
          {/* Nombre y título */}
          <div className="text-center md:text-left">
            <p className="text-[1.5rem] md:text-[2.8rem] font-bold text-white margin-0 leading-tight">
              FEDERICO
            </p>
            <p className="text-[1.5rem] md:text-[2.8rem] font-bold text-white margin-0 leading-tight">
              MONFASANI
            </p>
            <p className="text-[0.9rem] md:text-[1.2rem] text-[#C0C0C0] mt-2 md:mt-3 tracking-[1px] md:tracking-[2px] uppercase">
              SOFTWARE DEVELOPER
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('skills')}
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            <ArrowDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
