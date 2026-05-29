/* Scenario Three / Steven Green — website kit primitives, header, footer.
   Markup mirrors the real stevengreen.com.au so site.css styles it 1:1. */

const Arrow = ({ d = "ne" }) => (
  <span className="ar" aria-hidden="true">{d === "down" ? "\u2193" : "\u2197"}</span>
);

// Pill / ghost / text-link button
function Button({ children, href = "#", variant = "pill", lg, ghost, arrow = "ne", onClick }) {
  if (variant === "link") {
    return <a href={href} className="btn-link" onClick={onClick}>{children} <Arrow d={arrow} /></a>;
  }
  const cls = ["btn", "btn-pill", lg ? "btn-lg" : "", ghost ? "btn-ghost" : ""].filter(Boolean).join(" ");
  return <a href={href} className={cls} onClick={onClick}>{children} <Arrow d={arrow} /></a>;
}

// Wide-tracked uppercase section label (sage underline)
const CapTitle = ({ children, sage }) => (
  <p className={"cap-title" + (sage ? " cap-title-sage" : "")}>{children}</p>
);

// Two-tone section heading: strong clause + muted clause
function SectionHead({ label, sageLabel, strong, muted, id }) {
  return (
    <div className="section-head">
      {label && <CapTitle sage={sageLabel}>{label}</CapTitle>}
      <h2 className="section-h" id={id}>
        <span className="hi-strong">{strong}</span>
        {muted && <> <span className="hi-muted">{muted}</span></>}
      </h2>
    </div>
  );
}

// Sticky header
function Header({ links, onNav }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const sc = document.getElementById("kit-scroll");
    const fn = () => setScrolled((sc ? sc.scrollTop : window.scrollY) > 8);
    const t = sc || window; t.addEventListener("scroll", fn); fn();
    return () => t.removeEventListener("scroll", fn);
  }, []);
  return (
    <header className={"site-header" + (scrolled ? " scrolled" : "")}>
      <div className="container header-bar">
        <a href="#top" className="brand" onClick={(e) => onNav(e, "top")}>Steven Green<span className="post">CA</span></a>
        <nav className="nav-primary" aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={"#" + l.id} onClick={(e) => onNav(e, l.id)}>{l.label}</a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-pill" onClick={(e) => onNav(e, "contact")}>Express interest <Arrow /></a>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-bar">
        <span className="ft-brand">Steven Green<span className="post">CA</span></span>
        <span className="ft-line">Strategic Finance &middot; Australian Wine</span>
        <span className="ft-link"><a href="#">email@stevengreen.com.au</a></span>
        <span className="ft-link"><a href="#">LinkedIn</a></span>
        <span className="ft-yr">&copy; 2026</span>
      </div>
      <div className="container footer-meta">
        <span className="ft-entity">Antipodean Holdings Group Pty Ltd &nbsp;&middot;&nbsp; ABN 69 692 578 091</span>
        <span className="ft-legal">
          <a href="#">Disclaimer</a><span className="ft-sep" aria-hidden="true">&middot;</span><a href="#">Privacy</a>
        </span>
      </div>
    </footer>
  );
}

Object.assign(window, { Arrow, Button, CapTitle, SectionHead, Header, Footer });
