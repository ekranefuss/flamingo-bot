import { useState } from 'react'
import './App.css'

const FLAMINGO_FACTS = [
  { emoji: '🍤', fact: "Flamingos are born grey. They turn pink from eating shrimp and algae packed with carotenoid pigments — basically, they are what they eat." },
  { emoji: '🙃', fact: "Flamingos can only eat with their heads upside down. Their beaks are specially designed to filter food while inverted." },
  { emoji: '✈️', fact: "They can fly up to 375 miles in a single night, cruising at 35–40 mph. Surprise — flamingos are actually great fliers." },
  { emoji: '🦵', fact: "That bendy 'knee' is actually their ankle. Their real knee is hidden up inside their body, close to their torso." },
  { emoji: '😴', fact: "Flamingos sleep standing on one leg. Scientists think it helps conserve body heat, but honestly it still looks like showing off." },
  { emoji: '👨‍👩‍👧', fact: "Both flamingo parents produce 'crop milk' to feed their chicks — a bright red liquid secreted from their digestive tract. It's as metal as it sounds." },
  { emoji: '🌊', fact: "They can thrive in extremely caustic soda lakes with pH levels that would burn human skin. Flamingos are tougher than they look." },
  { emoji: '🗣️', fact: "A group of flamingos is called a flamboyance. This is correct and perfect and should not be changed." },
  { emoji: '🎨', fact: "A flamingo in a zoo will lose its pink color without a special diet supplement. Zookeepers literally feed them extra carotenoids to keep them pink." },
  { emoji: '💪', fact: "Flamingos have been around for 30–35 million years. They outlived most of their prehistoric neighbors by being extremely weird and extremely good at it." },
  { emoji: '🧂', fact: "They drink almost-boiling water near volcanic geysers. Their specialized scales protect their legs from the heat and caustic chemicals." },
  { emoji: '🫂', fact: "Flamingos form lifelong pair bonds and perform elaborate synchronized courtship dances — head-flagging, wing salutes, marching in unison." },
]

const PINK_FACTS = [
  { emoji: '🌸', fact: "Pink doesn't exist as a single wavelength of light. Your brain creates it by blending red and violet — it's a color your mind invents." },
  { emoji: '🏴‍☠️', fact: "Pink used to be a boy's color. In the early 1900s, pink was considered strong and bold (red-adjacent), while blue was delicate. The swap happened around the 1940s." },
  { emoji: '🔬', fact: "The oldest known color in the world is pink. Scientists found 1.1 billion year old pink pigment in ancient rock in the Sahara." },
  { emoji: '🎸', fact: "Pink Floyd got their name from two blues musicians: Pink Anderson and Floyd Council. The color had nothing to do with it." },
  { emoji: '⚽', fact: "Baker-Miller Pink (a specific shade) was used in jail cells in the 1970s to calm inmates. The effect wore off after 30 minutes. Prisons went back to beige." },
  { emoji: '🌌', fact: "The universe's average color is a beige-pink called 'Cosmic Latte.' Astronomers surveyed 200,000 galaxies and averaged the result." },
  { emoji: '💎', fact: "Pink diamonds are among the rarest gemstones on Earth. Their color comes from extreme pressure distorting the crystal structure — not from trace minerals." },
  { emoji: '🦈', fact: "Sharks are calmed by the color pink. Some shark researchers wear pink wetsuits, though this remains a contested and terrifying experiment." },
]

export default function App() {
  const [tab, setTab] = useState('flamingos')
  const [flipped, setFlipped] = useState({})

  const facts = tab === 'flamingos' ? FLAMINGO_FACTS : PINK_FACTS

  const flip = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="site">
      {/* Header */}
      <header className="hero">
        <div className="hero-inner">
          <div className="flamingo-emoji">🦩</div>
          <h1>Extremely Important Facts</h1>
          <p className="hero-sub">about flamingos &amp; the color pink</p>
          <div className="tab-switcher">
            <button className={tab === 'flamingos' ? 'active' : ''} onClick={() => { setTab('flamingos'); setFlipped({}); }}>
              🦩 Flamingos
            </button>
            <button className={tab === 'pink' ? 'active' : ''} onClick={() => { setTab('pink'); setFlipped({}); }}>
              🌸 Pink
            </button>
          </div>
        </div>
      </header>

      {/* Facts grid */}
      <main className="facts-section">
        <div className="container">
          <div className="facts-grid">
            {facts.map((f, i) => (
              <div key={i} className={`fact-card ${flipped[i] ? 'flipped' : ''}`} onClick={() => flip(i)}>
                <div className="card-front">
                  <div className="fact-number">#{String(i + 1).padStart(2, '0')}</div>
                  <div className="fact-emoji">{f.emoji}</div>
                  <div className="tap-hint">tap to reveal</div>
                </div>
                <div className="card-back">
                  <div className="fact-number">#{String(i + 1).padStart(2, '0')}</div>
                  <p>{f.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="flamingo-row">
          {['🦩','🦩','🦩','🦩','🦩'].map((f, i) => <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>{f}</span>)}
        </div>
        <p>a flamboyance of facts</p>
      </footer>
    </div>
  )
}
