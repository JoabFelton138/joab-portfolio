import { GlobeIcon, Medal, RocketIcon, WrenchIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { IconCircle } from "./IconCircle";

export const CareerHighlightsCard = () => {
    
    const highlightClass = "size-6 text-muted-foreground";

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
        <Card>
            <CardHeader className="flex flex-row items-center gap-4">
                <IconCircle className="size-15">
                    <Medal className="size-8 text-muted-foreground" />
                </IconCircle>
                <CardTitle>Career Highlights</CardTitle>
            </CardHeader>
                <CardContent className="pt-4 px-6 pb-6">
                    <div className="flex flex-col gap-6">
                        {careerHighlights.map((ch) => (
                            <div className="flex gap-4" key={ch.highlight}>
                                <IconCircle 
                                    className="size-10 shrink-0 self-start ring-2 shadow-sm">
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