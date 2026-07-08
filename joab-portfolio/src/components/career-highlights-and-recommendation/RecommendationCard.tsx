import { Link, Quote } from "lucide-react"
import { IconCircle } from "../IconCircle"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"

export const RecommendationCard = () => {

    const recommendation = "It was a joy to work with Joab. He took real pride in the designs he put together, and he improved on our own internal attempts by orders of magnitude. The work he left behind has been a superb step change in quality, and his presence in the office was uplifting and delightful. I'd happily recommend him as a considered, productive asset in any other small or large team."

    return (
        <Card className="flex h-full flex-col justify-start gap-0 p-6">
            <CardHeader className="flex flex-row items-center gap-4 px-0 pb-6">
                <IconCircle className="size-12">
                    <Quote className="size-6 text-muted-foreground" />
                </IconCircle>
                <CardTitle>LinkedIn Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="px-0">
                <div className="border-b border-muted-foreground/10 pb-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground">
                    {recommendation}
                </p>
                </div>
                <div className="flex flex-col gap-1 pt-6">
                    <p className="font-semibold text-foreground">
                        Samuel Ghee
                    </p>
                    <p className="text-sm text-muted-foreground">
                        Platform Director at Fornax Energy
                    </p>
                    <Button variant="outline" className="mt-4 w-fit gap-2">
                        View on LinkedIn
                        <Link/>
                    </Button>
                </div>
            </CardContent>
        </Card>
    )
}