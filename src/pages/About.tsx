import { Card } from '@/components/ui/card';
import { Target, Eye, Heart, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Patient-Centric Care',
      description: 'Your health and wellbeing are at the center of everything we do',
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Quality Assured',
      description: 'Only authentic medicines and certified diagnostic services',
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Experienced healthcare professionals dedicated to your care',
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Continuous Innovation',
      description: 'Leveraging technology to make healthcare more accessible',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-display font-bold mb-6">
              About <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">MediCare+</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              A comprehensive healthcare platform bringing together pharmacy services, medical diagnostics, and clinical care — all in one place.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To provide accessible, convenient, and reliable healthcare resources online. We strive to make quality healthcare services available to everyone, anywhere, anytime — bridging the gap between patients and healthcare providers through innovative technology.
            </p>
          </Card>

          <Card className="p-8 shadow-card hover:shadow-glow transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mb-4">
              <Eye className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To become India's most trusted healthcare hub — a single platform where patients can order medicines, book diagnostic tests, and connect with healthcare professionals seamlessly. We envision a future where quality healthcare is just a click away.
            </p>
          </Card>
        </div>
      </section>

      {/* Our Story */}
      <section className="gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  MediCare+ was founded with a simple yet powerful idea: healthcare should be accessible, transparent, and hassle-free for everyone.
                </p>
                <p>
                  What started as a small pharmacy has evolved into a comprehensive healthcare platform serving thousands of patients across the country. We've grown by staying true to our core values of quality, trust, and innovation.
                </p>
                <p>
                  Today, MediCare+ brings together online pharmacy services, diagnostic lab testing with home sample collection, and a network of verified doctors — all designed to make your healthcare journey smoother and more convenient.
                </p>
                <p className="font-semibold text-foreground">
                  We're not just a service provider; we're your healthcare partner, committed to your wellbeing every step of the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=1200"
                alt="Healthcare team"
                className="rounded-2xl shadow-card"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Our Core Values</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide us in delivering exceptional healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-card transition-all duration-300 group">
              <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Our Promise to You</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            At MediCare+, we promise to provide only genuine products, maintain the highest standards of service quality, protect your privacy and data security, and offer transparent pricing with no hidden costs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Authentic Products</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Satisfied Customers</div>
            </div>
            <div>
              <div className="text-4xl font-display font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Healthcare Products</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
