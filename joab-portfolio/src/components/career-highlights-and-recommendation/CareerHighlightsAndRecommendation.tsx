import { CareerHighlightsCard } from "./CareerHighlightsCard";
import { RecommendationCard } from "./RecommendationCard";

export const CareerHighlightsAndRecommendation = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pb-6">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-y-6 gap-x-4 md:gap-6 pt-4">
                <CareerHighlightsCard />
                <RecommendationCard />
            </div>
        </section>
    );
}