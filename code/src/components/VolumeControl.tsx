import { useState } from "react";
import { BsVolumeUpFill, BsVolumeMuteFill } from "react-icons/bs";
import { getCurrentVolume, setCurrentVolume } from "../commom/functions";

export default function VolumeControl() {
  const [volume, setVolume] = useState<number>(getCurrentVolume());

  function handleVolumeChange(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    const value: string = event.target.value;
    const newVolume = Number(value);

    setCurrentVolume(newVolume);
    setVolume(newVolume);
  }

  return (
    <div className="m-auto flex gap-1">
      {volume > 0 ? (
        <BsVolumeUpFill fill="white" className="text-xl md:text-2xl" />
      ) : (
        <BsVolumeMuteFill fill="white" className="text-xl md:text-2xl" />
      )}
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
    </div>
  );
}
