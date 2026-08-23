import { Pill } from "@/components/Pill";

export default function ProfilePage() {
  return (
    <div className="w-full px-10">
      <div className="text-label uppercase">
        <span>Sanda Hajaina </span>
        <span>// Software engineer </span>
        <span>// 42 Antananarivo</span>
      </div>
      <div>
        <span className="text-body">I build software from systems to products</span>
      </div>
      <div>
        <div className="flex gap-3">
          <Pill label="C / C++" variant="neutral" />
          <Pill label="Web & Mobile" variant="neutral" />
          <Pill label="Full-Stack" variant="neutral" />
          <Pill label="AI & Automation" variant="neutral" />
        </div>
      </div>
    </div>
  );
}
