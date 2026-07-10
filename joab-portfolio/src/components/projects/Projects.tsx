import { ProjectCard } from "./ProjectCard";

const projects = [
    {
        title: "C Lewis Exterior Cleaning",
        description: "A marketing site for an exterior cleaning company, helping promote their services and customer reach",
        image: "https://avatar.vercel.sh/shadcn1",
        url: "https://clewisexteriorcleaning.co.uk/",
        github: "https://github.com/JoabFelton138/C-Lewis-Exterior-Cleaning",
        technologies: ["React", "Vite", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    },
    {
        title: "Sam LT Illustration [WIP]",
        description: `An upcoming portfolio website aimed at highlighting an artist's illustrations and photography.`,
        image: "https://avatar.vercel.sh/shadcn1",
        url: "https://sam-l-t-illustration.vercel.app/",
        github: "https://github.com/JoabFelton138/Sam-L-T-Illustration",
        technologies: ["Next.js", "Zustand", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    },
    {
        title: "Cafe Connect Data Pipeline",
        description: "Pulls raw CSVs from S3, cleans and structures the records to ensure data is ready for analysis.",
        image: "https://avatar.vercel.sh/shadcn1",
        github: "https://github.com/JoabFelton138/Cafe_Connect_Data_Pipeline_Generation",
        technologies: ["Python", "AWS SQS", "AWS Lambda", "AWS Redshift", "AWS S3", "AWS QuickSight", "Docker"],
    },
];

export const Projects = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pt-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};