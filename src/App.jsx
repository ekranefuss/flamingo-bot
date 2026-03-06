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

const PENGUIN_FACTS = [
  { emoji: '🧥', fact: "Penguins wear tuxedos for a reason. The black-and-white coloring is called countershading — dark on top to blend with the deep ocean from above, white below to blend with the bright surface from below. Evolution invented formalwear." },
  { emoji: '🎵', fact: "Penguins can recognize their mate and chick out of thousands of others by voice alone. Every penguin has a unique call — like a biological phone number." },
  { emoji: '💨', fact: "Emperor penguins huddle in groups of thousands to survive Antarctic winters, rotating from the freezing outside to the warm center. They are remarkably fair about it." },
  { emoji: '🏊', fact: "Penguins are faster in the water than most fish. Gentoo penguins can swim up to 22 mph — faster than an Olympic swimmer by a factor of three." },
  { emoji: '🪨', fact: "Male Adélie penguins gift pebbles to females as a proposal. The quality of the rock matters. Theft of premium pebbles is rampant and widely documented." },
  { emoji: '🌡️', fact: "Emperor penguin chicks are born in -40°F Antarctic winters. The father incubates the egg on his feet for 65 days without eating, losing nearly half his body weight." },
  { emoji: '🧭', fact: "Penguins can navigate across hundreds of miles of open ocean and return to the exact spot they were born. Scientists still aren't entirely sure how." },
  { emoji: '🩸', fact: "Penguins have a heat exchange system in their flippers — warm blood going out heats the cold blood coming back in. Nature invented the radiator." },
  { emoji: '🦅', fact: "Penguins evolved from flying birds. They traded flight for hydrodynamics about 60 million years ago and have been absolutely winning at swimming ever since." },
  { emoji: '🌊', fact: "Penguins can drink seawater. They have a supraorbital gland above their eye that filters salt out of their bloodstream and excretes it through their bill." },
  { emoji: '💤', fact: "Penguins sleep standing up, often facing into the wind. Emperor penguins can also sleep while floating at sea, which is deeply unsettling if you think about it." },
  { emoji: '🌍', fact: "Not all penguins live in cold climates. The Galápagos penguin lives on the equator, just 1° south of the equator. Penguins contain multitudes." },
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

  const facts = tab === 'flamingos' ? FLAMINGO_FACTS : tab === 'penguins' ? PENGUIN_FACTS : PINK_FACTS

  const flip = (i) => setFlipped(prev => ({ ...prev, [i]: !prev[i] }))

  return (
    <div className="site" data-tab={tab}>
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
            <button className={tab === 'penguins' ? 'active' : ''} onClick={() => { setTab('penguins'); setFlipped({}); }}>
              🐧 Penguins
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
          {(tab === 'penguins' ? ['🐧','🐧','🐧','🐧','🐧'] : ['🦩','🦩','🦩','🦩','🦩']).map((f, i) => <span key={i} style={{ animationDelay: `${i * 0.15}s` }}>{f}</span>)}
        </div>
        <p>{tab === 'penguins' ? 'a waddle of facts' : 'a flamboyance of facts'}</p>
      </footer>
    </div>
  )
}
