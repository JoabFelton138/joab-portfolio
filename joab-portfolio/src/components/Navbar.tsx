import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { useDownloadDoc } from "@/lib/useDownloadDoc";
import { Spinner } from "./ui/spinner";

export const Navbar = () => {

    const cv = useDownloadDoc("cv");

    const navItems = [
        {label: "About", href: "#about"},
        {label: "Technical Skills", href: "#technical-skills"},
        {label: "Career Highlights", href: "#career-highlights"},
        {label: "Projects", href: "#projects"},
    ]


    return (
        <div className="flex items-center justify-between w-full px-4 py-4 border-b border-border shadow-sm sticky top-0 bg-background z-50">
            <NavigationMenu>
                <NavigationMenuList className="">
                    {navItems.map((navItem) => (
                        <NavigationMenuItem key={navItem.href}>
                            <NavigationMenuLink
                                href={navItem.href}
                                className="hover:bg-[var(--button-outline-hover)] hover:text-[var(--button-outline-fg-hover)] focus:bg-[var(--button-outline-hover)] focus:text-[var(--button-outline-fg-hover)] data-active:bg-[var(--button-outline-hover)] data-active:text-[var(--button-outline-fg-hover)] data-active:hover:bg-[var(--button-outline-hover)] data-active:focus:bg-[var(--button-outline-hover)]"
                            >
                                {navItem.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Button variant="outline" className="cursor-pointer" onClick={() => cv.handleClickDownload()}>
                CV {cv.isDownloading ? <Spinner /> : <ArrowDownIcon className="size-4" />}
            </Button>
        </div>
    );
}