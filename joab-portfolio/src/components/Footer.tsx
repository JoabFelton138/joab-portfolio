import { Cloud, Layers } from "lucide-react";
import { IconCircle } from "./IconCircle";
import { SiReact, SiShadcnui, SiTailwindcss, SiTypescript, SiVite } from "react-icons/si";
import { FaAws } from "react-icons/fa";

export const Footer = () => {

    const iconClass = "size-4 text-icon-nested";
    const iconCircleClass = "size-12 shrink-0";
    const titleContainerClass = "flex items-center gap-3";
    const titleIconClass = "size-6 text-icon";
    const badgeClass = "inline-flex items-center gap-2 rounded-lg border border-border-accent bg-fill-soft px-3 py-2";
    const spanClass = "text-sm text-muted-foreground";

    const techStack = [
        {
            name: "React",
            icon: <SiReact className={iconClass} />
        },
        {
            name: "Vite",
            icon: <SiVite className={iconClass} />
        },
        {
            name: "TypeScript",
            icon: <SiTypescript className={iconClass} />
        },
        {
            name: "Tailwind CSS",
            icon: <SiTailwindcss className={iconClass} />
        },
        {
            name: "Shadcn UI",
            icon: <SiShadcnui className={iconClass} />
        }
    ];

    const hostedBy = {
        name: "Amazon Web Services",
        icon: <FaAws className="size-6 text-icon-nested" />
    };

    return (
        <footer className="border-t border-border bg-background">
        <div className="mx-auto w-full max-w-7xl px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-y-6 gap-x-4 md:gap-6">
                <div className="space-y-4 border-b border-border pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-6">
                    <div className={titleContainerClass}>
                          <IconCircle className={iconCircleClass}>
                                <Layers className={titleIconClass} />
                            </IconCircle>
                        <h3 className="font-semibold">Built with</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <div 
                                className={`flex ${badgeClass}`} 
                                key={tech.name}
                            >
                                {tech.icon}
                                <span className={spanClass}>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="space-y-4">
                    <div className={titleContainerClass}>
                          <IconCircle className={iconCircleClass}>
                                <Cloud className={titleIconClass} />
                            </IconCircle>
                        <h3 className="font-semibold">Hosted On</h3>
                    </div>
                    <div className={`inline-flex ${badgeClass}`}>
                        {hostedBy.icon}
                        <span className={spanClass}>
                            {hostedBy.name}
                        </span>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    );
};