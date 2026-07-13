import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Spinner } from "./ui/spinner";
import { useDownloadDoc } from "@/lib/useDownloadDoc";

export const About = () => {

 

    const cv = useDownloadDoc("cv");
    const penPic = useDownloadDoc("pen-pic");
    const aboutMeText = `An inquisitive Developer with a First-Class Computer Science degree, specialising in building modern, user-focused applications that translate UI/UX designs into intuitive, production-ready interfaces. Proficient in React, Next.js, TypeScript, and modern JavaScript tooling, with strengths in writing clean, maintainable code, implementing responsive and accessible designs, and applying engineering best practices to ensure reliable delivery. Experienced working within cross-functional, client-facing teams, integrating APIs, and balancing technical constraints with stakeholder needs to deliver meaningful business outcomes.`;
    const imgClass = "size-45 md:size-55 lg:size-65 rounded-full object-cover shrink-0 border-4 border-background shadow-xl";
    
    return (
        <section className="mx-auto w-full max-w-7xl px-8 pt-12 pb-6" id="about">
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
                        {aboutMeText}
                    </p>
                    <div className="flex flex-row flex-wrap justify-center lg:justify-start gap-2">
                        <Button variant="outline" size="lg" onClick={() => cv.handleClickDownload()} className="cursor-pointer">
                            Download CV 
                            {cv.isDownloading ? <Spinner /> : <ArrowDownIcon className="size-4" />}
                        </Button>
                        <Button variant="outline" onClick={() => penPic.handleClickDownload()} size="lg" className="cursor-pointer">
                            Download Pen Pic 
                            {penPic.isDownloading ? <Spinner /> : <ArrowDownIcon className="size-4" />}
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
