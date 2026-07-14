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
    <Card className="relative mx-auto flex h-full w-full flex-col gap-0 pt-0">
      <div className="relative">
        <img
          src={project.image}
          alt={project.title}
          className="aspect-video w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </div>
      <CardHeader className="gap-2 px-5 pt-5 pb-4">
        <CardTitle className="text-base leading-snug">{project.title}</CardTitle>
        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </CardDescription>
      </CardHeader>
      <div className="mx-5 border-t border-border-accent" />
      <CardContent className="flex flex-1 px-5 pt-4 pb-4">
        <div className="flex flex-wrap content-start gap-2">
          {project.technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="h-6 border-transparent bg-muted px-2.5 text-xs font-medium text-foreground"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex flex-row flex-wrap gap-2 border-none bg-background px-5 pt-2 pb-5">
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
              <Link className="size-4" />
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
