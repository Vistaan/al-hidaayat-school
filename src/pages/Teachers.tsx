import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const Teachers = () => {
  const teachers = [
    {
      name: "Mrs. Fatima Ahmed",
      role: "Principal",
      qualification: "M.Ed., B.Ed.",
      specialization: "Educational Leadership",
      experience: "15+ years",
      icon: Award,
    },
    {
      name: "Mr. Ibrahim Oladele",
      role: "Head Master",
      qualification: "B.Ed., PGDE",
      specialization: "Primary Education",
      experience: "12+ years",
      icon: GraduationCap,
    },
    {
      name: "Mrs. Aisha Mohammed",
      role: "Head Mistress",
      qualification: "B.Ed., M.A.",
      specialization: "Early Childhood Education",
      experience: "10+ years",
      icon: GraduationCap,
    },
    {
      name: "Mr. Abdul Rahman",
      role: "Senior Teacher",
      qualification: "B.Sc., PGDE",
      specialization: "Mathematics & Science",
      experience: "8+ years",
      icon: BookOpen,
    },
    {
      name: "Mrs. Khadijah Bello",
      role: "Senior Teacher",
      qualification: "B.A., PGDE",
      specialization: "English & Literature",
      experience: "9+ years",
      icon: BookOpen,
    },
    {
      name: "Mr. Yusuf Adeleke",
      role: "Teacher",
      qualification: "B.Sc., PGDE",
      specialization: "Computer Science",
      experience: "6+ years",
      icon: BookOpen,
    },
    {
      name: "Mrs. Maryam Hassan",
      role: "Teacher",
      qualification: "B.A., PGDE",
      specialization: "Islamic Studies",
      experience: "7+ years",
      icon: BookOpen,
    },
    {
      name: "Mr. Usman Abdullahi",
      role: "Teacher",
      qualification: "B.Sc., PGDE",
      specialization: "Physical Education",
      experience: "5+ years",
      icon: BookOpen,
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    if (role === "Principal") return "bg-primary text-primary-foreground";
    if (role.includes("Head")) return "bg-accent text-accent-foreground";
    if (role === "Senior Teacher") return "bg-secondary text-secondary-foreground";
    return "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Teachers</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Meet Our Dedicated Team of Qualified Educators
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Our teachers are the heart of Al-Hidaayat Group of Schools. Each member of our faculty 
            brings unique expertise, passion for education, and commitment to nurturing young minds. 
            They are not just educators but mentors who guide students on their journey to excellence.
          </p>
        </div>
      </section>

      {/* Teachers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {teachers.map((teacher, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <teacher.icon className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {teacher.name}
                    </h3>
                    <Badge className={getRoleBadgeColor(teacher.role)}>
                      {teacher.role}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground font-medium">Qualification</p>
                      <p className="text-foreground">{teacher.qualification}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Specialization</p>
                      <p className="text-foreground">{teacher.specialization}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground font-medium">Experience</p>
                      <p className="text-foreground">{teacher.experience}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Team
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Are you a passionate educator looking to make a difference? We're always looking for 
            dedicated teachers to join our growing family.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
