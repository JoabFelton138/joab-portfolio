import { ArrowDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";

export const Navbar = () => {

    const navItems = [
        {label: "About", href: "/"},
        {label: "Technical Skills", href: "/technical-skills"},
        {label: "Career Highlights", href: "/career-highlights"},
        {label: "Projects", href: "/projects"},
    ]


    return (
        <div className="flex items-center justify-between w-full px-4 py-4 border-b border-neutral-200 shadow-sm sticky top-0">
            <NavigationMenu>
                <NavigationMenuList className="">
                    {navItems.map((navItem) => (
                        <NavigationMenuItem key={navItem.href}>
                            <NavigationMenuLink href={navItem.href}>
                                {navItem.label}
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>
            <Button asChild variant="outline">
                <a>
                    CV <ArrowDownIcon className="size-4" />
                </a>
            </Button>
        </div>
    );
}