import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export function Nav() {
    return (<div className="bg-gray-800">
        <NavigationMenu className="text-white mx-auto max-w-7xl py-2     flex justify-between">
            <div>Logo</div>
            <NavigationMenuList>
                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink asChild>
                        <Link href="/">Home</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink asChild>
                        <Link href="/projects">Projects</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem className="list-none">
                    <NavigationMenuLink asChild>
                        <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                </NavigationMenuItem>




            </NavigationMenuList>
        </NavigationMenu>
    </div >

    )
}