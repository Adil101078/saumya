import { useEffect, useRef, useState } from "react";

const reasons = [
  { emoji: "😊", text: "Your smile that makes my whole world brighter" },
  { emoji: "💪", text: "The way you make me want to be a better person" },
  { emoji: "🤗", text: "Your warm hugs that feel like coming home" },
  { emoji: "😂", text: "How you laugh at my terrible jokes" },
  { emoji: "🌟", text: "Your strength and grace through everything" },
  { emoji: "💖", text: "The kindness you show to everyone around you" },
  { emoji: "🦋", text: "The butterflies I still get every time I see you" },
  { emoji: "🌙", text: "How you're the last thought on my mind every night" },
];

const ReasonsSection = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-4" ref={ref}>
      <h2 className="section-heading text-center mb-14">Reasons I Love You 💗</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <div
            key={i}
            className={`glass-card p-6 text-center cursor-default transition-all duration-500 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <span className="text-4xl block mb-4">{r.emoji}</span>
            <p className="text-body text-foreground/80 text-sm leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReasonsSection;
