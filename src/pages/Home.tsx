import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Shield, Clock, Award, Pill, Microscope, Stethoscope, Zap, Package, CheckCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const Home = () => {
  const features = [
    {
      icon: <Pill className="h-6 w-6" />,
      title: 'Trusted Pharmacy',
      description: '10-15 min instant delivery of genuine medicines',
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: 'Home Sample Collection',
      description: 'Safe and hygienic sample pickup at your convenience',
    },
    {
      icon: <Stethoscope className="h-6 w-6" />,
      title: 'Verified Doctors',
      description: 'Book instant appointments with experienced professionals',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Happy Patients' },
    { value: '100+', label: 'Expert Doctors' },
    { value: '200+', label: 'Lab Tests' },
    { value: '10-15min', label: 'Delivery' },
  ];

  const offers = [
    {
      title: '50% OFF',
      subtitle: 'On First Medicine Order',
      description: 'Use code: FIRST50',
      gradient: 'from-teal-500 to-cyan-500',
    },
    {
      title: 'Free Lab Tests',
      subtitle: 'Book Full Body Checkup',
      description: 'Get 5 tests absolutely free',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: '₹200 Cashback',
      subtitle: 'On Doctor Consultation',
      description: 'Book now and save more',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Baby Care Sale',
      subtitle: 'Up to 40% Off',
      description: 'On all baby products',
      gradient: 'from-blue-500 to-indigo-500',
    },
  ];

  const bookingSteps = [
    {
      number: '1',
      icon: <Package className="h-8 w-8" />,
      title: 'Choose Your Service',
      description: 'Browse medicines, lab tests, or book doctor appointments',
    },
    {
      number: '2',
      icon: <Clock className="h-8 w-8" />,
      title: 'Place Your Order',
      description: 'Add to cart and select your preferred delivery time',
    },
    {
      number: '3',
      icon: <Zap className="h-8 w-8" />,
      title: 'Instant Delivery',
      description: 'Get your order delivered in just 10-15 minutes',
    },
    {
      number: '4',
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Enjoy Healthcare',
      description: 'Quality healthcare services at your doorstep',
    },
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
                <span>10-15 Min Instant Delivery</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
                MediCare+ —{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Delhi's Fastest
                </span>{' '}
                Healthcare Partner
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Order medicines, book diagnostic tests with home sample collection, and consult with trusted doctors — all delivered in 10-15 minutes across Delhi NCR.
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
                    <p className="font-semibold">Lightning Fast</p>
                    <p className="text-xs text-muted-foreground">10-15 min delivery</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Carousel */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-display font-bold mb-4">Special Offers & Discounts</h2>
          <p className="text-muted-foreground">Don't miss out on our exclusive deals</p>
        </div>

        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {offers.map((offer, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className={`p-8 bg-gradient-to-br ${offer.gradient} text-white border-0 shadow-card hover:scale-105 transition-transform duration-300`}>
                  <div className="space-y-3">
                    <h3 className="text-4xl font-display font-bold">{offer.title}</h3>
                    <p className="text-xl font-semibold">{offer.subtitle}</p>
                    <p className="text-white/90">{offer.description}</p>
                    <Link to="/services">
                      <Button variant="secondary" className="mt-4 bg-white text-primary hover:bg-white/90">
                        Grab Offer
                      </Button>
                    </Link>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </section>

      {/* How It Works Section */}
      <section className="gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">How to Book a Service</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get healthcare services delivered to your doorstep in 4 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bookingSteps.map((step, index) => (
              <Card key={index} className="relative p-6 text-center hover:shadow-card transition-all duration-300 group">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold shadow-glow">
                  {step.number}
                </div>
                <div className="mt-6 mb-4 w-16 h-16 mx-auto rounded-2xl gradient-primary flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </Card>
            ))}
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
              Join thousands of satisfied customers across Delhi NCR who trust MediCare+ for instant healthcare delivery
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
