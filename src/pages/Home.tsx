import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Users, Award, Heart } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import schoolBuilding from "@/assets/school-building.jpg";

const Home = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Quality Education",
      description: "Comprehensive curriculum combining academic excellence with Islamic values",
    },
    {
      icon: Users,
      title: "Experienced Teachers",
      description: "Qualified and dedicated educators committed to student success",
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of excellence in both academics and character development",
    },
    {
      icon: Heart,
      title: "Nurturing Environment",
      description: "Safe, supportive atmosphere where every child can thrive",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Students learning"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-primary-foreground">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Welcome to Al-Hidaayat Group of Schools
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-95">
              Where Knowledge Meets Character, and Dreams Take Flight
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="font-semibold">
                <Link to="/about">Learn More</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Al-Hidaayat?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We provide a holistic education that prepares students for success in this life and the hereafter
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Campus Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={schoolBuilding}
                alt="Al-Hidaayat School Building"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Beautiful Campus
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                Our modern facilities provide a conducive learning environment where students can explore, 
                discover, and grow. From well-equipped classrooms to recreational spaces, every corner of 
                our campus is designed with our students' success in mind.
              </p>
              <Button asChild className="font-semibold">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Growing Family
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Enroll your child today and give them the foundation for a bright future
          </p>
          <Button asChild size="lg" variant="secondary" className="font-semibold">
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
