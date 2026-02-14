import { useState } from "react";

const SurpriseSection = () => {
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="py-20 px-4 text-center">
      <h2 className="section-heading mb-10">A Little Surprise… 🎁</h2>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="glow-button text-lg animate-pulse-glow"
        >
          Click for a Surprise 💌
        </button>
      ) : (
        <div className="max-w-lg mx-auto animate-fade-in-up">
          <div className="glass-card p-10">
            <p className="text-script text-3xl sm:text-5xl text-primary leading-snug">
              Will you be my forever Valentine, Saumya? ❤️
            </p>
            <div className="mt-6 text-4xl">💖✨🥰✨💖</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SurpriseSection;
