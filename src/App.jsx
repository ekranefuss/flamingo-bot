import './App.css'

export default function App() {
  return (
    <div className="site">
      {/* Hero */}
      <header className="hero">
        <nav className="nav">
          <div className="logo">🦩 FlamingoBot</div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="nav-cta">Get Started</a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-badge">Personal AI Assistant</div>
          <h1 className="hero-title">
            Your AI assistant<br />
            <span className="gradient-text">that actually remembers</span>
          </h1>
          <p className="hero-sub">
            FlamingoBot lives in your messages, knows your life, and gets smarter every day.
            Available on iMessage, Signal, Telegram, and Discord.
          </p>
          <div className="hero-actions">
            <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="btn-primary">Start for free</a>
            <a href="#how" className="btn-ghost">See how it works ↓</a>
          </div>
          <div className="hero-platforms">
            <span>Works with</span>
            <span className="platform-pill">iMessage</span>
            <span className="platform-pill">Signal</span>
            <span className="platform-pill">Telegram</span>
            <span className="platform-pill">Discord</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="phone-screen">
              <div className="chat-msg bot">Hey Matt 👋 You have a site meeting at 2pm today. Also — Celeste's birthday is in 3 days. Want me to help plan something?</div>
              <div className="chat-msg user">Oh good catch. Yes, let's plan something nice.</div>
              <div className="chat-msg bot">On it. Here are a few ideas based on what she likes…</div>
              <div className="typing-indicator"><span /><span /><span /></div>
            </div>
          </div>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="section features-section">
        <div className="container">
          <div className="section-label">Features</div>
          <h2 className="section-title">Built for your actual life</h2>
          <p className="section-sub">Not a generic chatbot. FlamingoBot learns your context, keeps memory across conversations, and proactively helps you stay on top of things.</p>
          <div className="features-grid">
            {[
              { icon: '🧠', title: 'Persistent Memory', desc: 'Remembers your preferences, family, projects, and decisions across every conversation. No re-explaining required.' },
              { icon: '📱', title: 'Lives in Your Messages', desc: 'Text it like a person. Works wherever you already message — iMessage, Signal, Telegram, Discord.' },
              { icon: '🔔', title: 'Proactive Check-ins', desc: 'Reaches out when something needs your attention. Upcoming events, emails, tasks — it notices so you don\'t miss things.' },
              { icon: '📎', title: 'Connected to Your Tools', desc: 'Calendar, email, GitHub, cameras, smart home — FlamingoBot plugs into your existing setup.' },
              { icon: '🏠', title: 'Runs on Your Machine', desc: 'Your data stays yours. FlamingoBot runs locally on a Mac mini or home server, not in a data center.' },
              { icon: '🛠️', title: 'Actually Does Things', desc: 'Sends messages, creates cron jobs, writes code, deploys apps, searches the web. Not just answers.' },
            ].map(f => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="section how-section">
        <div className="container">
          <div className="section-label">How it works</div>
          <h2 className="section-title">Up and running in minutes</h2>
          <div className="steps">
            {[
              { num: '01', title: 'Install OpenClaw', desc: 'One command on a Mac mini or home server. OpenClaw is the open-source engine that powers FlamingoBot.' },
              { num: '02', title: 'Connect your channels', desc: 'Link iMessage, Signal, Telegram, or Discord. FlamingoBot meets you where you already are.' },
              { num: '03', title: 'Start texting', desc: 'That\'s it. The more you use it, the smarter it gets. It builds context about your life over time.' },
            ].map(s => (
              <div className="step" key={s.num}>
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="how-cta">
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer" className="btn-primary">Read the docs</a>
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section quote-section">
        <div className="container">
          <blockquote>
            <p>"It caught that I had a meeting I'd forgotten about, reminded me of my wife's birthday, and deployed an app — all before I finished my coffee."</p>
            <cite>— Matt J., early user</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container cta-inner">
          <h2>Ready to try it?</h2>
          <p>FlamingoBot is built on OpenClaw — free and open source. Join the community to get started.</p>
          <div className="cta-actions">
            <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">Join the Discord</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer" className="btn-ghost">View on GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-logo">🦩 FlamingoBot</div>
          <div className="footer-links">
            <a href="https://docs.openclaw.ai" target="_blank" rel="noopener noreferrer">Docs</a>
            <a href="https://github.com/openclaw/openclaw" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://discord.com/invite/clawd" target="_blank" rel="noopener noreferrer">Discord</a>
            <a href="https://clawhub.com" target="_blank" rel="noopener noreferrer">ClawHub</a>
          </div>
          <div className="footer-copy">Built on OpenClaw · Open source · Your data, your server</div>
        </div>
      </footer>
    </div>
  )
}
