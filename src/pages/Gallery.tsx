import { Card } from "@/components/ui/card";
import schoolBuilding from "@/assets/school-building.jpg";

const Gallery = () => {
  // Using the school building image as a placeholder
  const galleryImages = [
    { id: 1, title: "School Building", category: "Campus" },
    { id: 2, title: "Classroom Activities", category: "Learning" },
    { id: 3, title: "Sports Day", category: "Events" },
    { id: 4, title: "Science Lab", category: "Facilities" },
    { id: 5, title: "Library", category: "Facilities" },
    { id: 6, title: "Assembly", category: "Events" },
    { id: 7, title: "Art Class", category: "Activities" },
    { id: 8, title: "Computer Lab", category: "Facilities" },
    { id: 9, title: "Graduation Ceremony", category: "Events" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl opacity-95 max-w-3xl mx-auto">
            Capturing Memories, Celebrating Moments
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-muted-foreground text-lg leading-relaxed">
            Take a visual journey through Al-Hidaayat Group of Schools. From our modern facilities 
            to exciting events, these images showcase the vibrant life and learning environment at our school.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <Card key={image.id} className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={schoolBuilding}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-primary-foreground">
                      <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                      <p className="text-sm opacity-90">{image.category}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-8">
              Featured: Our Campus
            </h2>
            <Card className="overflow-hidden">
              <img
                src={schoolBuilding}
                alt="Al-Hidaayat School Campus"
                className="w-full h-auto"
              />
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Al-Hidaayat Group of Schools Campus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our beautiful campus features modern architecture with vibrant green and white colors 
                  that create an inspiring learning environment. The facilities are designed to provide 
                  students with comfortable, well-equipped spaces for both academic and extracurricular activities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Campus
          </h2>
          <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
            Experience Al-Hidaayat in person. Schedule a campus tour and see our facilities firsthand.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-primary-foreground text-primary rounded-md font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Schedule a Visit
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
