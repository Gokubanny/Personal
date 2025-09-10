import { Card, CardContent } from '@/components/ui/card';
import { Code2, Palette, Smartphone, Database, Globe, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Vue.js',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Python, PostgreSQL, MongoDB',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript, WebAPI',
    },
  ];

  return (
    <section id="about" className="py-20 bg-surface-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-left">
            I'm a passionate developer with 5+ years of experience creating digital solutions 
            that make a difference. I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 stagger-animation">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in hover-lift"
              style={{ '--stagger': index } as React.CSSProperties}
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <skill.icon className="w-8 h-8 text-primary transition-all duration-300 group-hover:scale-110" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {skill.title}
                </h3>
                <p className="text-muted-foreground">
                  {skill.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-lg p-8 shadow-card border border-border/50 animate-slide-up hover-lift">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;