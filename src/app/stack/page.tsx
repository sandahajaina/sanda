import { Pill } from "@/components/Pill";
import { TechTag } from "@/components/TechTag";

export default function StackPage() {
  return (
    <div className="border border-border p-6 bg-white text-label font-mono">
      <div className="uppercase border-b border-border pb-2 mb-4 inline-block text-">
        L1 // Languages
      </div>
      <div className="flex gap-3">
        <TechTag label="C" />
        <TechTag label="C++" />
        <TechTag label="JavaScript" />
        <TechTag label="TypeScript" />
        <TechTag label="Python" />
        <TechTag label="PHP" />
        <TechTag label="SQL" />
      </div>
    </div>
  );
}
