import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Laptop, Clock, Award, CheckCircle, BookOpen, AlertCircle } from "lucide-react";

const RADEP = () => {
  const features = [
    {
      icon: Laptop,
      title: "100% Online",
      description: "Complete at your own pace from home",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "24/7 access to course materials",
    },
    {
      icon: BookOpen,
      title: "Court-Approved",
      description: "Meets Virginia court requirements",
    },
    {
      icon: Award,
      title: "Certificate",
      description: "Digital certificate upon completion",
    },
  ];

  const courseTopics = [
    "Reckless and Aggressive Driving Behavior",
    "Virginia Traffic Laws",
    "Driver Responsibility",
    "Decision-Making Skills",
    "Traffic Safety",
    "Accident Prevention",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              Reckless & Aggressive Driver Education (RADEP)
            </h1>
            <p className="text-lg opacity-90 mb-4">
              Complete court-ordered driver education online
            </p>
          </div>
        </div>
      </section>

      {/* Banner CTA placed directly under hero (pushes content down) */}
      <div className="container mx-auto px-4 my-10 md:my-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold mb-3">Ready to Complete Your RADEP Course?</h2>
          <div className="flex justify-center gap-4">
            <Link to="/payment">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Enroll Now
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="pt-0 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-4 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="shadow-sm">
                  <CardHeader className="space-y-2">
                    <feature.icon className="w-8 h-8 text-accent" />
                    <div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                      <CardDescription>{feature.description}</CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>

            {/* Course Options */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* 12-Hour Option */}
              <Card className="shadow-elevation border-2 border-accent">
                <CardHeader>
                  <CardTitle className="text-2xl">12-Hour RADEP Course</CardTitle>
                  <CardDescription className="text-base">Full requirement course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-accent">
                    $199 <span className="text-sm line-through text-muted-foreground">$249</span>
                  </div>
                  <p className="text-sm text-muted-foreground">20% off now only!</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>12 instructional hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Complete Virginia requirement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Self-paced learning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Digital certificate included</span>
                    </li>
                  </ul>
                  <Link to="/payment" className="block">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* 4-Hour Option */}
              <Card className="shadow-elevation">
                <CardHeader>
                  <CardTitle className="text-2xl">4-Hour RADEP Course</CardTitle>
                  <CardDescription className="text-base">Partial requirement course</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-3xl font-bold text-accent">
                    $160 <span className="text-sm line-through text-muted-foreground">$199</span>
                  </div>
                  <p className="text-sm text-muted-foreground">20% off now only!</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>4 instructional hours</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Part of 12-hour requirement</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Self-paced learning</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-accent" />
                      <span>Must take 8-hour DIP also</span>
                    </li>
                  </ul>
                  <Link to="/payment" className="block">
                    <Button className="w-full" variant="outline">
                      Register Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Course Details */}
            <div className="bg-muted rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                General Course Details
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-3">Time Requirements</h3>
                  <p className="text-sm text-muted-foreground">
                    The course consists of 12 total instructional hours. Students are not required to
                    complete the course in a single session. The system allows students to log in
                    and out as needed, and course progress is saved automatically.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Course Completion</h3>
                  <p className="text-sm text-muted-foreground">
                    To complete the course, students must review all required material and
                    successfully complete the included quizzes. A digital PDF certificate of
                    completion is sent by email upon successful completion.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Assessments</h3>
                  <p className="text-sm text-muted-foreground">
                    The course includes periodic quizzes to confirm completion of the material. If
                    a quiz is not passed on the first attempt, it may be retaken until the
                    required score is achieved.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3">Refund Policy</h3>
                  <p className="text-sm text-muted-foreground">
                    A full refund may be requested at any time prior to the issuance of the
                    certificate of completion. Refund requests made after a certificate has been
                    issued will not be approved.
                  </p>
                </div>
              </div>
            </div>

            {/* What You'll Learn */}
            <Card className="shadow-elevation mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">
                  Course Content & Topics
                </CardTitle>
                <div className="grid md:grid-cols-2 gap-4">
                  {courseTopics.map((topic, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </CardHeader>
            </Card>

            {/* Course Structure */}
            <Card className="shadow-elevation mb-12">
              <CardHeader>
                <CardTitle className="text-2xl text-center mb-6">Course Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  The course is delivered entirely online and is divided into multiple sections
                  that must be completed in sequence. Course content addresses topics related to
                  reckless and aggressive driving behavior, traffic laws, driver responsibility,
                  and decision-making.
                </p>
                <p className="text-muted-foreground">
                  The format includes written instructional material, interactive components, and
                  quizzes. Students complete the course independently and progress through the
                  material at their own pace.
                </p>
              </CardContent>
            </Card>

            {/* How It Works */}
            <div className="bg-muted rounded-lg p-6 mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6 text-center">How It Works</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    1
                  </div>
                  <h3 className="font-medium mb-1">Register</h3>
                  <p className="text-sm text-muted-foreground">
                    Quick signup, instant access to course materials
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    2
                  </div>
                  <h3 className="font-medium mb-1">Study</h3>
                  <p className="text-sm text-muted-foreground">
                    Complete lessons and quizzes at your own pace
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                    3
                  </div>
                  <h3 className="font-medium mb-1">Submit</h3>
                  <p className="text-sm text-muted-foreground">
                    Receive certificate to submit to court
                  </p>
                </div>
              </div>
            </div>

            {/* Important Note */}
            <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 mb-12">
              <div className="flex space-x-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">
                    Important Course Information
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-300">
                    This online RADEP course is intended for drivers in Virginia who have received
                    a reckless or aggressive driving citation and have been ordered by the court
                    to complete a driver education course. Upon successful completion, you will
                    receive a certificate of completion that can be submitted to the court as
                    required.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RADEP;
