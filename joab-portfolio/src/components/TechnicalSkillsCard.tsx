import { Check, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { IconCircle } from "./IconCircle";

export const TechnicalSkillsCard = ({ name, skills }: { name: string, skills: string[] }) => {

    const iconClass = "absolute left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/2";

    return (
        <>
            <Card className="relative overflow-visible">
                <IconCircle className={iconClass}>
                    <Code className="size-8 text-muted-foreground" />
                </IconCircle>

                <CardHeader className="pt-10 text-center">
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2 px-6 pb-6">
                    {skills.map((skill) => (
                    <div key={skill} className="flex gap-2">
                        <Check className="size-4 shrink-0 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">{skill}</p>
                    </div>
                    ))}
                </CardContent>
            </Card>
        </>
    );
}