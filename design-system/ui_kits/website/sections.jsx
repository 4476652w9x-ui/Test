/* Website sections — content & markup mirror stevengreen.com.au */

function Hero({ onNav }) {
  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow eoi-eyebrow">Expression of Interest <span className="dot">&middot;</span> Pilot program</p>
        <h1 className="hero-h"><span className="hi-strong">A finance practice for Australian wine.</span></h1>
        <p className="hero-sub">I&rsquo;m a chartered accountant. Twenty years in senior finance, mostly in professional services, with sell-side M&amp;A across that career. I&rsquo;m starting a practice focused on Australian wine. This page sets out a short pilot program I&rsquo;m running to test the offer with a small number of producers.</p>
        <div className="hero-cta">
          <Button href="#contact" lg onClick={(e) => onNav(e, "contact")}>Express interest</Button>
          <Button href="#reckoner" variant="link" arrow="down" onClick={(e) => onNav(e, "reckoner")}>Try the reckoners</Button>
          <a href="#offer" className="btn-link btn-link-muted" onClick={(e) => onNav(e, "offer")}>Read the program detail <Arrow d="down" /></a>
        </div>
      </div>
    </section>
  );
}

function Venn() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && el.classList.add("is-in")), { threshold: 0.3 });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <section className="venn-section" id="venn">
      <div className="container">
        <SectionHead label="Practice" strong="Strategic finance, M&A, wine."
          muted="Most CAs don\u2019t do M&A. Most M&A people don\u2019t end up in wine. The overlap is small \u2014 which is roughly the point of this practice." />
        <div className="venn-stage">
          <svg ref={ref} className="venn-svg" viewBox="0 0 600 460" role="img" aria-label="Strategic Finance, M&A and Wine overlap">
            <defs>
              <clipPath id="clipA"><circle cx="220" cy="200" r="135" /></clipPath>
              <clipPath id="clipC"><circle cx="300" cy="320" r="135" /></clipPath>
            </defs>
            <g clipPath="url(#clipC)"><g clipPath="url(#clipA)"><circle cx="380" cy="200" r="135" className="venn-core" /></g></g>
            <circle cx="220" cy="200" r="135" className="venn-ring venn-ring-1" />
            <circle cx="380" cy="200" r="135" className="venn-ring venn-ring-2" />
            <circle cx="300" cy="320" r="135" className="venn-ring venn-ring-3" />
          </svg>
        </div>
        <div className="venn-grid">
          <article className="venn-col"><h3 className="venn-label">Strategic Finance</h3><p>Chartered Accountant. Twenty years in senior finance. Forecasting, large-scale cost modelling, and the kind of decision support a board actually reads.</p></article>
          <article className="venn-col"><h3 className="venn-label">M&amp;A</h3><p>Sell-side M&amp;A in professional services. Pricing a business where the value sits in people, brand, and recurring engagement is a closer cousin to pricing a winery than to most other things.</p></article>
          <article className="venn-col"><h3 className="venn-label">Wine</h3><p>WSET Level 3, in progress. The interest is real, the credentialling is deliberate. Wine is where the practice goes from here.</p></article>
        </div>
      </div>
    </section>
  );
}

function Offer() {
  return (
    <section className="offer-section" id="offer">
      <div className="container">
        <SectionHead label="Offer" strong="Two pieces of work, at no cost."
          muted="Two engagements, free, for a small number of Australian wine producers selected through this Expression of Interest." />
        <div className="offer-cards">
          <article className="offer-card"><p className="offer-num">01</p><h3>A 13-week rolling cashflow model.</h3><p>Anchored to the vintage cycle, built from your own accounting data, delivered as a dashboard specific to the business. The point is that it gets used after I leave.</p></article>
          <article className="offer-card"><p className="offer-num">02</p><h3>A top-down cost model.</h3><p>Cuts by vintage, varietal, and channel. Built from the same ledger data and reconciled back to your P&amp;L and balance sheet &mdash; so margin across DTC, cellar door, club, wholesale, and export ties to your accounts.</p></article>
        </div>
        <p className="offer-footer">Both pieces delivered inside the pilot window. Turnaround is short.</p>
      </div>
    </section>
  );
}

function Reckoner({ onNav }) {
  const card = (num, title, body, items) => (
    <article className="reckoner-card">
      <p className="reckoner-card-num">{num}</p>
      <h3>{title}</h3>
      <p>{body}</p>
      <ul className="reckoner-card-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
      <a href="#" className="btn btn-pill" onClick={(e) => e.preventDefault()}>Open the reckoner <Arrow /></a>
    </article>
  );
  return (
    <section className="reckoner-section" id="reckoner">
      <div className="container">
        <SectionHead label="Preview" sageLabel strong="Two diagnostic tools, in miniature."
          muted="Miniature versions of the pilot deliverables, in the browser. Punch in some numbers and see what the model thinks. Nothing leaves the page." />
        <div className="reckoner-cards">
          {card("01", "Vintage Capacity Reckoner", "Cash runway, stock-to-sales, pre-vintage capacity gap, covenant pressure. A quick read on where the binding constraint sits before the next vintage.", ["Cash, debt, and facility headroom", "Stock-to-sales ratio", "Pre-vintage capacity gap", "Covenant pressure"])}
          {card("02", "Product Margin Reckoner", "Top-down from your P&L and CAPEX. Margin by product, vintage, and channel, with every allocated dollar mapped back to a P&L line.", ["Cash margin by SKU", "Re-cuts by vintage and channel", "Cost-allocation waterfall", "P&L reconciliation"])}
        </div>
        <p className="reckoner-note reckoner-note-foot">Both run in the browser. Inputs save to local storage only.</p>
      </div>
    </section>
  );
}

function Exchange() {
  return (
    <section className="exchange-section" id="exchange">
      <div className="container">
        <SectionHead label="Exchange" strong="What I ask in return." muted="Two things. Neither is financial." />
        <div className="exchange-grid">
          <article className="exchange-col"><h3 className="exchange-label">Candid feedback</h3><p>On the work, on the engagement, and on the offer itself. At this stage of the practice, an honest read is worth more than a fee.</p></article>
          <article className="exchange-col"><h3 className="exchange-label">A testimonial &mdash; only if the work earns it</h3><p>If you don&rsquo;t think it earned one, that&rsquo;s the end of it. No follow-up, no nudge. The request is contingent on you finding the work worth one.</p></article>
        </div>
        <p className="exchange-footer">That&rsquo;s the whole exchange. No retainer behind it, no upsell, no follow-on obligation.</p>
      </div>
    </section>
  );
}

function Eligibility() {
  const items = ["Owner-operated or family-held producers", "Willing to share working financial data under NDA", "A clear question or decision the modelling can pressure-test", "A balance of regions, varietals, and scale across the cohort"];
  return (
    <section className="eligibility-section" id="eligibility">
      <div className="container">
        <SectionHead label="Eligibility" strong="Open to Australian wine producers of any size."
          muted="Any scale, boutique through mid-tier, anywhere in Australia. Delivered remotely; one or two in-person sessions if it makes sense." />
        <p className="eligibility-label">Selection priorities</p>
        <ul className="eligibility-list">{items.map((i) => <li key={i}>{i}</li>)}</ul>
        <p className="eligibility-footer">Three to five producers in the cohort.</p>
      </div>
    </section>
  );
}

function Timeline() {
  const steps = [
    ["01", "30-minute call", "Confirm fit, scope, and the financial question at the centre of the engagement."],
    ["02", "NDA and data read-in", "NDA signed, working financial data read in. Nothing bespoke is needed \u2014 the work uses what is in the ledger."],
    ["03", "Build", "Models built, then walked through with you in a working session. Assumptions tested, questions answered."],
    ["04", "Delivery", "Final models handed over, a short written read on what the numbers show, and a feedback conversation."],
    ["05", "Testimonial \u2014 optional", "Only if you think the work earned one."],
  ];
  return (
    <section className="how-section" id="how">
      <div className="container">
        <SectionHead label="How it runs" strong="From first conversation to delivered models." />
        <ol className="how-timeline" role="list">
          {steps.map((s) => (
            <li className="how-step" key={s[0]}><p className="how-num">{s[0]}</p><h3>{s[1]}</h3><p>{s[2]}</p></li>
          ))}
        </ol>
        <p className="how-footer">Measured in weeks.</p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="split split-alt" id="about">
      <div className="container split-grid">
        <p className="eyebrow eyebrow-side">About</p>
        <div className="split-body">
          <h2 className="section-h">
            <span className="hi-strong">Steven Green, CA ANZ.</span>{" "}
            <span className="hi-muted">Currently a specialist CFO inside a 50-person management consulting business. Twenty years in senior finance, with sell-side M&amp;A in professional-services firms. The value sits in people, brand, and the work coming back &mdash; and the headline EBITDA is rarely the whole story. That habit of reading the business behind the number is what the practice brings to wineries.</span>
          </h2>
          <div className="split-actions">
            <Button href="#" ghost>LinkedIn</Button>
            <Button href="#" variant="link" arrow="down">Download CV</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = React.useState(false);
  const fields = [["Name", "name"], ["Email", "email"], ["Business name", "business"], ["Region", "region"]];
  return (
    <section className="contact" id="contact">
      <div className="container">
        <SectionHead label="Express interest" strong="How to respond."
          muted="Email email@stevengreen.com.au, or use the form. Tell me your name, business, region, rough scale, and the financial question you would most want pressure-tested." />
        <div className="contact-grid">
          <div className="contact-info">
            <ul className="ci-list">
              <li><span className="ci-lbl">Email</span><a href="#">email@stevengreen.com.au</a></li>
              <li><span className="ci-lbl">Phone</span><a href="#">+61 428 589 501</a></li>
              <li><span className="ci-lbl">LinkedIn</span><a href="#">stevegreenau <Arrow /></a></li>
              <li><span className="ci-lbl">Reply within</span><span>24 hours, with a short call to confirm fit</span></li>
            </ul>
          </div>
          <form className="brief-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {fields.map(([lbl, id]) => (
              <div className="field" key={id}><label htmlFor={"f-" + id}>{lbl}</label><input id={"f-" + id} type="text" required /></div>
            ))}
            <div className="field"><label htmlFor="f-scale">Scale</label><input id="f-scale" type="text" placeholder="Cases, revenue band, or headcount \u2014 whichever is comfortable" /></div>
            <div className="field"><label htmlFor="f-q">Question to pressure-test</label><textarea id="f-q" rows="4" required /></div>
            <div className="form-row">
              <button type="submit" className="btn btn-pill">Send EOI <Arrow /></button>
              <p className="form-msg" data-state={sent ? "ok" : ""}>{sent ? "Thanks \u2014 I\u2019ll reply within 24 hours." : ""}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Venn, Offer, Reckoner, Exchange, Eligibility, Timeline, About, Contact });
