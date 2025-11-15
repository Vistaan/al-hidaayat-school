import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Pin } from "lucide-react";

const pinnedNews = [
  {
    id: 1,
    title: "Admission Open for Academic Year 2025-2026",
    date: "2025-01-10",
    category: "Admissions",
    excerpt: "We are now accepting applications for the new academic year. Limited seats available across all grades.",
    isPinned: true,
  },
];

const newsItems = [
  {
    id: 2,
    title: "Annual Sports Day - Save the Date",
    date: "2025-01-08",
    category: "Events",
    excerpt: "Join us for our Annual Sports Day on February 15th, 2025. Students from all grades will participate in various sporting events.",
  },
  {
    id: 3,
    title: "Parent-Teacher Meeting Schedule Announced",
    date: "2025-01-05",
    category: "Academics",
    excerpt: "The first semester parent-teacher meetings will be held from January 20-22. Individual time slots will be shared via SMS.",
  },
  {
    id: 4,
    title: "Science Fair Winners Announced",
    date: "2024-12-28",
    category: "Achievements",
    excerpt: "Congratulations to all participants of our Annual Science Fair. The winning projects showcased exceptional creativity and scientific thinking.",
  },
  {
    id: 5,
    title: "Winter Break Schedule",
    date: "2024-12-15",
    category: "Announcements",
    excerpt: "School will be closed for winter break from December 20, 2024 to January 2, 2025. Classes will resume on January 3rd.",
  },
  {
    id: 6,
    title: "New Library Books Added",
    date: "2024-12-10",
    category: "Facilities",
    excerpt: "Our library has been enriched with over 200 new books across various subjects and age groups. Students are encouraged to explore the new collection.",
  },
  {
    id: 7,
    title: "Islamic Studies Competition Results",
    date: "2024-12-05",
    category: "Achievements",
    excerpt: "Students from Al-Hidaayat Group of Schools excelled in the Inter-School Islamic Studies Competition, securing first position in Quran recitation.",
  },
  {
    id: 8,
    title: "School Uniform Reminder",
    date: "2024-11-28",
    category: "General",
    excerpt: "Parents are reminded to ensure students wear proper school uniform daily. Uniform guidelines are available in the student handbook.",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "Annual Sports Day",
    date: "2025-02-15",
    time: "8:00 AM - 2:00 PM",
  },
  {
    id: 2,
    title: "Science Exhibition",
    date: "2025-03-10",
    time: "10:00 AM - 4:00 PM",
  },
  {
    id: 3,
    title: "Cultural Day Celebration",
    date: "2025-03-25",
    time: "9:00 AM - 1:00 PM",
  },
  {
    id: 4,
    title: "Final Exams Begin",
    date: "2025-04-15",
    time: "As per schedule",
  },
];

const getCategoryColor = (category: string) => {
  const colors: Record<string, string> = {
    Admissions: "bg-primary text-primary-foreground",
    Events: "bg-secondary text-secondary-foreground",
    Academics: "bg-accent text-accent-foreground",
    Achievements: "bg-emerald-100 text-emerald-900 dark:bg-emerald-900 dark:text-emerald-100",
    Announcements: "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100",
    Facilities: "bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-purple-100",
    General: "bg-muted text-muted-foreground",
  };
  return colors[category] || "bg-muted text-muted-foreground";
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

const News = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">News & Announcements</h1>
          <p className="text-xl opacity-90 max-w-2xl">
            Stay updated with the latest news, events, and announcements from Al-Hidaayat Group of Schools
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content - News */}
          <div className="lg:col-span-2 space-y-6">
            {/* Pinned News */}
            {pinnedNews.map((item) => (
              <Card key={item.id} className="border-primary shadow-lg">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Pin className="h-5 w-5 text-primary" />
                        <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                      </div>
                      <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(item.date)}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}

            {/* Recent News */}
            <div className="space-y-4">
              {newsItems.map((item) => (
                <Card key={item.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="mb-2">
                          <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                        <CardDescription className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {formatDate(item.date)}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.excerpt}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - Upcoming Events */}
          <div className="space-y-6">
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="pb-4 border-b border-border last:border-0 last:pb-0">
                    <h3 className="font-semibold text-foreground mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(event.date)}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {event.time}
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
