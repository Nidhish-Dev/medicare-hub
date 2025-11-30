import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Shield, Clock, Award, Pill, Microscope, Stethoscope } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: <Pill className="h-6 w-6" />,
      title: 'Trusted Pharmacy',
      description: 'Genuine medicines with fast delivery to your doorstep',
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Home Sample Collection',
      description: 'Safe and hygienic sample pickup at your convenience',
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Verified Doctors',
      description: 'Book appointments with experienced healthcare professionals',
    },
  ];

  const stats = [
    { value: '10K+', label: 'Happy Patients' },
    { value: '50+', label: 'Expert Doctors' },
    { value: '100+', label: 'Lab Tests' },
    { value: '24/7', label: 'Support' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Heart className="h-4 w-4" />
                <span>Your Healthcare Partner</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                MediCare+ —{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Complete Healthcare
                </span>{' '}
                at Your Fingertips
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Order medicines, book diagnostic tests with home sample collection, and consult with trusted doctors — all from one platform.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services">
                  <Button size="lg" className="gradient-primary shadow-glow">
                    Explore Services
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1200"
                  alt="Healthcare professionals"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
              
              {/* Floating Cards */}
              <Card className="absolute -bottom-6 -left-6 p-4 bg-white shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">100% Authentic</p>
                    <p className="text-xs text-muted-foreground">Verified medicines</p>
                  </div>
                </div>
              </Card>
              
              <Card className="absolute -top-6 -right-6 p-4 bg-white shadow-card" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Fast Delivery</p>
                    <p className="text-xs text-muted-foreground">Within 2-5 days</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Why Choose MediCare+</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We provide comprehensive healthcare services with a focus on quality, convenience, and trust
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-card transition-all duration-300 group border-2 hover:border-primary/20"
            >
              <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Card className="relative overflow-hidden gradient-primary p-12 text-center">
          <div className="relative z-10">
            <Award className="h-16 w-16 text-white mx-auto mb-4" />
            <h2 className="text-3xl font-display font-bold text-white mb-4">
              Ready to Experience Better Healthcare?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust MediCare+ for their healthcare needs
            </p>
            <Link to="/services">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                Get Started Today
              </Button>
            </Link>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/80" />
        </Card>
      </section>
    </div>
  );
};

export default Home;
