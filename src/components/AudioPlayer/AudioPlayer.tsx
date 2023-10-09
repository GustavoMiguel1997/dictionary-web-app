import { useEffect, useState, useRef } from 'react';
import './style.css';

interface Props {
  source: string;
}

function AudioPlayer({ source }: Props) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    audioRef.current.addEventListener('ended', handleEndAudio);
  }, [audioRef]);

  useEffect(() => {
    audioRef.current.load();
  }, [source]);

  function handleClick() {
    const audioElement = audioRef.current;

    if (isPlaying) {
      audioElement.pause();
      setIsPlaying(false);
      return;
    }

    audioElement.play();
    setIsPlaying(true);
  }

  function handleEndAudio() {
    setIsPlaying(false);
  }

  const audioPlayerClass = `audioPlayer__button ${
    isPlaying ? 'isPlaying' : ''
  }`;

  return (
    <div className="audioPlayer">
      <button className={audioPlayerClass} onClick={handleClick}></button>
      <audio ref={audioRef}>
        <source src={source} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default AudioPlayer;
