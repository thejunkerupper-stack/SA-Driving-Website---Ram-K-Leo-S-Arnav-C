import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { GraduationCap, Car, Shield, Award, Users, Clock, CheckCircle } from "lucide-react";

const Home = () => {
  const services = [
    {
      icon: GraduationCap,
      title: "Teen License Program",
      description: "Complete behind-the-wheel training for teens.",
      link: "/teen-license",
    },
    {
      icon: Car,
      title: "Driving Lessons",
      description: "Individual lessons for all skill levels.",
      link: "/driving-lessons",
    },
    {
      icon: Shield,
      title: "Driver Improvement",
      description: "Online courses to enhance skills and reduce points.",
      link: "/driver-improvement",
    },
  ];

  const features = [
    { icon: Award, text: "DMV Certified" },
    { icon: Users, text: "Personalized" },
    { icon: Clock, text: "Flexible Hours" },
    { icon: CheckCircle, text: "High Pass Rate" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-primary-foreground py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Learn to Drive with Confidence
            </h1>
            <p className="text-lg md:text-xl mb-6 opacity-95">
              Professional driving instruction in Loudoun County, VA
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/payment">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
                  Register Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white/10 border-white text-white hover:bg-white hover:text-primary px-8">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Services */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <feature.icon className="w-8 h-8 text-accent mb-2" />
                <span className="text-sm font-medium text-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="shadow-elevation hover:shadow-strong transition-all duration-300">
                <CardHeader>
                  <service.icon className="w-10 h-10 text-accent mb-3" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full">Learn More</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Experienced Instructors</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">High Pass Rate</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">Flexible Schedule</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">All Skill Levels</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="text-2xl font-bold mb-2">Ready to Start?</h3>
              <p className="text-sm mb-4 opacity-90">Join hundreds of satisfied students who have learned to drive with us.</p>
              <Link to="/payment">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground w-full">
                  Register Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Schools Section */}
      <section className="py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Serving All Loudoun County High Schools</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 bg-secondary rounded">Rock Ridge</span>
            <span className="px-3 py-1 bg-secondary rounded">Independence</span>
            <span className="px-3 py-1 bg-secondary rounded">Briar Woods</span>
            <span className="px-3 py-1 bg-secondary rounded">Stone Bridge</span>
            <span className="px-3 py-1 bg-secondary rounded">Broad Run</span>
            <span className="px-3 py-1 bg-secondary rounded">Riverside</span>
            <span className="px-3 py-1 bg-secondary rounded">Heritage</span>
            <span className="px-3 py-1 bg-secondary rounded">Potomac Falls</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
