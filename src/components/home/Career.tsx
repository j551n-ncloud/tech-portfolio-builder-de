
import { Briefcase, Calendar, School } from "lucide-react";

export function Career() {
  const careerItems = [
    {
      period: "2022-Present",
      company: "Heidelberg DKFZ",
      role: "Apprentice as IT Specialist for System Integration",
      icon: Briefcase
    },
    {
      period: "2021-2022",
      company: "Rheingönheim Vögele",
      role: "Worked as NFZ Mechanic",
      icon: Briefcase
    },
    {
      period: "2017-2021",
      company: "Mannheim Mercedes",
      role: "Apprenticeship as Automotive Mechanic (Cars and NFZ)",
      icon: Briefcase
    },
    {
      period: "2016",
      company: "Ludwigshafen BASF",
      role: "Internship in the field of Computer Science (Bereich Informatik)",
      icon: School
    },
    {
      period: "2016",
      company: "Weissach Porsche",
      role: "BORS Internship in Prototyping and Pre-production (Bereich Prototypen und Vorproduktion)",
      icon: School
    },
    {
      period: "2015",
      company: "Radolfzell TRW",
      role: "Internship in Production and Material Testing (Bereich Produktion und Materialtestung)",
      icon: School
    },
    {
      period: "2013",
      company: "Schwetzingen GRN",
      role: "Internship in the field of Computer Science (Bereich Fachinformatik)",
      icon: School
    }
  ];

  return (
    <section id="career" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Career History</h2>
          <p className="text-lg text-muted-foreground">
            My professional journey and work experience
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {careerItems.map((item, index) => (
              <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''} md:flex-row`}>
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                  <div className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-xl">{item.company}</h3>
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{item.period}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{item.role}</p>
                  </div>
                </div>

                {/* Timeline node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-tech-100 text-tech-600 border border-tech-200 z-10">
                  <item.icon className="h-5 w-5" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground italic">
            Photo by Alexandre Debiève / Unsplash
          </p>
        </div>
      </div>
    </section>
  );
}
