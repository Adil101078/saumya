import { useEffect, useRef, useState } from "react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(
      "https://cdn.pixabay.com/audio/2024/11/29/audio_d27daa3fa8.mp3"
    );
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
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
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full glass-card flex items-center justify-center text-xl hover:scale-110 transition-transform"
      aria-label={playing ? "Mute music" : "Play music"}
    >
      {playing ? "🔊" : "🔇"}
    </button>
  );
};

export default MusicToggle;
