const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      {/* Decorative daisies */}
      <div className="absolute top-10 left-8 text-4xl sm:text-5xl opacity-60 animate-pulse" style={{ animationDuration: "3s" }}>🌼</div>
      <div className="absolute top-20 right-12 text-3xl sm:text-4xl opacity-50 animate-pulse" style={{ animationDuration: "4s" }}>🌼</div>
      <div className="absolute bottom-32 left-16 text-2xl opacity-40 animate-pulse" style={{ animationDuration: "5s" }}>🌼</div>
      <div className="absolute bottom-20 right-20 text-3xl opacity-50 animate-pulse" style={{ animationDuration: "3.5s" }}>🌼</div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-5xl sm:text-6xl mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0s" }}>
          🌼💖🌼
        </div>
        <h1
          className="text-script text-5xl sm:text-7xl md:text-8xl font-bold text-primary mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          To My Love, Saumya 💖
        </h1>
        <p
          className="text-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          You are my today, my tomorrow, and my forever.
        </p>
        <p
          className="text-body text-base sm:text-lg text-primary/70 italic mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.8s" }}
        >
          🌼 Like a daisy in the morning sun, you brighten my every day 🌼
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a href="#love-letter" className="glow-button inline-block animate-pulse-glow">
            Our Love Story 🌼
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
