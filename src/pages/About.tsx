import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Building Tomorrow's Leaders Through Quality Education and Islamic Values
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Al-Hidaayat Group of Schools was established with a clear vision: to provide quality education 
              that nurtures both the mind and the soul. We believe that true education goes beyond textbooks 
              and examinations – it's about building character, instilling values, and preparing students to 
              be responsible citizens who can make positive contributions to society.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our institution combines modern educational methods with traditional Islamic values, creating 
              a unique learning environment where students excel academically while growing spiritually and 
              morally. We are committed to providing every student with the tools, knowledge, and guidance 
              they need to succeed in this life and the hereafter.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide exceptional education that integrates academic excellence with Islamic values, 
                  fostering critical thinking, creativity, and strong moral character in every student. We 
                  strive to create a nurturing environment where students develop into confident, responsible, 
                  and compassionate individuals ready to face the challenges of tomorrow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading educational institution recognized for producing well-rounded graduates 
                  who excel academically, embody Islamic principles, and contribute positively to their 
                  communities. We envision a future where our students become leaders, innovators, and 
                  role models who inspire others through their knowledge, character, and dedication.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proprietor Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Leadership
              </h2>
              <p className="text-muted-foreground text-lg">
                Guided by Vision, Driven by Excellence
              </p>
            </div>

            <Card className="border-2 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-3xl font-bold text-primary">AH</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Proprietor/Proprietress
                  </h3>
                  <p className="text-primary font-medium mb-4">Founder & Director</p>
                </div>
                <p className="text-muted-foreground leading-relaxed text-center max-w-2xl mx-auto">
                  With a deep commitment to educational excellence and Islamic values, our founder established 
                  Al-Hidaayat Group of Schools to create an institution where students can receive quality 
                  education in a nurturing Islamic environment. Through years of dedication and visionary 
                  leadership, Al-Hidaayat has grown to become a trusted name in education, known for producing 
                  well-rounded students who excel both academically and in character.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="opacity-90">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="opacity-90">
                Upholding honesty, transparency, and Islamic principles
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-3">Compassion</h3>
              <p className="opacity-90">
                Caring for every student's wellbeing and success
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
