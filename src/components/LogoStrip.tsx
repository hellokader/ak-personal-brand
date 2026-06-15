import { logos } from "../data/content";

// Each logo links to a section or placeholder # for now
const logoLinks = [
  "#work",
  "#services",
  "#",
  "#",
  "#",
  "#work",
  "#",
];

export default function LogoStrip() {
  return (
    <section className="logos">
      <div className="wrap">
        <span className="lab">Trusted by owners at</span>
        <div className="names">
          {logos.map((name, i) => (
            <a key={name} href={logoLinks[i]} className="logo-link">
              {name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
