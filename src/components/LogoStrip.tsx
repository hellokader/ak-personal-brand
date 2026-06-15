import { logos } from "../data/content";

export default function LogoStrip() {
  return (
    <section className="logos">
      <div className="wrap">
        <span className="lab">Trusted by owners at</span>
        <div className="names">
          {logos.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
