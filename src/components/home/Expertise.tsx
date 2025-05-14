
import { ExpertiseTable } from "./expertise/ExpertiseTable";
import { SkillsGrid } from "./expertise/SkillsGrid";
import { expertiseData, keySkills } from "@/data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-up">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-tech-700 to-tech-500 text-transparent bg-clip-text">My Expertise</h2>
          <p className="text-lg text-muted-foreground">
            A detailed breakdown of my technical skills and experience across various IT domains.
          </p>
        </div>

        <div className="mb-12">
          <ExpertiseTable expertiseData={expertiseData} />
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-tech-600 to-tech-400 text-transparent bg-clip-text animate-fade-in">Skills & Experience</h3>
          
          <SkillsGrid skills={keySkills} />
        </div>
      </div>
    </section>
  );
}
