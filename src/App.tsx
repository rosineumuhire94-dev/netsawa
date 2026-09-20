import { useState } from "react";
import "./App.css";

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is NetSawa?",
      answer:
        "NetSawa is a digital safety and parental-control platform designed to help parents and guardians guide children's digital experiences.",
    },
    {
      question: "Is NetSawa difficult to set up?",
      answer:
        "NetSawa is designed with a simple, parent-friendly setup experience. Create your family, connect devices, and set safety rules step by step.",
    },
    {
      question: "Can I change the rules later?",
      answer:
        "Yes. Parents can manage and adjust settings such as screen time, apps, websites, and other safety controls.",
    },
    {
      question: "What can parents manage?",
      answer:
        "NetSawa provides tools for screen-time management, app and website controls, content filtering, alerts, reports, and other safety features.",
    },
    {
      question: "What happens to our family data?",
      answer:
        "NetSawa's privacy experience explains how family information is handled and protected. Detailed practices should be reviewed in the official Privacy Policy.",
    },
  ];

  return (
    <div className="site">

      {/* HEADER */}
      <header className="navbar">
        <div className="nav-container">

          <a href="#home" className="logo">
            <img src="/netsawa-logo.png" alt="NetSawa" />
          </a>

          <nav>
            <a href="#why">Why NetSawa</a>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#privacy">Safety & Privacy</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a href="#download" className="nav-download">
            Download App
          </a>

        </div>
      </header>

      {/* HERO */}
      <main>

        <section className="hero" id="home">
          <div className="hero-content">

            <div className="hero-copy">

              <span className="eyebrow">
                SAFER TOGETHER ONLINE
              </span>

              <h1>
                Help Your Child Explore the
                <span> Digital World Safely</span>
              </h1>

              <p>
                NetSawa gives parents simple tools to guide screen time,
                manage apps and websites, filter harmful content, receive
                safety alerts and understand digital-use patterns.
              </p>

              <div className="hero-buttons">

                <a href="#how-it-works" className="btn btn-primary">
                  See How It Works
                </a>

                <a href="#download" className="btn btn-secondary">
                  Download App
                </a>

              </div>

              <div className="trust-note">
                <span>✓</span>
                Parent-friendly digital safety
              </div>

            </div>

            {/* HERO PHONE */}
            <div className="hero-visual">

              <div className="family-card">

                <div className="family-circle">
                  <div className="parent-shape">P</div>
                  <div className="child-shape">C</div>
                </div>

                <div className="phone">

                  <div className="phone-top">
                    <span>NetSawa</span>
                    <span>●</span>
                  </div>

                  <div className="dashboard-greeting">
                    <small>Good evening</small>
                    <strong>Your Family</strong>
                  </div>

                  <div className="usage-card">

                    <div>
                      <small>Today's screen time</small>
                      <strong>2h 14m</strong>
                    </div>

                    <div className="progress">
                      <span></span>
                    </div>

                  </div>

                  <div className="mini-cards">

                    <div>
                      <b>3</b>
                      <small>Devices</small>
                    </div>

                    <div>
                      <b>2</b>
                      <small>Alerts</small>
                    </div>

                  </div>

                  <div className="activity">

                    <small>Family activity</small>

                    <div className="activity-row">
                      <span className="activity-dot"></span>
                      <span>Screen time within limit</span>
                    </div>

                    <div className="activity-row">
                      <span className="activity-dot"></span>
                      <span>Safety settings active</span>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* WHY NETSAWA */}
        <section className="reality section" id="why">

          <div className="section-heading">

            <span className="eyebrow">
              WHY NETSAWA?
            </span>

            <h2>
              Because their digital safety matters.
            </h2>

            <p>
              The internet creates opportunities for children to learn,
              explore and connect. NetSawa helps families create a safer
              environment for children to grow online.
            </p>

          </div>

          <div className="reality-grid">

            <div className="reality-card">
              <span>01</span>
              <h3>Screen Time</h3>
              <p>
                Set healthy limits and schedules for device use.
              </p>
            </div>

            <div className="reality-card">
              <span>02</span>
              <h3>Apps & Games</h3>
              <p>
                Manage which applications can be used and when.
              </p>
            </div>

            <div className="reality-card">
              <span>03</span>
              <h3>Online Content</h3>
              <p>
                Guide access to websites and content categories.
              </p>
            </div>

            <div className="reality-card">
              <span>04</span>
              <h3>Safety Alerts</h3>
              <p>
                Stay informed about important safety events.
              </p>
            </div>

          </div>

        </section>

        {/* MEET NETSAWA */}
        <section className="about section">

          <div className="about-visual">

            <div className="abstract-shape">

              <div className="shield">
                ✓
              </div>

            </div>

          </div>

          <div className="about-copy">

            <span className="eyebrow">
              MEET NETSAWA
            </span>

            <h2>
              A digital-safety companion for families.
            </h2>

            <p>
              NetSawa is designed to help parents and guardians guide
              children's digital experiences without making technology
              complicated.
            </p>

            <p>
              Simple controls, understandable information and practical
              safety tools help families build healthier digital habits.
            </p>

            <a href="#features" className="text-link">
              Explore the features →
            </a>

          </div>

        </section>

        {/* FEATURES */}
        <section className="features section" id="features">

          <div className="section-heading">

            <span className="eyebrow">
              KEY FEATURES
            </span>

            <h2>
              Simple tools for everyday digital safety.
            </h2>

          </div>

          <div className="feature-grid">

            <div className="feature-card">
              <div className="feature-icon">◷</div>
              <h3>Content Filtering</h3>
              <p>
                Help keep children away from harmful and inappropriate
                content.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">◷</div>
              <h3>Screen Time Management</h3>
              <p>
                Set healthy limits and encourage balanced digital habits.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">▣</div>
              <h3>Website & App Control</h3>
              <p>
                Block or allow specific websites and apps and manage access.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⌖</div>
              <h3>Location Safety</h3>
              <p>
                Support location-related safety features where available.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">!</div>
              <h3>Smart Alerts</h3>
              <p>
                Get notified about important safety events and activity.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">↗</div>
              <h3>Activity Reports</h3>
              <p>
                Understand online habits with easy-to-read activity reports.
              </p>
            </div>

          </div>

        </section>

        {/* HOW IT WORKS */}
        <section className="how section" id="how-it-works">

          <div className="section-heading">

            <span className="eyebrow">
              HOW IT WORKS
            </span>

            <h2>
              Simple. Secure. In 3 Steps.
            </h2>

            <p>
              Get started in minutes and take control of your child's
              digital safety.
            </p>

          </div>

          <div className="steps">

            <div className="step">

              <div className="step-number">
                01
              </div>

              <h3>
                Create Your Family
              </h3>

              <p>
                Sign up, add your child's profile and set up your account.
              </p>

            </div>

            <div className="step-line"></div>

            <div className="step">

              <div className="step-number">
                02
              </div>

              <h3>
                Connect Devices
              </h3>

              <p>
                Install the app on your child's device and connect it to
                your account.
              </p>

            </div>

            <div className="step-line"></div>

            <div className="step">

              <div className="step-number">
                03
              </div>

              <h3>
                Set Safety Rules
              </h3>

              <p>
                Choose the right settings for content, screen time, apps,
                websites and more.
              </p>

            </div>

          </div>

        </section>

        {/* PRODUCT EXPERIENCE */}
        <section className="experience section">

          <div className="experience-copy">

            <span className="eyebrow">
              PARENT DASHBOARD
            </span>

            <h2>
              Manage your family's digital safety from one place.
            </h2>

            <p>
              The NetSawa parent experience brings family activity,
              connected devices, screen time, controls and alerts together.
            </p>

            <div className="check-list">

              <div>✓ Family overview</div>
              <div>✓ Child profiles</div>
              <div>✓ Screen-time controls</div>
              <div>✓ App & website controls</div>
              <div>✓ Alerts & reports</div>

            </div>

          </div>

          <div className="dashboard-preview">

            <div className="dashboard-header">

              <div>
                <small>Family Overview</small>
                <h3>Good evening 👋</h3>
              </div>

              <div className="avatar">
                R
              </div>

            </div>

            <div className="dashboard-stats">

              <div>
                <small>Children</small>
                <strong>2</strong>
              </div>

              <div>
                <small>Devices</small>
                <strong>3</strong>
              </div>

              <div>
                <small>Alerts</small>
                <strong>2</strong>
              </div>

            </div>

            <div className="dashboard-line">

              <div>
                <strong>Screen Time</strong>
                <span>Today's usage</span>
              </div>

              <strong>2h 14m</strong>

            </div>

            <div className="chart">

              <div style={{ height: "45%" }}></div>
              <div style={{ height: "65%" }}></div>
              <div style={{ height: "35%" }}></div>
              <div style={{ height: "80%" }}></div>
              <div style={{ height: "55%" }}></div>
              <div style={{ height: "72%" }}></div>
              <div style={{ height: "48%" }}></div>

            </div>

          </div>

        </section>

        {/* PRIVACY */}
        <section className="privacy section" id="privacy">

          <div className="privacy-card">

            <div className="privacy-icon">
              ✓
            </div>

            <div>

              <span className="eyebrow">
                TRUST & PRIVACY
              </span>

              <h2>
                Your family's trust is our priority.
              </h2>

              <p>
                NetSawa is designed with family privacy and security in mind.
                Detailed privacy practices will be provided through the
                official Privacy Policy and Trust Centre.
              </p>

              <a href="#" className="text-link">
                Visit the Trust Centre →
              </a>

            </div>

          </div>

        </section>

        {/* FAQ */}
        <section className="faq section" id="faq">

          <div className="section-heading">

            <span className="eyebrow">
              FAQ
            </span>

            <h2>
              Questions parents may have.
            </h2>

          </div>

          <div className="faq-list">

            {faqs.map((faq, index) => (

              <div className="faq-item" key={faq.question}>

                <button
                  onClick={() =>
                    setOpenFaq(
                      openFaq === index ? null : index
                    )
                  }
                >

                  <span>
                    {faq.question}
                  </span>

                  <span>
                    {openFaq === index ? "−" : "+"}
                  </span>

                </button>

                {openFaq === index && (
                  <p className="faq-answer">
                    {faq.answer}
                  </p>
                )}

              </div>

            ))}

          </div>

        </section>

        {/* DOWNLOAD */}
        <section className="download" id="download">

          <div className="download-content">

            <span className="eyebrow">
              GET STARTED WITH NETSAWA
            </span>

            <h2>
              Ready to make your family safer online?
            </h2>

            <p>
              Download the NetSawa app and take the first step toward a
              safer, healthier digital experience for your child.
            </p>

            <div className="store-buttons">

              <a href="#" className="store-button">
                <small>Download on the</small>
                <strong>App Store</strong>
              </a>

              <a href="#" className="store-button">
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </a>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <div className="footer-container">

          <div className="footer-brand">

            <div className="logo">
              <img
                src="/netsawa-logo.png"
                alt="NetSawa"
              />
            </div>

            <p>
              Safer Together Online.
            </p>

          </div>

          <div className="footer-links">

            <a href="#features">
              Features
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#privacy">
              Safety & Privacy
            </a>

            <a href="#faq">
              FAQ
            </a>

          </div>

          <div className="footer-copy">
            © {new Date().getFullYear()} NetSawa. All rights reserved.
          </div>

        </div>

      </footer>

    </div>
  );
}

export default App;