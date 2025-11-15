import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Trophy, Palette, Music, Globe, Heart, FlaskConical, Users } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: BookOpen,
      title: "Islamic Studies",
      description: "Comprehensive Quranic education, Arabic language classes, and Islamic values integration in daily learning.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: Trophy,
      title: "Sports & Athletics",
      description: "Football, athletics, table tennis, and other physical activities to promote fitness and teamwork.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Palette,
      title: "Arts & Crafts",
      description: "Creative expression through painting, drawing, crafts, and various artistic projects.",
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Music,
      title: "Nasheeds & Performances",
      description: "Islamic songs, poetry recitation, and cultural performances to develop confidence and talent.",
      color: "bg-primary/10 text-primary",
    },
    {
      icon: FlaskConical,
      title: "Science Club",
      description: "Hands-on experiments, STEM projects, and science fairs to nurture curiosity and innovation.",
      color: "bg-secondary/50 text-secondary-foreground",
    },
    {
      icon: Globe,
      title: "Educational Excursions",
      description: "Field trips to museums, historical sites, and educational centers for experiential learning.",
      color: "bg-accent/10 text-accent",
    },
    {
      icon: Heart,
      title: "Community Service",
      description: "Charitable activities and community outreach programs to instill values of compassion and giving.",
      color: "bg-destructive/10 text-destructive",
    },
    {
      icon: Users,
      title: "Leadership Programs",
      description: "Student council, peer mentoring, and leadership workshops to develop future leaders.",
      color: "bg-primary/10 text-primary",
    },
  ];

  const events = [
    "Annual Sports Day",
    "Quranic Recitation Competition",
    "Science Fair & Exhibition",
    "Cultural Day Celebration",
    "Inter-School Competitions",
    "Parents' Day & Open House",
    "Graduation Ceremony",
    "Ramadan Special Programs",
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Activities</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Enriching Education Through Diverse Learning Experiences
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            At Al-Hidaayat, we believe that education extends beyond the classroom. Our comprehensive 
            activities program is designed to develop well-rounded individuals by nurturing talents, 
            building character, and fostering creativity alongside academic excellence.
          </p>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Programs & Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className={`w-14 h-14 ${activity.color} rounded-full flex items-center justify-center mb-3`}>
                    <activity.icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Annual Events */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Annual Events & Celebrations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {events.map((event, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-bold">{index + 1}</span>
                      </div>
                      <p className="text-foreground font-medium">{event}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Why Extracurricular Activities Matter
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Build Confidence</h3>
                <p className="text-muted-foreground">
                  Activities help students discover their strengths and build self-esteem
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Develop Skills</h3>
                <p className="text-muted-foreground">
                  Learn teamwork, leadership, and communication through hands-on experiences
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">Foster Values</h3>
                <p className="text-muted-foreground">
                  Instill Islamic values and good character through meaningful engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;
