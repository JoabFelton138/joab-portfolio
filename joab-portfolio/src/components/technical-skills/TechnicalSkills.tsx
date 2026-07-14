import { TechnicalSkillsCard } from "./TechnicalSkillsCard";

export const TechnicalSkills = () => {

    interface TechnicalSkill {
        name: string;
        skills: string[];
    }

    const technicalSkills: TechnicalSkill[] = [
        {
            name: "Frontend Development",
            skills: [
                "React",
                "Next.js",
                "TypeScript",
                "JavaScript",
                "HTML",
                "CSS",
                "Tailwind CSS",
                "Material UI",
                "Shadcn UI",
            ]
        },
        {
            name: "Engineering Practices",
            skills: [
                "REST APIs",
                "GraphQL",
                "Redux",
                "Zustand",
                "Apollo Client",
                "Jest",
                "Storybook",
                "Git",
                "CI/CD",
                "Vite",
                "Performance",
                "Accessibility",
            ]
        },
        {
            name: "Broader Technical Skills",
            skills: [
                "Java",
                "Python",
                "SQL",
                "AWS",
                "Agile",
                "Scrum",
                "Pair Programming",
                "Code Reviews",
            ]
        }
    ];
    
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pt-4 pb-6" id="technical-skills">            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">                
                {technicalSkills.map((skill) => (
                    <TechnicalSkillsCard 
                        key={skill.name} 
                        name={skill.name}
                        skills={skill.skills} 
                    />
                ))}
            </div>
        </section>
    );
}