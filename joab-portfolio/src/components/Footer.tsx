import { Cloud, CodeIcon, Layers } from "lucide-react";
import { IconCircle } from "./IconCircle";

export const Footer = () => {

    const codeIcon = <CodeIcon className="size-6 text-muted-foreground" />;

    const techStack = [
        {
            name: "React",
            icon: codeIcon
        },
        {
            name: "Vite",
            icon: codeIcon
        },
        {
            name: "TypeScript",
            icon: codeIcon
        },
        {
            name: "Tailwind CSS",
            icon: codeIcon
        },
        {
            name: "Shadcn UI",
            icon: codeIcon
        }
    ];

    const hostedBy = {
        name: "Amazon Web Services",
        icon: <Cloud/>
    };

    return (
        <footer className="bg-background border-t border-borderp-8">
            <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8 p-8 md:gap-6">
                <div className="space-y-4 border-b border-border pb-8 md:border-b-0 md:border-r md:pb-0 md:pr-4">
                    <div className="flex items-center gap-3">
                          <IconCircle className="size-12 shrink-0">
                                <Layers className="size-6 text-muted-foreground" />
                            </IconCircle>
                        <h3 className="font-semibold">Built with</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                            <div 
                                className="flex items-center gap-4 rounded-lg border border-border bg-background px-3 py-2" 
                                key={tech.name}
                            >
                                {tech.icon}
                                <span className="text-sm text-muted-foreground">{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};