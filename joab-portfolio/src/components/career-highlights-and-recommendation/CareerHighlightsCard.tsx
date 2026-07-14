import { GlobeIcon, Medal, RocketIcon, WrenchIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { IconCircle } from "../IconCircle";

export const CareerHighlightsCard = () => {
    
    const highlightClass = "size-5 text-icon-nested";

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
        <Card className="flex h-full flex-col justify-start gap-6 p-6 pb-8">
            <CardHeader className="grid grid-cols-[4rem_1fr] items-center gap-x-4 px-0 pb-0">
                <IconCircle className="size-16 justify-self-center">
                    <Medal className="size-8 text-icon" />
                </IconCircle>
                <CardTitle className="text-lg leading-snug">Career Highlights</CardTitle>
            </CardHeader>
            <CardContent className="px-0 pt-0">
                <div className="flex flex-col gap-5">
                {careerHighlights.map((ch) => (
                    <div className="grid grid-cols-[4rem_1fr] items-start gap-x-3" key={ch.highlight}>
                    <IconCircle className="size-10 shrink-0 justify-self-center">
                        {ch.icon}
                    </IconCircle>
                    <p className="text-base leading-relaxed text-muted-foreground">
                        {ch.highlight}
                    </p>
                    </div>
                ))}
                </div>
            </CardContent>
        </Card>
    );
}
