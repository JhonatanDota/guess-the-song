import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import VolumeControl from "./VolumeControl";
import MusicProgressBar from "./MusicProgressBar";
import { getCurrentVolume } from "../commom/functions";

type MusicPlayerProps = {
  music: MusicModel;
  maxPlayTime: number;
  endRound: () => void;
};

export default function MusicPlayer(props: MusicPlayerProps) {
  const { music, maxPlayTime, endRound } = props;

  const [song] = useState(new Audio(music.previewUrl));
  const [currentTime, setCurrentTime] = useState<number>(0);

  function start() {
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
      song.pause();
    };
  }, []);

  const progress: number = (currentTime / maxPlayTime) * 100;
  const volume: number = getCurrentVolume();

  song.volume = volume;

  return (
    <div className="flex flex-col">
      <MusicProgressBar progress={progress} />;
      <VolumeControl />
    </div>
  );
}
