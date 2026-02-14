import { useEffect, useRef, useState } from "react";

const LETTER = `My Darlinnnnnn,

From the very first moment you walked into my life, everything changed — the world became brighter, warmer, and infinitely more beautiful.

Your smile — oh, your smile — it blooms like a daisy at sunrise 🌼, filling my heart with a warmth that no words could ever capture. You are my sun, my moon, and every star in between.

Your kindness is a gift that the world doesn't deserve but so desperately needs. The way you care, the way you love, the way you find beauty in the smallest things — you inspire me to be better every single day.

I am the luckiest soul alive to call you mine. You are my peace in the chaos, my laughter in the silence, my home in this vast and wandering world.

Every moment with you is a memory I hold close to my heart. Every glance, every touch, every whispered "I love you" — they are the chapters of the most beautiful love story ever written.

I love you more than the ocean has waves, more than the sky has stars, more than words could ever begin to say.

You are my forever daisy 🌼, always turning toward the light and bringing it wherever you go.

Forever and always yours,
Adil 💕🌼`;

const LoveLetterSection = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= LETTER.length) {
          clearInterval(interval);
          return prev;
        }
        return prev + 2;
      });
    }, 16);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="love-letter" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-heading text-center mb-12">
          A Letter For You 💌🌼
        </h2>
        <div className="glass-card p-8 sm:p-12 relative overflow-hidden">
          {/* Corner daisies */}
          <span className="absolute top-3 right-4 text-2xl opacity-40">🌼</span>
          <span className="absolute bottom-3 left-4 text-2xl opacity-40">
            🌼
          </span>
          <p className="text-body text-foreground/80 text-base sm:text-lg leading-relaxed whitespace-pre-line">
            {LETTER.slice(0, visibleChars)}
            {visibleChars < LETTER.length && (
              <span className="inline-block w-0.5 h-5 bg-primary ml-0.5 animate-pulse" />
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoveLetterSection;
