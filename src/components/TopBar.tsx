import { ticker, navLinks } from "../data/content";

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="ticker">
        <div className="wrap">
          {ticker.map((item, i) => (
            <span key={i}>
              {item.dot && <span className="dot">●</span>}
              {item.text}
            </span>
          ))}
        </div>
      </div>
      <nav className="nav">
        <div className="brand">
          <span className="mk" />
          Abdul Kader
        </div>
        <div className="navlinks">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
        <a href="#book" className="btn">
          Book a call →
        </a>
      </nav>
    </div>
  );
}
