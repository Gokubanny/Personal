import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://fafqbzjpeezdzgtibmcz.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'omatulemarvellous721@gmail.com',
      href: 'mailto:omatulemarvellous721@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '09135114075',
      href: 'tel:+2349135114075',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Yaba Lagos State, Nigeria',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-surface-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-left">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-card animate-fade-in-left hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Send me a message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[120px]"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="hero" 
                  size="lg" 
                  className="w-full hover-lift"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 animate-fade-in">
                Let's connect
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8 animate-fade-in-left">
                I'm always interested in hearing about new projects and opportunities. 
                Whether you're a company looking to hire, or you're a fellow developer 
                who wants to collaborate, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6 stagger-animation">
              {contactInfo.map((info, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 bg-card/50 backdrop-blur-sm border-border/50 animate-scale-in hover-lift"
                  style={{ '--stagger': index } as React.CSSProperties}
                >
                  <CardContent className="p-6 flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <info.icon className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-hero-gradient text-primary-foreground shadow-glow animate-slide-up hover-lift">
              <CardContent className="p-8 text-center">
                <h4 className="text-xl font-semibold mb-2">Ready to start a project?</h4>
                <p className="mb-4 opacity-90">
                  Let's discuss your ideas and create something amazing together.
                </p>
                <Button 
                  variant="contact" 
                  size="lg"
                  className="bg-white/20 border-white/40 text-white hover:bg-white hover:text-primary hover-scale"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Start a Conversation
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;