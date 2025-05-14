
import { Card, CardContent } from "@/components/ui/card";
import { SkillItem } from "@/data/expertise";

interface SkillsGridProps {
  skills: SkillItem[];
}

export function SkillsGrid({ skills }: SkillsGridProps) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {skills.slice(0, 4).map((skill, index) => (
          <Card key={index} className="card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex gap-3 items-start">
                {skill.icon}
                <span className="text-muted-foreground">{skill.skill}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        {skills.slice(4).map((skill, index) => (
          <Card key={index} className="card-hover border-tech-100 dark:border-tech-800/30 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex gap-3 items-start">
                {skill.icon}
                <span className="text-muted-foreground">{skill.skill}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
