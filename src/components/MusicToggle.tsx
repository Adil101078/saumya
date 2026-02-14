import { useEffect, useRef, useState } from "react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const audio = new Audio();
    audio.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3";
    audio.loop = true;
    audio.volume = 0.12;
    audio.preload = "auto";
    audio.crossOrigin = "anonymous";
    audioRef.current = audio;

    const onCanPlay = () => setLoaded(true);
    audio.addEventListener("canplaythrough", onCanPlay);

    return () => {
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }
    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full glass-card flex items-center justify-center text-2xl hover:scale-110 transition-transform animate-pulse-glow"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🎵"}
      {!loaded && (
        <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary animate-pulse" />
      )}
    </button>
  );
};

export default MusicToggle;
