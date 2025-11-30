import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    e.currentTarget.reset();
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Get in <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions? We're here to help you with all your healthcare needs
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">Mon-Sat: 9AM - 9PM</p>
              <a href="tel:+919876543210" className="text-primary hover:underline mt-2 block">
                +91 98765 43210
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">We'll respond within 24 hours</p>
              <a href="mailto:hello@medicareplus.com" className="text-primary hover:underline mt-2 block">
                hello@medicareplus.com
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                12 Health Street<br />
                Demo City, DC 110001<br />
                India
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Working Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>Monday - Saturday: 9AM - 9PM</p>
                <p>Sunday: 10AM - 6PM</p>
                <p className="text-primary font-medium mt-2">24/7 Emergency Support</p>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-card">
              <h2 className="text-2xl font-display font-bold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" placeholder="John Doe" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required className="mt-1" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="contact-phone">Phone Number *</Label>
                    <Input id="contact-phone" name="phone" type="tel" placeholder="+91 98765 43210" required className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" name="subject" placeholder="How can we help?" required className="mt-1" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={6}
                    required
                    className="mt-1"
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit" size="lg" className="flex-1">
                    Send Message
                  </Button>
                  <Button type="reset" variant="outline" size="lg">
                    Clear
                  </Button>
                </div>
              </form>
            </Card>

            {/* Map */}
            <Card className="mt-6 overflow-hidden shadow-card">
              <iframe
                src="https://maps.google.com/maps?q=New%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-80"
                loading="lazy"
                title="Location Map"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'How fast is the delivery?',
                a: 'We deliver medicines within 2-5 business days depending on your location.',
              },
              {
                q: 'Do you provide home sample collection?',
                a: 'Yes! We offer convenient home sample collection for all lab tests.',
              },
              {
                q: 'Are the medicines authentic?',
                a: '100% authentic medicines sourced directly from verified manufacturers.',
              },
              {
                q: 'Can I upload prescriptions?',
                a: 'Yes, you can upload prescriptions during checkout for prescription medicines.',
              },
            ].map((faq, i) => (
              <Card key={i} className="p-6">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
