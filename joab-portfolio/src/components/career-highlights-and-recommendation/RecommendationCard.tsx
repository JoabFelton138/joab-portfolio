import { Quote } from "lucide-react"
import { IconCircle } from "../IconCircle"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import { FaLinkedin } from "react-icons/fa"

export const RecommendationCard = () => {

    const recommendation = "It was a joy to work with Joab. He took real pride in the designs he put together, and he improved on our own internal attempts by orders of magnitude. The work he left behind has been a superb step change in quality, and his presence in the office was uplifting and delightful. I'd happily recommend him as a considered, productive asset in any other small or large team."

    return (
        <Card className="flex h-full flex-col justify-start gap-0 p-6">
            <CardHeader className="flex flex-row items-center gap-4 px-0 pb-6">
                <IconCircle className="size-16 shrink-0">
                    <Quote className="size-8 text-icon" />
                </IconCircle>
                <CardTitle className="text-lg leading-snug">LinkedIn Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                <div className="border-b border-border-accent pb-6">
                    <p className="text-base italic leading-relaxed text-muted-foreground">
                        {recommendation}
                    </p>
                </div>
                <div className="flex flex-col gap-1 pt-6">
                    <p className="text-base font-semibold text-foreground">
                        Samuel Ghee
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Platform Director at Fornax Energy
                    </p>
                    <Button asChild variant="outline" size="lg" className="mt-4 w-fit gap-2"> 
                        <a href={"https://www.linkedin.com/in/joab-felton/"} target="_blank" rel="noopener noreferrer">
                            View on LinkedIn
                            <FaLinkedin className="size-4" />
                        </a>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}
