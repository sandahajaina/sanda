import { FolderCheck, User, Layers2, BriefcaseBusiness } from 'lucide-react';
import { NavItem } from "./NavItem";

const sections = [
  { href: "/", label: "Profile", number: "01", icon: <User /> },
  { href: "/project", label: "Project", number: "02", icon: <FolderCheck /> },
  { href: "/experience", label: "Experience", number: "03", icon: <BriefcaseBusiness /> },
  { href: "/stack", label: "Stack", number: "04", icon: <Layers2 /> }
];

export function Sidebar() {
  return (
    <aside>
      {/* TODO: header SYSTEM INDEX / V1.0.42 */}
      <nav>
        {sections.map((section) => (
          <NavItem key={section.href} {...section} />
        ))}
      </nav>
      {/* TODO: footer SYSTEM READY */}
    </aside>
  );
}