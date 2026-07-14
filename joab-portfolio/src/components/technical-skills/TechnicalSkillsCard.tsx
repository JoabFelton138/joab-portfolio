import { Check, CodeXml, Cpu, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { IconCircle } from "../IconCircle";

export const TechnicalSkillsCard = ({ name, skills }: { name: string, skills: string[] }) => {

    const titleIconClass = "size-10 text-icon";

    const getIcon = () => {
        switch (name) {
            case "Frontend Development":
                return <CodeXml className={titleIconClass} />;
            case "Engineering Practices":
                return <Gauge className={titleIconClass}/>;
            case "Broader Technical Skills":
                return <Cpu className={titleIconClass}/>;
        }
    };

    const iconClass = "absolute left-1/2 top-0 flex size-16 -translate-x-1/2 -translate-y-1/2";

    return (
        <>
            <Card className="relative overflow-visible">
                <IconCircle className={iconClass}>
                    {getIcon()}
                </IconCircle>

                <CardHeader className="pt-10 text-center">
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardContent className="px-4 pb-4">
                <ul className="mx-auto flex w-fit flex-col gap-2">
                    {skills.map((skill) => (
                        <li key={skill} className="flex items-center gap-2">
                        <Check className="size-4 shrink-0 text-icon-nested" />
                        <span className="text-base text-muted-foreground">{skill}</span>
                        </li>
                    ))}
                </ul>
                </CardContent>
            </Card>
        </>
    );
}