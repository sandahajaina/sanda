import { FolderCheck, User, Layers2, BriefcaseBusiness } from 'lucide-react';
import { NavItem } from "./NavItem";

const sections = [
  { href: "/", label: "Profile", number: "01", icon: <User size={16}/> },
  { href: "/work", label: "Work", number: "02", icon: <FolderCheck size={16}/> },
  { href: "/experience", label: "Experience", number: "03", icon: <BriefcaseBusiness size={16}/> },
  { href: "/stack", label: "Stack", number: "04", icon: <Layers2 size={16}/> }
];

export function Sidebar() {
  return (
    <aside className='flex flex-col border-r border-secondary/20 px-5 py-5'>
      <nav className='flex flex-col gap-4'>
        {sections.map((section) => (
          <NavItem key={section.href} {...section} />
        ))}
      </nav>
    </aside>
  );
}