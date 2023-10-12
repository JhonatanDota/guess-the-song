import { useState, useEffect } from "react";
import Music from "../models/Music";
import MusicProgressBar from "./MusicProgressBar";

type MusicPlayerProps = {
  music: Music;
  maxPlayTime: number;
  currentTime: number;
  setCurrentTime: (newTime: number) => void;
};

export default function MusicPlayer(props: MusicPlayerProps) {
  const { music, maxPlayTime, currentTime, setCurrentTime } = props;
  const [song] = useState(new Audio(music.previewUrl));

  function start() {
    song.volume = 0.02;
    song.play();
  }

  useEffect(() => {
    start();

    song.addEventListener("timeupdate", () => {
      const newTime: number = song.currentTime;
      setCurrentTime(newTime);

      if (newTime >= maxPlayTime) {
        song.pause();
      }
    });

    return () => {
      song.removeEventListener("timeupdate", () => {});
    };
  }, []);

  const progress = (currentTime / maxPlayTime) * 100;

  return (
    <div>
      <h1 className="text-white">{currentTime}</h1>
      <MusicProgressBar progress={progress} />
      <button className="text-white">PLAYYYYYYYYYY</button>
    </div>
  );
}
