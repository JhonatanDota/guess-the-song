import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import MusicProgressBar from "./MusicProgressBar";

type MusicPlayerProps = {
  music: MusicModel;
  maxPlayTime: number;
  endRound: () => void;
};

export default function MusicPlayer(props: MusicPlayerProps) {
  const { music, maxPlayTime, endRound } = props;

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [song] = useState(new Audio(music.previewUrl));

  function start() {
    song.volume = 0.02;
    song.play();
  }

  useEffect(() => {
    start();

    function updateProgress(): void {
      const newTime: number = song.currentTime;
      setCurrentTime(newTime);

      if (newTime >= maxPlayTime) {
        song.pause();
        endRound();
      }
    }

    song.addEventListener("timeupdate", updateProgress);

    const progressUpdateInterval = setInterval(updateProgress, 50);

    return () => {
      song.removeEventListener("timeupdate", updateProgress);
      clearInterval(progressUpdateInterval);
    };
  }, []);

  const progress = (currentTime / maxPlayTime) * 100;

  return <MusicProgressBar progress={progress} />;
}
