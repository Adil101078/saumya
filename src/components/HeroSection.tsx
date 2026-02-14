const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1
          className="text-script text-5xl sm:text-7xl md:text-8xl font-bold text-primary mb-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          To My Love, Saumya 💖
        </h1>
        <p
          className="text-body text-lg sm:text-xl md:text-2xl text-muted-foreground mb-10 opacity-0 animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          You are my today, my tomorrow, and my forever.
        </p>
        <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: "1s" }}>
          <a href="#love-letter" className="glow-button inline-block animate-pulse-glow">
            Our Love Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
