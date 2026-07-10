import { cn } from "@/lib/utils"

interface IconCircleProps {
    className?: string;
    children: React.ReactNode;
}

export const IconCircle = ({className, children} : IconCircleProps) => {
    return (
        <div className={cn("flex items-center justify-center rounded-full bg-muted shadow-md ring-4 ring-background bg-[var(--icon-circle)]", className)}>
            {children}
        </div>
    )
}