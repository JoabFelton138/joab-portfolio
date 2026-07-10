import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";

export const About = () => {
    const imgClass = "size-40 md:size-48 lg:size-60 rounded-full object-cover shrink-0 border-4 border-background shadow-xl";
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pt-12 pb-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-6 items-center">
                <div className="flex justify-center">
                    <img
                        src="/me.webp"
                        alt="Joab"
                        className={imgClass}
                    />
                </div>
                <div className="lg:col-span-2 space-y-3 text-center lg:text-left lg:pr-6">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">
                        Hi, I'm Joab
                    </h1>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed max-w-prose mx-auto lg:mx-0">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2">
                        <Button variant="outline" size="lg">
                            Download CV <ArrowDownIcon className="size-4" />
                        </Button>
                        <Button variant="outline" size="lg">
                            Download Pen Pic <ArrowDownIcon className="size-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
