import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import MusicPlayer from "./MusicPlayer";
import {
  MAX_PLAY_MUSIC_SECONDS,
  MAX_RANDOM_MUSICS_LENGTH,
  POSSIBLE_POINTS_BY_ROUND,
} from "../commom/constants";

import { randomIndex, randomizeMusic } from "../commom/functions";

type GuessMusicProps = {
  musics: MusicModel[];
  addPoints: (newPoints: number) => void;
  onRoundEnd: () => void;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, addPoints, onRoundEnd } = props;

  const [endRound, setEndRound] = useState<boolean>(false);

  const [randomMusics, setRandomMusics] = useState<MusicModel[]>([]);
  const [correctMusic, setCorrectMusic] = useState<MusicModel>();
  const [choicedMusic, setChoicedMusic] = useState<MusicModel | null>(null);

  useEffect(() => {
    const newRandomMusics: MusicModel[] = [];

    for (let i: number = 0; i < MAX_RANDOM_MUSICS_LENGTH; i++)
      newRandomMusics.push(randomizeMusic(musics));

    setCorrectMusic(newRandomMusics[randomIndex(newRandomMusics.length)]);
    setRandomMusics(newRandomMusics);
  }, [musics]);

  return (
    <div className="flex flex-col gap-3">
      {correctMusic && (
        <MusicPlayer
          music={correctMusic}
          maxPlayTime={MAX_PLAY_MUSIC_SECONDS}
          endRound={() => setEndRound(true)}
        />
      )}
      {randomMusics.map((music: MusicModel) => (
        <button
          disabled={endRound}
          className={`border-2 p-4 text-white ${
            endRound && correctMusic?.trackId === music.trackId
              ? "bg-green-600"
              : "disabled:bg-gray-400"
          }`}
          onClick={() => setChoicedMusic(music)}
        >
          {music.trackName} - {music.trackId}{" "}
        </button>
      ))}
    </div>
  );
}
