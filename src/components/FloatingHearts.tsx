import { useEffect, useState } from "react";

interface Particle {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  emoji: string;
}

const EMOJIS = ["💖", "💕", "💗", "💝", "🩷", "♥️", "✨", "🌼", "🤍", "💫"];

const FloatingHearts = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const items: Particle[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 0.6 + Math.random() * 1.4,
      duration: 8 + Math.random() * 14,
      delay: Math.random() * 18,
      emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <span
          key={p.id}
          className="floating-heart"
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.emoji}
        </span>
      ))}
    </div>
  );
};

export default FloatingHearts;
