import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
    const imgClass = "mx-auto md:mx-0 size-56 md:size-64 lg:size-72 rounded-full object-cover shrink-0 border-4 border-background shadow-xl";
    return (
        <section className="mx-auto w-full max-w-5xl px-4 py-12 md:py-16 lg:py-15"> 
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-8 md:gap-12">           
                <img
                    src="/me.webp"
                    alt="Joab"
                    className={imgClass}
                />
                <div className="space-y-4 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
                        Hi, I'm Joab
                    </h1>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-prose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <Button variant="outline" size="lg">
                        Download CV <ArrowDownIcon className="size-4" />
                    </Button>
                </div>
            </div>
        </section>
    );
}