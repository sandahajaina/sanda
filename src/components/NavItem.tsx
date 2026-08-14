"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";

interface NavItemProps {
    href: string;
    label: string;
    number: string;
    icon: LucideIcon;
}

export function NavItem({href, label, number, icon: Icon}: NavItemProps) {
    
    const pathname = usePathname();
    
    return (
        <span className="">
            <Icon size={10}/>
        </span>
    );
}