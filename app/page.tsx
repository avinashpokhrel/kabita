"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight, Heart, Leaf, Sparkles } from "lucide-react";
import { getAge } from "@/lib/utils";

const her = {
  name: "Kabita",
  dateOfBirth: "2006-01-12",
  intro:
    "A soft heart, a curious mind, and a little world filled with the things I love.",
};

const littleThings = [
  {
    icon: "🌷",
    title: "Pink moods",
    text: "A little pink makes ordinary days feel sweeter.",
  },
  {
    icon: "🌿",
    title: "Green escapes",
    text: "Fresh air, quiet paths, and little things growing.",
  },
  {
    icon: "⛏️",
    title: "Minecraft worlds",
    text: "One more block, one more adventure, one more laugh.",
  },
];

export default function Page() {
  const [messageOpen, setMessageOpen] = useState(false);
  const age = getAge(her.dateOfBirth);

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Back to top">
          <Image
            src="/alex.png"
            alt=""
            width={28}
            height={28}
            className="brand-avatar"
          />
          <span>Kabita&apos;s corner</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#little-things">little joys</a>
          <a href="#love-note">a kind reminder</a>
        </nav>
        <a className="top-link" href="#love-note">
          a little love, always <Heart size={13} fill="currentColor" />
        </a>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-image" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="eyebrow">
            <Sparkles size={14} /> a little corner of my world
          </div>
          <h1 id="hero-title">
            Hi, I&apos;m <span>{her.name}.</span>
            <br />
            This is my <em>world.</em>
          </h1>
          <p className="hero-copy">
            Pink days, green places, cozy Minecraft nights, and all the little
            things that feel like me.
          </p>
          <a className="hero-button" href="#little-things">
            Take a look around <ArrowDown size={16} />
          </a>
        </div>
        <div className="hero-caption">
          <span className="caption-dot" /> little things, soft days
        </div>
        <div className="hero-stamp" aria-hidden="true">
          <Heart size={19} fill="currentColor" />
          <span>
            you + me
            <br />
            always
          </span>
        </div>
      </section>

      <section className="intro section-wrap" aria-label="About her">
        <div className="intro-kicker">
          <span className="tiny-line" /> A LITTLE ABOUT ME
        </div>
        <div className="intro-grid">
          <h2>
            Little things
            <br />
            that make my
            <br />
            <span>world, mine.</span>
          </h2>
          <div className="intro-side">
            <p>{her.intro}</p>
            <div className="profile-facts">
              <span>
                <Leaf size={15} /> {age} years old
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="favorites section-wrap" id="little-things">
        <div className="section-heading">
          <div>
            <div className="intro-kicker">
              <span className="tiny-line" /> THINGS I LOVE
            </div>
            <h2>
              A few of my
              <br />
              favorite <em>things.</em>
            </h2>
          </div>
          <p>
            Little joys, lovely places,
            <br />
            and a world of my own.
          </p>
        </div>
        <div className="favorite-grid">
          {littleThings.map((thing, index) => (
            <article
              className={`favorite-card card-${index + 1}`}
              key={thing.title}
            >
              <span className="card-number">0{index + 1}</span>
              <span className="card-icon" aria-hidden="true">
                {thing.icon}
              </span>
              <h3>{thing.title}</h3>
              <p>{thing.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="love-note" id="love-note">
        <div className="note-inner">
          <span className="note-heart">
            <Heart size={18} fill="currentColor" />
          </span>
          <div className="intro-kicker">A LITTLE REMINDER</div>
          <h2>
            You make this
            <br />
            world a little <em>brighter.</em>
          </h2>
          <p>
            A reminder from someone who loves you: you&apos;re a favorite
            teammate, a favorite adventure, and someone worth celebrating every
            day.
          </p>
          <button
            className="note-button"
            onClick={() => setMessageOpen((open) => !open)}
            aria-expanded={messageOpen}
          >
            {messageOpen ? "Close your note" : "A secret note"}{" "}
            <ArrowUpRight size={15} />
          </button>
          {messageOpen && (
            <div className="secret-note" role="status">
              Somewhere out there, someone is very glad to share a world with
              you. ♡
            </div>
          )}
        </div>
        <span className="note-decoration decor-right" aria-hidden="true">
          ♡
        </span>
      </section>

      <footer className="footer">
        <a href="#home" className="wordmark">
          <Image
            src="/alex.png"
            alt=""
            width={28}
            height={28}
            className="brand-avatar"
          />
          <span>Kabita&apos;s corner</span>
        </a>
        <span>a little love, always</span>
        <a href="#home" className="back-top">
          back to the top ↑
        </a>
      </footer>
    </main>
  );
}
