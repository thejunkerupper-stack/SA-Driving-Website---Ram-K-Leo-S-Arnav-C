import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { CreditCard, DollarSign } from "lucide-react";

const Register = () => {
  const { toast } = useToast();

  const coursePrices = {
    "teen-license": { price: 495, name: "Teen License Behind the Wheel", description: "Complete driver's education program" },
    "driving-lessons": { price: 65, name: "Individual Driving Lessons", description: "Per hour of instruction" },
    "driver-improvement": { price: 89, name: "Driver Improvement Program", description: "8-hour course" },
    "road-test": { price: 120, name: "Road Test Package", description: "Vehicle rental and test supervision" }
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    course: "",
    numberOfSessions: "1",
    comments: "",
    // Payment fields
    cardNumber: "",
    cardName: "",
    expiry: "",
    cvv: "",
  });

  const calculateTotalPrice = () => {
    if (!formData.course) return null;
    const coursePrice = coursePrices[formData.course].price;
    if (coursePrice === null) return "Contact Us";
    if (formData.course === "driving-lessons") {
      return coursePrice * parseInt(formData.numberOfSessions);
    }
    return coursePrice;
  };

  const validateForm = () => {
    if (!formData.course) return "Please select a course";
    if (!formData.firstName.trim() || !formData.lastName.trim()) return "Please enter your full name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Please enter a valid email address";
    if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) return "Please enter a valid phone number format: (XXX) XXX-XXXX";
    
    const today = new Date();
    const birthDate = new Date(formData.dateOfBirth);
    const age = today.getFullYear() - birthDate.getFullYear();
    if (age < 15) return "You must be at least 15 years old to register";

    // Payment validation
    if (calculateTotalPrice() !== "Contact Us") {
      if (!formData.cardName.trim()) return "Please enter the name on your card";
      if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) return "Please enter a valid 16-digit card number";
      if (!/^\d{2}\/\d{2}$/.test(formData.expiry)) return "Please enter a valid expiry date (MM/YY)";
      if (!/^\d{3,4}$/.test(formData.cvv)) return "Please enter a valid CVV";
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateForm();
    
    if (validationError) {
      toast({
        title: "Error",
        description: validationError,
        variant: "destructive",
      });
      return;
    }

    // In a real application, you would integrate with a payment processor here
    try {
      // Simulating payment processing
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const total = calculateTotalPrice();
      toast({
        title: "Registration Successful!",
        description: `Thank you for registering. We've sent a confirmation email to ${formData.email}`,
      });

      // Reset form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        course: "",
        numberOfSessions: "1",
        comments: "",
        cardNumber: "",
        cardName: "",
        expiry: "",
        cvv: "",
      });
    } catch (error) {
      toast({
        title: "Payment Failed",
        description: "There was an error processing your payment. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen py-12 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">Register for a Course</h1>
            <p className="text-xl text-muted-foreground">
              Fill out the form below to enroll in one of our driving programs
            </p>
          </div>

          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle>Student Information</CardTitle>
              <CardDescription>Please provide accurate information for enrollment</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleChange("firstName", e.target.value)}
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      required
                      value={formData.dateOfBirth}
                      onChange={(e) => handleChange("dateOfBirth", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="course">Select Course *</Label>
                    <Select value={formData.course} onValueChange={(value) => handleChange("course", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {Object.entries(coursePrices).map(([key, course]) => (
                          <SelectItem key={key} value={key} className="py-3">
                            <div>
                              <div className="font-medium">{course.name}</div>
                              <div className="text-sm text-muted-foreground">{course.description}</div>
                              <div className="text-sm font-semibold text-primary">${course.price}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {formData.course === "driving-lessons" && (
                  <div className="space-y-2">
                    <Label htmlFor="numberOfSessions">Number of Sessions *</Label>
                    <Select 
                      value={formData.numberOfSessions} 
                      onValueChange={(value) => handleChange("numberOfSessions", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of sessions" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 5, 10].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "Session" : "Sessions"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {formData.course && (
                  <div className="flex justify-end items-center gap-2 text-lg font-bold">
                    <DollarSign className="w-5 h-5 text-accent" />
                    <span className="text-accent">
                      Total: {calculateTotalPrice() === "Contact Us" ? "Contact Us" : `$${calculateTotalPrice()}`}
                    </span>
                  </div>
                )}

                {formData.course && calculateTotalPrice() !== "Contact Us" && (
                  <div className="space-y-6 pt-6 border-t">
                    <div className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      <h3 className="text-lg font-semibold">Payment Information</h3>
                    </div>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardName">Name on Card *</Label>
                        <Input
                          id="cardName"
                          required
                          value={formData.cardName}
                          onChange={(e) => handleChange("cardName", e.target.value)}
                          placeholder="John Doe"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">Card Number *</Label>
                        <Input
                          id="cardNumber"
                          required
                          value={formData.cardNumber}
                          onChange={(e) => handleChange("cardNumber", e.target.value)}
                          placeholder="1234 5678 9012 3456"
                          maxLength={19}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="expiry">Expiry Date *</Label>
                          <Input
                            id="expiry"
                            required
                            value={formData.expiry}
                            onChange={(e) => handleChange("expiry", e.target.value)}
                            placeholder="MM/YY"
                            maxLength={5}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cvv">CVV *</Label>
                          <Input
                            id="cvv"
                            required
                            value={formData.cvv}
                            onChange={(e) => handleChange("cvv", e.target.value)}
                            placeholder="123"
                            maxLength={4}
                            type="password"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="comments">Additional Comments or Questions</Label>
                  <Textarea
                    id="comments"
                    value={formData.comments}
                    onChange={(e) => handleChange("comments", e.target.value)}
                    placeholder="Let us know if you have any specific needs or questions..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-accent">
                  {calculateTotalPrice() === "Contact Us" ? "Submit Inquiry" : "Complete Registration"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center text-muted-foreground">
            <p>Questions about registration? <a href="/contact" className="text-primary hover:underline">Contact us</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
