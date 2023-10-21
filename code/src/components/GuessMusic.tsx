import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import MusicPlayer from "./MusicPlayer";
import {
  MAX_PLAY_MUSIC_SECONDS,
  MAX_RANDOM_MUSICS_LENGTH,
  POSSIBLE_POINTS_BY_ROUND,
} from "../commom/constants";

import {
  randomIndex,
  randomizeMusic,
  checkCorrectChoice,
} from "../commom/functions";

type GuessMusicProps = {
  musics: MusicModel[];
  addPoints: (newPoints: number) => void;
  onRoundEnd: () => void;
  round: number;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, addPoints, onRoundEnd, round } = props;

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

  // if (endRound) {
  //   setTimeout(() => {
  //     onRoundEnd();
  //     if (checkCorrectChoice(choicedMusic, correctMusic))
  //       addPoints(POSSIBLE_POINTS_BY_ROUND);
  //   }, 3000);
  // }

  return (
    <div className="flex flex-col gap-6 py-0 px-3">
      {correctMusic && (
        <div className="w-2/3 md:w-1/2 m-auto flex flex-col items-center p-4 md:p-8 gap-3 md:gap-6 lg:gap-8 bg-black/70 rounded-b-xl">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-amber-400">
            Rodada {round}
          </p>
          <div className="w-full">
            <MusicPlayer
              music={correctMusic}
              maxPlayTime={MAX_PLAY_MUSIC_SECONDS}
              endRound={() => setEndRound(true)}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-6 mt-10">
        {randomMusics.map((music: MusicModel, index: number) => (
          <button
            key={index}
            disabled={endRound}
            className={`w-full md:w-4/5 lg:w-2/3 md:m-auto p-6 md:p-8 lg:p-10 text-white ${
              choicedMusic?.trackId == music.trackId
                ? "bg-blue-700/90"
                : "bg-black/70"
            }`}
            onClick={() => (endRound ? null : setChoicedMusic(music))}
          >
            <p className="text-lg md:text-2xl font-bold">{music.trackName}</p>
          </button>
        ))}
      </div>
      {endRound && <h1 className="text-red-300">{correctMusic?.trackName}</h1>}
    </div>
  );
}
