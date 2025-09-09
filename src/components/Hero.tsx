import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-surface-gradient"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 stagger-animation"
             style={{ '--stagger': '0' } as React.CSSProperties}>
          <div className="space-y-4" style={{ '--stagger': '1' } as React.CSSProperties}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white animate-fade-in">
              Hi, I'm{' '}
              <span className="bg-hero-gradient bg-clip-text text-transparent animate-pulse-glow">
                Alex Johnson
              </span>
            </h1>
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-200 font-light animate-fade-in-left">
              Full-Stack Developer & UI/UX Designer
            </h2>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed animate-fade-in-right"
             style={{ '--stagger': '2' } as React.CSSProperties}>
            I create exceptional digital experiences that combine beautiful design with 
            powerful functionality. Let's build something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in"
               style={{ '--stagger': '3' } as React.CSSProperties}>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('#projects')}
              className="min-w-[200px] hover-lift"
            >
              View My Work
            </Button>
            <Button 
              variant="contact" 
              size="lg"
              onClick={() => scrollToSection('#contact')}
              className="min-w-[200px] hover-lift"
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex justify-center space-x-6 pt-8 animate-slide-up"
               style={{ '--stagger': '4' } as React.CSSProperties}>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-125 transform p-2 rounded-full hover:bg-white/10"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <button
            onClick={() => scrollToSection('#about')}
            className="text-white hover:text-primary-glow transition-all duration-300 p-2 rounded-full hover:bg-white/10 hover:scale-110"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;