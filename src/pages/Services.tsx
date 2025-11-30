import { useState, useMemo } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/context/CartContext';
import { medicines, labTests, doctors, babyCare, womenCare } from '@/data/products';
import { toast } from 'sonner';
import { Pill, Microscope, Stethoscope, Star, Clock, Award, Baby, Heart, Search, SlidersHorizontal } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const Services = () => {
  const { addToCart, addAppointment, addHomeTest } = useCart();
  const [appointmentDialog, setAppointmentDialog] = useState(false);
  const [testDialog, setTestDialog] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<typeof doctors[0] | null>(null);
  const [selectedTest, setSelectedTest] = useState<typeof labTests[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [priceFilter, setPriceFilter] = useState('all');

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

  // Filter and sort logic
  const filterAndSort = (items: any[]) => {
    let filtered = items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (priceFilter !== 'all') {
      if (priceFilter === 'low') filtered = filtered.filter(item => (item.price || item.fee) < 300);
      if (priceFilter === 'medium') filtered = filtered.filter(item => (item.price || item.fee) >= 300 && (item.price || item.fee) < 700);
      if (priceFilter === 'high') filtered = filtered.filter(item => (item.price || item.fee) >= 700);
    }

    if (sortBy === 'price-low') filtered.sort((a, b) => (a.price || a.fee) - (b.price || b.fee));
    if (sortBy === 'price-high') filtered.sort((a, b) => (b.price || b.fee) - (a.price || a.fee));
    if (sortBy === 'name') filtered.sort((a, b) => a.name.localeCompare(b.name));

    return filtered;
  };

  const filteredMedicines = useMemo(() => filterAndSort(medicines), [searchQuery, sortBy, priceFilter]);
  const filteredBabyCare = useMemo(() => filterAndSort(babyCare), [searchQuery, sortBy, priceFilter]);
  const filteredWomenCare = useMemo(() => filterAndSort(womenCare), [searchQuery, sortBy, priceFilter]);
  const filteredLabTests = useMemo(() => filterAndSort(labTests), [searchQuery, sortBy, priceFilter]);
  const filteredDoctors = useMemo(() => filterAndSort(doctors), [searchQuery, sortBy, priceFilter]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            10-15 min instant delivery • Complete healthcare solutions at your fingertips
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-xl shadow-sm border">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search medicines, tests, doctors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 w-full md:w-auto">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px]">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under ₹300</SelectItem>
                <SelectItem value="medium">₹300 - ₹700</SelectItem>
                <SelectItem value="high">Above ₹700</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Tabs defaultValue="medicines" className="space-y-8">
          <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 h-auto">
            <TabsTrigger value="medicines" className="gap-2 flex-col py-3">
              <Pill className="h-5 w-5" />
              <span className="text-xs">Medicines</span>
            </TabsTrigger>
            <TabsTrigger value="babycare" className="gap-2 flex-col py-3">
              <Baby className="h-5 w-5" />
              <span className="text-xs">Baby Care</span>
            </TabsTrigger>
            <TabsTrigger value="womencare" className="gap-2 flex-col py-3">
              <Heart className="h-5 w-5" />
              <span className="text-xs">Women Care</span>
            </TabsTrigger>
            <TabsTrigger value="tests" className="gap-2 flex-col py-3">
              <Microscope className="h-5 w-5" />
              <span className="text-xs">Lab Tests</span>
            </TabsTrigger>
            <TabsTrigger value="doctors" className="gap-2 flex-col py-3">
              <Stethoscope className="h-5 w-5" />
              <span className="text-xs">Doctors</span>
            </TabsTrigger>
          </TabsList>

          {/* Medicines */}
          <TabsContent value="medicines" className="space-y-6">
            <div className="text-sm text-muted-foreground mb-4">
              Showing {filteredMedicines.length} of {medicines.length} results
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMedicines.map((med) => (
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

          {/* Baby Care */}
          <TabsContent value="babycare" className="space-y-6">
            <div className="text-sm text-muted-foreground mb-4">
              Showing {filteredBabyCare.length} of {babyCare.length} results
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBabyCare.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-card transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">₹{item.price}</div>
                      <Button size="sm" onClick={() => handleAddToCart(item)}>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Women Care */}
          <TabsContent value="womencare" className="space-y-6">
            <div className="text-sm text-muted-foreground mb-4">
              Showing {filteredWomenCare.length} of {womenCare.length} results
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredWomenCare.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-card transition-all group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 space-y-3">
                    <div>
                      <h3 className="font-semibold line-clamp-1">{item.name}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2 mt-1">{item.description}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-lg font-bold text-primary">₹{item.price}</div>
                      <Button size="sm" onClick={() => handleAddToCart(item)}>
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
            <div className="text-sm text-muted-foreground mb-4">
              Showing {filteredLabTests.length} of {labTests.length} results
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredLabTests.map((test) => (
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
            <div className="text-sm text-muted-foreground mb-4">
              Showing {filteredDoctors.length} of {doctors.length} results
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredDoctors.map((doc) => (
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
