import { CareerHighlightsCard } from "./CareerHighlightsCard";
import { RecommendationCard } from "./RecommendationCard";

export const CareerHighlights = () => {
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-x-6 gap-y-12 pt-8 md:gap-y-10 lg:gap-y-8">
                <CareerHighlightsCard />
                <RecommendationCard />
            </div>
        </section>
    );
}