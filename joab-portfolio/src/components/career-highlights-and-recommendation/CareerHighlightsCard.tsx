import { GlobeIcon, Medal, RocketIcon, WrenchIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { IconCircle } from "../IconCircle";

export const CareerHighlightsCard = () => {
    
    const highlightClass = "size-5 text-[var(--icon-color)]";

    const careerHighlights = [
        {
            icon: <WrenchIcon className={highlightClass} />,
            highlight: `Optimised Thrive's follow/unfollow workflow by replacing a chain of inefficient REST calls with GraphQL, defining queries and mutations and leveraging Apollo Client caching to reduce redundant requests, delivering a faster and more reliable user experience.`
        },
        {
            icon: <GlobeIcon className={highlightClass} />,
            highlight: `Revamped Thrive's navigation system ahead of LearnTech, migrating to shadcn/ui and Tailwind with full RTL support and a refreshed Storybook library, improving global accessibility and UI consistency.`
        },
        {
            icon: <RocketIcon className={highlightClass} />,
            highlight: `Established Fornax's first frontend capability from the ground up, defining coding standards and a component-based architecture that strengthened the company's market position as a tech-first competitor.`
        }
    ];

    return (
        <Card className="flex h-full flex-col justify-start p-6">
            <CardHeader className="grid grid-cols-[3rem_1fr] items-center gap-x-4 px-0 pb-0">
                <IconCircle className="size-12 justify-self-center">
                <Medal className="size-6 text-[var(--icon-color)]" />
                </IconCircle>
                <CardTitle>Career Highlights</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-4">
                <div className="flex flex-col gap-4">
                {careerHighlights.map((ch) => (
                    <div className="grid grid-cols-[3rem_1fr] items-start gap-x-3" key={ch.highlight}>
                    <IconCircle className="size-10 shrink-0 justify-self-center ring-2 shadow-sm">
                        {ch.icon}
                    </IconCircle>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                        {ch.highlight}
                    </p>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
    );
}