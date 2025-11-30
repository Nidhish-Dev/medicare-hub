import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Truck, RefreshCcw, XCircle, CreditCard, FileText } from 'lucide-react';

const Policies = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="gradient-hero py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Policies</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear, transparent policies for your peace of mind
          </p>
        </div>
      </section>

      {/* Policies Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs defaultValue="shipping" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 h-auto">
            <TabsTrigger value="shipping" className="gap-2">
              <Truck className="h-4 w-4" />
              <span className="hidden sm:inline">Shipping</span>
            </TabsTrigger>
            <TabsTrigger value="delivery" className="gap-2">
              <Shield className="h-4 w-4" />
              <span className="hidden sm:inline">Delivery</span>
            </TabsTrigger>
            <TabsTrigger value="returns" className="gap-2">
              <RefreshCcw className="h-4 w-4" />
              <span className="hidden sm:inline">Returns</span>
            </TabsTrigger>
            <TabsTrigger value="cancellation" className="gap-2">
              <XCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Cancel</span>
            </TabsTrigger>
            <TabsTrigger value="payment" className="gap-2">
              <CreditCard className="h-4 w-4" />
              <span className="hidden sm:inline">Payment</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="gap-2">
              <FileText className="h-4 w-4" />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
          </TabsList>

          {/* Shipping Policy */}
          <TabsContent value="shipping">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <Truck className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Shipping Policy</h2>
                  <p className="text-sm text-muted-foreground">Fast and reliable delivery</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Shipping Partners</h3>
                  <p className="text-muted-foreground">
                    We use our own fleet for 10-15 min instant delivery across Delhi NCR. For express orders, we partner with trusted courier services including Delhivery and Blue Dart.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Shipping Charges</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Free instant delivery on orders above ₹299</li>
                    <li>₹40 flat shipping for orders below ₹299</li>
                    <li>Same rates apply across all Delhi NCR locations</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Packaging</h3>
                  <p className="text-muted-foreground">
                    All medicines and products are securely packaged with appropriate cushioning and sealed to maintain product integrity during transit.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Note:</strong> Prescription medicines require valid prescription upload before shipping.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Delivery Time */}
          <TabsContent value="delivery">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <Shield className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Delivery Time</h2>
                  <p className="text-sm text-muted-foreground">Expected timelines</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Medicines</h3>
                  <p className="text-muted-foreground">
                    Instant delivery: 10-15 minutes (Delhi NCR)<br />
                    Express delivery: Within 1 hour<br />
                    All deliveries tracked in real-time
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Lab Test Kits</h3>
                  <p className="text-muted-foreground">
                    Sample collection scheduled within 2 hours of booking. Test reports delivered digitally within specified duration (varies by test type).
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Tracking</h3>
                  <p className="text-muted-foreground">
                    Real-time tracking available for all orders. You'll receive live updates via SMS and in-app notifications throughout the delivery process.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Delivery Coverage</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>10-15 min delivery across all Delhi NCR areas</li>
                    <li>Includes: New Delhi, Gurgaon, Noida, Faridabad, Ghaziabad</li>
                    <li>Contact support for specific locality confirmation</li>
                  </ul>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Returns & Refunds */}
          <TabsContent value="returns">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <RefreshCcw className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Returns & Refunds</h2>
                  <p className="text-sm text-muted-foreground">Easy return process</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Return Eligibility</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Damaged or defective products</li>
                    <li>Wrong items delivered</li>
                    <li>Products near expiry (less than 6 months)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Non-Returnable Items</h3>
                  <p className="text-muted-foreground">
                    Prescription medicines and opened packages cannot be returned due to safety and hygiene regulations.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Return Process</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Contact us within 48 hours of delivery</li>
                    <li>Provide order details and photos of the issue</li>
                    <li>We'll arrange pickup within 2-3 business days</li>
                    <li>Refund processed within 5-7 business days after verification</li>
                  </ol>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Refund Method</h3>
                  <p className="text-muted-foreground">
                    Refunds are processed to the original payment method. Bank transfers may take 5-7 business days to reflect.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Cancellation */}
          <TabsContent value="cancellation">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <XCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Cancellation Policy</h2>
                  <p className="text-sm text-muted-foreground">Flexible cancellation</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Medicine Orders</h3>
                  <p className="text-muted-foreground">
                    Orders can be cancelled before shipment at no charge. Once shipped, cancellation is not possible, but you may refuse delivery or return the package.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Lab Test Bookings</h3>
                  <p className="text-muted-foreground">
                    Lab bookings can be cancelled up to 2 hours before the scheduled sample collection time. Full refund will be processed instantly.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Doctor Appointments</h3>
                  <p className="text-muted-foreground">
                    Appointments can be cancelled up to 4 hours before the scheduled time. Cancellations made within 4 hours are subject to a 30% cancellation fee.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How to Cancel</h3>
                  <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                    <li>Visit your orders page</li>
                    <li>Click on the order you want to cancel</li>
                    <li>Select 'Cancel Order' and confirm</li>
                    <li>You'll receive a cancellation confirmation</li>
                  </ol>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Payment Methods */}
          <TabsContent value="payment">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <CreditCard className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Payment Methods</h2>
                  <p className="text-sm text-muted-foreground">Secure payment options</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Accepted Payment Methods</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Online Payment</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        <li>Razorpay Gateway</li>
                        <li>PayPal</li>
                        <li>Credit Cards (Visa, Mastercard, Amex, RuPay)</li>
                        <li>Debit Cards (All major banks)</li>
                        <li>Net Banking (150+ banks)</li>
                        <li>UPI (Google Pay, PhonePe, Paytm, BHIM)</li>
                        <li>Digital Wallets (Paytm, Mobikwik, Freecharge)</li>
                      </ul>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <h4 className="font-medium mb-2">Cash on Delivery</h4>
                      <p className="text-sm text-muted-foreground">
                        Available for orders below ₹5000 across Delhi NCR. No additional COD charges for instant delivery orders.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Payment Security</h3>
                  <p className="text-muted-foreground">
                    All online transactions are secured with 256-bit SSL encryption. We use Razorpay and PayPal payment gateways, both PCI DSS Level 1 compliant. Your card details are never stored on our servers.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Payment Issues</h3>
                  <p className="text-muted-foreground">
                    If payment is debited but order is not confirmed, please wait 24-48 hours. The amount will be auto-refunded if the order doesn't get processed. Contact support for urgent assistance.
                  </p>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    <strong>Demo Note:</strong> This is a demonstration project. No real payment integrations are active. All transactions are simulated for educational purposes.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Privacy Policy */}
          <TabsContent value="privacy">
            <Card className="p-8 shadow-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl gradient-primary flex items-center justify-center">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold">Privacy Policy</h2>
                  <p className="text-sm text-muted-foreground">Your data is safe with us</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">Information We Collect</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Personal details (name, email, phone)</li>
                    <li>Delivery address</li>
                    <li>Payment information (encrypted)</li>
                    <li>Medical prescriptions (when applicable)</li>
                    <li>Order history and preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">How We Use Your Data</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Process and deliver your orders</li>
                    <li>Provide customer support</li>
                    <li>Send order updates and notifications</li>
                    <li>Improve our services</li>
                    <li>Comply with legal requirements</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Data Security</h3>
                  <p className="text-muted-foreground">
                    We implement industry-standard security measures including encryption, secure servers, and regular security audits. Your medical information is stored with HIPAA-level security protocols.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Data Sharing</h3>
                  <p className="text-muted-foreground">
                    We do not sell your personal information. Data is shared only with delivery partners and payment processors as necessary to fulfill orders. All third parties are bound by confidentiality agreements.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Your Rights</h3>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Access your personal data</li>
                    <li>Request data correction or deletion</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Download your data</li>
                  </ul>
                </div>

                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm">
                    For privacy concerns or data requests, contact our Data Protection Officer at privacy@medicareplus.com
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default Policies;
