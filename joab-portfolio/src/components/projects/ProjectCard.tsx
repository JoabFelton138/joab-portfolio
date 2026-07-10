import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";
import { Link } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  url?: string;
  github: string;
  technologies: string[];
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card size="sm" className="relative mx-auto flex h-full flex-col w-full max-w-sm pt-0">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription className="line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>
      <div className="border-t border-border-accent mx-4"/>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
                <Badge 
                    variant="secondary" 
                    className="h-6 px-2.5 text-xs font-medium bg-fill-soft text-secondary-foreground"
                    key={tech}>
                        {tech}
                </Badge>
            ))}
        </div>
      </CardContent>
      <CardFooter className="bg-background border-none flex flex-row gap-2">
        <Button asChild size="sm" variant="outline">
            <a href={project.github} target="_blank" rel="noopener noreferrer">
                View Github
                <FaGithub className="size-4" />
            </a>
        </Button>
        {project.url && (
            <Button asChild size="sm" variant="outline">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    View Website
                    <Link href={project.url} target="_blank"/>
                </a>
            </Button>
        )}
      </CardFooter>
    </Card>
  )
}
