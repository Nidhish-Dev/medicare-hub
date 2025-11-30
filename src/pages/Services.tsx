import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/context/CartContext';
import { medicines, labTests, doctors } from '@/data/products';
import { toast } from 'sonner';
import { Pill, Microscope, Stethoscope, Star, Clock, Award } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Services = () => {
  const { addToCart, addAppointment, addHomeTest } = useCart();
  const [appointmentDialog, setAppointmentDialog] = useState(false);
  const [testDialog, setTestDialog] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [selectedTest, setSelectedTest] = useState<typeof labTests[0] | null>(null);

  const handleAddToCart = (item: typeof medicines[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      type: 'medicine',
    });
    toast.success(`${item.name} added to cart`);
  };

  const handleBookAppointment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedDoctor) return;
    
    const formData = new FormData(e.currentTarget);
    addAppointment({
      id: `A${Date.now()}`,
      docId: selectedDoctor.id,
      docName: selectedDoctor.name,
      dept: selectedDoctor.dept,
      date: formData.get('date') as string,
      time: formData.get('time') as string,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      fee: selectedDoctor.fee,
    });
    toast.success(`Appointment booked with ${selectedDoctor.name}`);
    setAppointmentDialog(false);
  };

  const handleBookTest = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedTest) return;
    
    const formData = new FormData(e.currentTarget);
    addHomeTest({
      id: `T${Date.now()}`,
      testId: selectedTest.id,
      testName: selectedTest.name,
      price: selectedTest.price,
      name: formData.get('name') as string,
      phone: formData.get('phone') as string,
      address: formData.get('address') as string,
      date: formData.get('date') as string,
    });
    toast.success(`Home test booked for ${selectedTest.name}`);
    setTestDialog(false);
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive healthcare solutions at your fingertips
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="medicines" className="space-y-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 h-auto">
            <TabsTrigger value="medicines" className="gap-2">
              <Pill className="h-4 w-4" />
              <span className="hidden sm:inline">Medicines</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="gap-2">
              <Microscope className="h-4 w-4" />
              <span className="hidden sm:inline">Lab Tests</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="gap-2">
              <Stethoscope className="h-4 w-4" />
              <span className="hidden sm:inline">Doctors</span>
            </TabsTrigger>
          </TabsList>

          {/* Medicines */}
          <TabsContent value="medicines" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {medicines.map((med) => (
                <Card key={med.id} className="overflow-hidden hover:shadow-card transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={med.image}
                      alt={med.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{med.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{med.description}</p>
                    </div>
                    {med.prescription && (
                      <Badge variant="secondary" className="text-xs">
                        Prescription Required
                      </Badge>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">₹{med.price}</div>
                      <Button size="sm" onClick={() => handleAddToCart(med)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Lab Tests */}
          <TabsContent value="tests" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {labTests.map((test) => (
                <Card key={test.id} className="overflow-hidden hover:shadow-card transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={test.image}
                      alt={test.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{test.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{test.description}</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      Report in {test.duration}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">₹{test.price}</div>
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedTest(test);
                          setTestDialog(true);
                        }}
                      >
                        Book Test
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Doctors */}
          <TabsContent value="doctors" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {doctors.map((doc) => (
                <Card key={doc.id} className="overflow-hidden hover:shadow-card transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold">{doc.name}</h3>
                      <p className="text-sm text-muted-foreground">{doc.dept}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1">
                        <Award className="h-3 w-3 text-primary" />
                        <span className="text-muted-foreground">{doc.experience}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{doc.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">₹{doc.fee}</div>
                      <Button
                        size="sm"
                        onClick={() => {
                          setSelectedDoctor(doc);
                          setAppointmentDialog(true);
                        }}
                      >
                        Book
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Appointment Dialog */}
      <Dialog open={appointmentDialog} onOpenChange={setAppointmentDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Appointment</DialogTitle>
            <DialogDescription>
              Schedule your consultation with {selectedDoctor?.name}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookAppointment} className="space-y-4">
            <div>
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" name="phone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="date">Preferred Date</Label>
              <Input id="date" name="date" type="date" required />
            </div>
            <div>
              <Label htmlFor="time">Preferred Time</Label>
              <Input id="time" name="time" type="time" required />
            </div>
            <Button type="submit" className="w-full">Confirm Booking</Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* Test Dialog */}
      <Dialog open={testDialog} onOpenChange={setTestDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Book Home Test</DialogTitle>
            <DialogDescription>
              Schedule home sample collection for {selectedTest?.name}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleBookTest} className="space-y-4">
            <div>
              <Label htmlFor="test-name">Your Name</Label>
              <Input id="test-name" name="name" required />
            </div>
            <div>
              <Label htmlFor="test-phone">Phone Number</Label>
              <Input id="test-phone" name="phone" type="tel" required />
            </div>
            <div>
              <Label htmlFor="address">Address</Label>
              <Input id="address" name="address" required />
            </div>
            <div>
              <Label htmlFor="test-date">Preferred Date</Label>
              <Input id="test-date" name="date" type="date" required />
            </div>
            <Button type="submit" className="w-full">Confirm Booking</Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
