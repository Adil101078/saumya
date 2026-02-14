import { useEffect, useRef, useState } from "react";

const milestones = [
  { title: "The Day We Met", emoji: "✨", description: "A moment that changed everything. Fate brought us together." },
  { title: "Our First Conversation", emoji: "💬", description: "Words turned into hours. We couldn't stop talking." },
  { title: "Our First Date", emoji: "🌼", description: "Butterflies, nervous smiles, and a perfect evening." },
  { title: "Our Favorite Memory", emoji: "💫", description: "That one moment we'll never forget — pure magic." },
  { title: "Forever Begins", emoji: "💍", description: "Every day with you is a new beautiful beginning. 🌼" },
];

const TimelineSection = () => {
  const [visible, setVisible] = useState<boolean[]>(new Array(milestones.length).fill(false));
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = milestones.map((_, i) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => {
              const next = [...prev];
              next[i] = true;
              return next;
            });
          }
        },
        { threshold: 0.3 }
      );
      if (refs.current[i]) observer.observe(refs.current[i]!);
      return observer;
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section className="py-20 px-4">
      <h2 className="section-heading text-center mb-16">Our Journey Together 💕🌼</h2>
      <div className="max-w-4xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2 hidden md:block" />

        <div className="space-y-12">
          {milestones.map((m, i) => (
            <div
              key={i}
              ref={(el) => { refs.current[i] = el; }}
              className={`flex flex-col md:flex-row items-center gap-6 transition-all duration-700 ${
                visible[i] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              } ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex-1 text-center md:text-right">
                {(i % 2 === 0) && (
                  <div className="glass-card p-6 inline-block">
                    <h3 className="text-script text-2xl text-primary mb-2">{m.title}</h3>
                    <p className="text-body text-muted-foreground text-sm">{m.description}</p>
                  </div>
                )}
              </div>

              <div className="relative z-10 w-14 h-14 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-2xl shrink-0">
                {m.emoji}
              </div>

              <div className="flex-1 text-center md:text-left">
                {(i % 2 !== 0) && (
                  <div className="glass-card p-6 inline-block">
                    <h3 className="text-script text-2xl text-primary mb-2">{m.title}</h3>
                    <p className="text-body text-muted-foreground text-sm">{m.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
