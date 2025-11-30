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
            Serving Delhi NCR with 10-15 min instant delivery • Available 24/7
          </p>
        </div>
      </section>

      {/* Contact Info Cards - Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6">
            <MapPin className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-muted-foreground">
              MediCare+ Main Branch,<br />
              Block C-24, Connaught Place,<br />
              New Delhi, Delhi 110001
            </p>
          </Card>

          <Card className="p-6">
            <Phone className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-sm text-muted-foreground">
              Phone: +91 11 4567 8900<br />
              Toll Free: 1800-100-5000<br />
              Available 24/7 for instant delivery
            </p>
          </Card>

          <Card className="p-6">
            <Mail className="h-8 w-8 text-primary mb-4" />
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-muted-foreground">
              support@medicareplus.in<br />
              orders@medicareplus.in<br />
              We reply within 1 hour
            </p>
          </Card>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-muted-foreground">Mon-Sun: 24/7</p>
              <a href="tel:+911145678900" className="text-primary hover:underline mt-2 block">
                +91 11 4567 8900
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Mail className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">We'll respond within 1 hour</p>
              <a href="mailto:support@medicareplus.in" className="text-primary hover:underline mt-2 block">
                support@medicareplus.in
              </a>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                Block C-24, Connaught Place<br />
                New Delhi, Delhi 110001<br />
                India
              </p>
            </Card>

            <Card className="p-6 shadow-card hover:shadow-glow transition-all">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">Delivery Hours</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <p>10-15 min instant delivery</p>
                <p>Available 24/7 across Delhi NCR</p>
                <p className="text-primary font-medium mt-2">Emergency Support Always Available</p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9750788766817!2d77.21786931508076!3d28.63123989241989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd0683d1127d%3A0x3d32e53f2dc0d164!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                className="w-full h-80"
                loading="lazy"
                title="MediCare+ Location - Connaught Place, New Delhi"
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
                a: 'We deliver medicines in 10-15 minutes across Delhi NCR. Express delivery available 24/7.',
              },
              {
                q: 'Do you provide home sample collection?',
                a: 'Yes! We offer convenient home sample collection within 2 hours for all lab tests.',
              },
              {
                q: 'Are the medicines authentic?',
                a: '100% authentic medicines sourced directly from verified manufacturers with proper certifications.',
              },
              {
                q: 'Can I upload prescriptions?',
                a: 'Yes, you can upload prescriptions during checkout for prescription-required medicines.',
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
