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
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
            ]
        },
        {
            name: "Frontend Development",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
            ]
        },
        {
            name: "Frontend Development",
            skills: [
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
            ]
        }
    ];
    
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pt-2">            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 pt-8 md:gap-y-10 lg:gap-y-8">                
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