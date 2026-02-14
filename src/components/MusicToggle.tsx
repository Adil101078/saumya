import { useEffect, useRef, useState } from "react";

const MusicToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const hasAttemptedAutoplay = useRef(false);

  useEffect(() => {
    const audio = new Audio();

    // Using local music file from public folder
    audio.src = "/background-music.mp3";
    audio.loop = true;
    audio.volume = 0.5; // 50% volume
    audio.preload = "auto";

    // Safari optimization - don't set crossOrigin if using same-origin files
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');

    audioRef.current = audio;

    const attemptPlay = () => {
      if (audioRef.current && !hasAttemptedAutoplay.current) {
        hasAttemptedAutoplay.current = true;
        audioRef.current.play()
          .then(() => {
            setPlaying(true);
            console.log("Autoplay successful");
          })
          .catch((error) => {
            console.log("Autoplay prevented, will try on interaction:", error);
            setPlaying(false);
          });
      }
    };

    const onCanPlay = () => {
      setLoaded(true);
      // Try to play immediately when ready
      attemptPlay();
    };

    const onLoadedData = () => {
      // Try again when data is loaded
      if (!playing) attemptPlay();
    };

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onError = (e: Event) => {
      console.error("Audio error:", e);
      setLoaded(false);
    };

    audio.addEventListener("canplaythrough", onCanPlay);
    audio.addEventListener("loadeddata", onLoadedData);
    audio.addEventListener("play", onPlay);
    audio.addEventListener("pause", onPause);
    audio.addEventListener("error", onError);

    // Try to play on ANY user interaction (even minimal ones)
    const tryPlayOnInteraction = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current.play()
          .then(() => {
            console.log("Started playing after user interaction");
          })
          .catch((error) => {
            console.log("Failed to play:", error);
          });
      }
    };

    // Listen to multiple events to catch any user interaction
    const events = ['click', 'touchstart', 'touchmove', 'scroll', 'keydown', 'mousemove'];
    const handleFirstInteraction = () => {
      tryPlayOnInteraction();
      // Remove all listeners after first successful attempt
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
    };

    // Add listeners for all interaction types
    events.forEach(event => {
      document.addEventListener(event, handleFirstInteraction, { once: true, passive: true });
    });

    return () => {
      audio.removeEventListener("canplaythrough", onCanPlay);
      audio.removeEventListener("loadeddata", onLoadedData);
      audio.removeEventListener("play", onPlay);
      audio.removeEventListener("pause", onPause);
      audio.removeEventListener("error", onError);
      const events = ['click', 'touchstart', 'touchmove', 'scroll', 'keydown', 'mousemove'];
      events.forEach(event => {
        document.removeEventListener(event, handleFirstInteraction);
      });
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggle = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play()
        .then(() => {
          console.log("Playing audio");
        })
        .catch((error) => {
          console.error("Failed to play audio:", error);
        });
    }
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
