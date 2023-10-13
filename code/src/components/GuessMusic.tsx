import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import MusicPlayer from "./MusicPlayer";
import {
  MAX_PLAY_MUSIC_SECONDS,
  MAX_RANDOM_MUSICS_LENGTH,
  POSSIBLE_POINTS_BY_ROUND,
} from "../commom/constants";

import { randomIndex, randomizeMusic, checkCorrectChoice } from "../commom/functions";

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
  }, []);

  if (endRound) {
    setTimeout(() => {
      onRoundEnd();
      if (checkCorrectChoice(choicedMusic, correctMusic)) addPoints(POSSIBLE_POINTS_BY_ROUND);
    }, 3000);
  }

  return (
    <div className="flex flex-col gap-3">
      {correctMusic && (
        <MusicPlayer
          music={correctMusic}
          maxPlayTime={MAX_PLAY_MUSIC_SECONDS}
          endRound={() => setEndRound(true)}
        />
      )}

      {randomMusics.map((music: MusicModel, index: number) => (
        <button
          key={index}
          disabled={endRound}
          className={`border-2 p-4 text-white ${
            choicedMusic?.trackId == music.trackId ? "bg-green-600" : ""
          }`}
          onClick={() => (endRound ? null : setChoicedMusic(music))}
        >
          {music.trackName} - {music.trackId}{" "}
        </button>
      ))}

      {endRound && <h1 className="text-white">{correctMusic?.trackName}</h1>}
    </div>
  );
}
