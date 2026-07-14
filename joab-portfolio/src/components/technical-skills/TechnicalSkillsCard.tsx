import { CodeXml, Cpu, Gauge, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { IconCircle } from "../IconCircle";

const cardMeta: Record<
    string,
    { icon: LucideIcon; blurb: string }
> = {
    "Frontend Development": {
        icon: CodeXml,
        blurb: "UI systems & modern web stacks",
    },
    "Engineering Practices": {
        icon: Gauge,
        blurb: "Quality, tooling & delivery",
    },
    "Broader Technical Skills": {
        icon: Cpu,
        blurb: "Collaboration & platform fluency",
    },
};

export const TechnicalSkillsCard = ({
    name,
    skills,
}: {
    name: string;
    skills: string[];
}) => {
    const meta = cardMeta[name];
    const Icon = meta?.icon;

    return (
        <Card className="relative flex h-full flex-col overflow-hidden border-0 ring-1 ring-border">
            <CardHeader className="gap-4 px-6 pt-6 pb-5">
                <div className="flex items-start gap-4">
                    {Icon ? (
                        <IconCircle className="size-16 shrink-0 shadow-md ring-2 ring-background">
                            <Icon className="size-8 text-icon" />
                        </IconCircle>
                    ) : null}
                    <div className="min-w-0 space-y-1 pt-1">
                        <CardTitle className="text-lg leading-snug">
                            {name}
                        </CardTitle>
                        {meta?.blurb ? (
                            <p className="text-sm text-muted-foreground">
                                {meta.blurb}
                            </p>
                        ) : null}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="flex flex-1 px-6 pt-5 pb-6">
                <div className="flex flex-wrap content-start gap-2">
                    {skills.map((skill) => (
                        <Badge
                            key={skill}
                            variant="secondary"
                            className="h-7 border-transparent bg-muted px-3 text-sm font-medium text-foreground"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
};
