const COPYRIGHT = "©2026";
const STATUS = "OPEN TO OPPORTUNITIES";
const LINKEDIN = "https://www.linkedin.com/in/sanda-hajaina/";
const GITHUB = "https://github.com/sandahajaina";

export function Footer() {
  return (
    <footer className="flex items-center justify-between border-t border-secondary/20 px-6 py-1 text-label uppercase font-mono">
      <div className="flex items-center gap-2">
        <span>{COPYRIGHT}</span>
        <span>SYSTEM STATUS: {STATUS}</span>
      </div>
      <div className="flex items-center gap-4">
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          LINKEDIN
        </a>
        <a
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          GITHUB
        </a>
      </div>
    </footer>
  );
}
