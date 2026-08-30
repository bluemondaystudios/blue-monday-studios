import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Globe2,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Search,
  Sparkles,
  X,
  Zap
} from "lucide-react";
import "./styles.css";

const services = [
  {
    number: "01",
    icon: Globe2,
    title: "Websites",
    text: "Meaningful websites built around what your business actually needs — not just another digital brochure."
  },
  {
    number: "02",
    icon: Search,
    title: "Google Business",
    text: "Make your business discoverable when customers search for the products and services you provide."
  },
  {
    number: "03",
    icon: MessageCircle,
    title: "WhatsApp Business",
    text: "Turn everyday customer conversations into a proper, professional communication channel."
  },
  {
    number: "04",
    icon: Mail,
    title: "Business Email",
    text: "Professional email infrastructure on your own domain, so your business communicates like a business."
  },
  {
    number: "05",
    icon: Palette,
    title: "Graphic Design",
    text: "Visual systems that make your website, social presence, documents and communication feel like one brand."
  },
  {
    number: "06",
    icon: Zap,
    title: "Digital Systems",
    text: "Custom web applications, dashboards, workflows and automation when your business needs more."
  }
];

const packages = [
  {
    label: "FOUNDATION",
    price: "R2,000",
    description: "Get the essential digital connections in place.",
    items: ["Digital business presence", "Customer communication setup", "Product/service presentation", "Core web experience"],
    featured: false
  },
  {
    label: "INFRASTRUCTURE",
    price: "R5,000",
    description: "Build a complete digital foundation for your business.",
    items: ["Meaningful business website", "Google Business setup", "WhatsApp Business setup", "Professional email", "Graphic design package", "Digital infrastructure support"],
    featured: true
  }
];

function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""}`}>
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </div>
  );
}

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Closing the mobile menu lifts a `body { overflow: hidden }` lock. If we let the
  // clicked anchor's native jump fire in the same tick, the browser tries to scroll
  // while that lock is still in effect and the jump is silently dropped. Instead we
  // close the menu first, then scroll manually once the lock is actually gone.
  const navigateTo = (event, id) => {
    event.preventDefault();
    setMenuOpen(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
        history.pushState(null, "", `#${id}`);
      });
    });
  };

  return (
    <div className="site">
      <header className={`nav-wrap ${scrolled ? "scrolled" : ""} ${menuOpen ? "menu-open" : ""}`}>
        <nav className="nav">
          <a href="#top" className="brand" aria-label="Blue Monday Studios home" onClick={closeMenu}>
            <span className="brand-mark">BM</span>
            <span>
              <strong>BLUE MONDAY</strong>
              <small>STUDIOS</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#about">About</a>
          </div>

          <a className="nav-cta" href="#contact">
            Start a project <ArrowUpRight size={17} />
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              <a href="#services" onClick={(e) => navigateTo(e, "services")}>Services</a>
              <a href="#packages" onClick={(e) => navigateTo(e, "packages")}>Packages</a>
              <a href="#about" onClick={(e) => navigateTo(e, "about")}>About</a>
              <a href="#contact" className="mobile-menu-cta" onClick={(e) => navigateTo(e, "contact")}>
                Start a project <ArrowUpRight size={16} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <motion.div
                className="hero-kicker"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="dot" />
                DIGITAL INFRASTRUCTURE FOR SMALL BUSINESSES
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.08 }}
              >
                Your business is real.
                <em> Make it digitally real.</em>
              </motion.h1>

              <motion.p
                className="hero-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.16 }}
              >
                Blue Monday Studios builds the digital infrastructure behind small
                businesses. From Google and WhatsApp to professional email,
                websites and visual identity.
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
              >
                <a className="button button-yellow" href="#contact">
                  Get digitally set up <ArrowUpRight size={18} />
                </a>
                <a className="text-link" href="#services">
                  Explore services <ChevronRight size={17} />
                </a>
              </motion.div>
            </div>

            <motion.div
              className="ecosystem-visual"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="visual-label">YOUR BUSINESS / DIGITAL ECOSYSTEM</div>
              <div className="orbit orbit-a" />
              <div className="orbit orbit-b" />
              <div className="node node-google">
                <Search size={18} />
                <span>Google</span>
              </div>
              <div className="node node-whatsapp">
                <MessageCircle size={18} />
                <span>WhatsApp</span>
              </div>
              <div className="node node-email">
                <Mail size={18} />
                <span>Email</span>
              </div>
              <div className="node node-design">
                <Palette size={18} />
                <span>Brand</span>
              </div>
              <div className="node node-web">
                <Globe2 size={18} />
                <span>Website</span>
              </div>
              <div className="core">
                <span>BM</span>
                <small>BUSINESS<br />INFRASTRUCTURE</small>
              </div>
            </motion.div>
          </div>

          <div className="hero-strip">
            <span>DISCOVER</span>
            <span>CONNECT</span>
            <span>TRUST</span>
            <span>OPERATE</span>
            <span>GROW</span>
          </div>
        </section>

        <section className="statement">
          <div className="statement-inner">
            <div className="statement-copy">
              <span className="eyebrow">THE PROBLEM</span>
              <h2>Your customers are already digital. <span>Is your business?</span></h2>
              <p>
                A business can have a great product and still lose opportunities because
                customers cannot find it, trust it, contact it or understand what it offers.
                We connect those missing pieces.
              </p>
            </div>

            <motion.div
              className="stat-card"
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
            >
              <span className="stat-label">DID YOU KNOW?</span>
              <span className="stat-number">25%</span>
              <p>
                Only about 25% of small businesses in South Africa have a properly
                set-up digital infrastructure.
              </p>
              <span className="stat-source">Source: FNB App Academy</span>
            </motion.div>
          </div>
        </section>

        <section className="services section" id="services">
          <SectionHeading eyebrow="WHAT WE BUILD" title="Your digital business infrastructure.">
            We bring the essential digital layers of modern small businesses together
            so they work as one system.
          </SectionHeading>

          <div className="service-grid">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.article
                  className={`service-card ${index === 0 ? "service-card-primary" : ""}`}
                  key={service.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.04 }}
                >
                  <div className="service-top">
                    <span>{service.number}</span>
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#contact">Build this <ArrowUpRight size={15} /></a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section className="system-section">
          <div className="system-copy">
            <span className="eyebrow yellow">THE BLUE MONDAY APPROACH</span>
            <h2>We don't build isolated digital assets.</h2>
            <p>
              Your Google presence should point people toward your business.
              Your website should make the business credible. Your WhatsApp should
              make communication easy. Your email should make you look established.
              Your visual identity should tie it all together.
            </p>
            <strong>We build the connections between them.</strong>
          </div>

          <div className="system-stack">
            {[
              ["01", "DISCOVER", "Google Business"],
              ["02", "CONNECT", "WhatsApp Business"],
              ["03", "TRUST", "Website + Branding"],
              ["04", "COMMUNICATE", "Business Email"],
              ["05", "OPERATE", "Digital Systems"]
            ].map(([num, title, sub]) => (
              <div className="system-row" key={num}>
                <span>{num}</span>
                <div>
                  <b>{title}</b>
                  <small>{sub}</small>
                </div>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </section>

        <section className="packages section" id="packages">
          <SectionHeading eyebrow="STARTING POINTS" title="Start where your business needs you.">
            Simple entry points for businesses at different stages of digital readiness.
          </SectionHeading>

          <div className="package-grid">
            {packages.map((pkg) => (
              <article className={`package ${pkg.featured ? "featured" : ""}`} key={pkg.label}>
                {pkg.featured && <div className="featured-tag">MOST COMPLETE</div>}
                <span className="package-label">{pkg.label}</span>
                <div className="price">{pkg.price}<small> once-off</small></div>
                <p>{pkg.description}</p>
                <div className="package-items">
                  {pkg.items.map((item) => (
                    <div key={item}><Check size={16} /> {item}</div>
                  ))}
                </div>
                <a href="#contact" className={pkg.featured ? "button button-yellow" : "button button-outline"}>
                  Let's build it <ArrowUpRight size={17} />
                </a>
              </article>
            ))}
          </div>
          <p className="package-note">Need something different? <a href="#contact">Tell us what your business needs.</a></p>
        </section>

        <section className="future">
          <div className="future-inner">
            <span className="eyebrow">WHY THIS MATTERS</span>
            <h2>Digital transformation should not be a privilege of big business.</h2>
            <div className="future-bottom">
              <p>
                As South Africa moves deeper into the Fourth Industrial Revolution,
                small businesses need practical ways to participate in the digital economy.
              </p>
              <div className="future-mark">
                <Sparkles size={22} />
                <span>BUILT FOR<br />SMALL BUSINESSES</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="about-grid">
            <div>
              <SectionHeading eyebrow="ABOUT BLUE MONDAY" title="We're building the infrastructure small businesses need to compete.">
                We combine technology, design and digital communication to turn real-world
                businesses into businesses customers can find, trust and reach.
              </SectionHeading>
            </div>
            <div className="about-card">
              <div className="about-card-number">BM<span>®</span></div>
              <p>
                Built for small businesses.<br />
                Designed for the real world.
              </p>
              <div className="about-line" />
              <span>BLUE MONDAY STUDIOS / SOUTH AFRICA</span>
            </div>
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-inner">
            <div>
              <span className="eyebrow yellow">READY WHEN YOU ARE</span>
              <h2>Is your business<br /><span>digitally ready?</span></h2>
            </div>
            <div className="contact-side">
              <p>Tell us where your business is today. We'll help you figure out what needs to come next.</p>
              <a className="button button-yellow" href="mailto:info@bluemondaystudios.co.za">
                Start a conversation <ArrowUpRight size={18} />
              </a>
              <div className="contact-meta">
                <span><Mail size={15} /> info@bluemondaystudios.co.za</span>
                <span><MapPin size={15} /> Polokwane, Limpopo, South Africa</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-brand">
          <span className="brand-mark">BM</span>
          <div><strong>BLUE MONDAY STUDIOS</strong><small>Digital infrastructure for small businesses.</small></div>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#packages">Packages</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} Blue Monday Studios</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
