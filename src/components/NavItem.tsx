"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
    href: string;
    label: string;
    number: string;
    icon: React.ReactNode;
}

export function NavItem({href, label, number, icon}: NavItemProps) {
    
    const pathname = usePathname();
    const isActive = pathname === href;
    
    return (
        <Link href={href} className={isActive ? "-translate-x-[4px]" : ""}>
            <span className={`flex items-center gap-3 pl-4 text-xs font-medium uppercase 
                ${isActive ? "border-l-4 border-black" : "border-l border-secondary"}`}>
                <span>{icon}</span>
                <span>{ number }</span>
                <span className="uppercase">{label}</span>
            </span>
        </Link>
    );
}