import { useEffect, useRef, useState } from "react";

const LETTER = `My Dearest Saumya,

From the moment you walked into my life, everything changed. The world became brighter, the days warmer, and my heart fuller than I ever imagined possible.

Your smile — oh, your smile — it's the kind that makes the stars jealous. It lights up every room you enter and fills my soul with a warmth no words can capture.

Your kindness is a gift to everyone you meet. The way you care, the way you love, the way you see beauty in the smallest things — it inspires me every single day.

I am the luckiest person alive to have you by my side. You are my peace in the chaos, my laughter in the silence, and my home in this vast world.

Every moment with you is a memory I treasure. Every glance, every touch, every whispered "I love you" — they are the chapters of the most beautiful story ever written.

I love you more than words could ever say, more than the ocean has waves, more than the sky has stars.

Forever and always yours,
Adil 💕`;

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
      { threshold: 0.3 }
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
    }, 18);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <section id="love-letter" ref={sectionRef} className="py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="section-heading text-center mb-12">A Letter For You 💌</h2>
        <div className="glass-card p-8 sm:p-12">
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
