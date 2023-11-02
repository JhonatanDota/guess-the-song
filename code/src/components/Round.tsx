import { useState, useEffect } from "react";
import MusicModel from "../models/MusicModel";
import MusicPlayer from "./MusicPlayer";
import {
  MAX_PLAY_MUSIC_SECONDS,
  MAX_RANDOM_MUSICS_LENGTH,
  POSSIBLE_POINTS_BY_ROUND,
} from "../commom/constants";

import {
  randomizeIndex,
  randomizeMusic,
  checkCorrectChoice,
} from "../commom/functions";

type GuessMusicProps = {
  musics: MusicModel[];
  usedMusics: MusicModel[],
  setUsedMusics: (musics: MusicModel[]) => void;
  currentPoints: number;
  addPoints: (newPoints: number) => void;
  onRoundEnd: () => void;
  round: number;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, usedMusics, setUsedMusics, currentPoints, addPoints, onRoundEnd, round } = props;

  const [endRound, setEndRound] = useState<boolean>(false);

  const [randomMusics, setRandomMusics] = useState<MusicModel[]>([]);
  const [correctMusic, setCorrectMusic] = useState<MusicModel>();
  const [choicedMusic, setChoicedMusic] = useState<MusicModel | null>(null);

  useEffect(() => {
    const newRandomMusics: MusicModel[] = [];

    for (let i: number = 0; i < MAX_RANDOM_MUSICS_LENGTH; i++){
      const randomizedMusic: MusicModel = randomizeMusic(musics);
      newRandomMusics.push(randomizedMusic);
    }

    let randomIndex: number = randomizeIndex(newRandomMusics.length);
    let correctMusic: MusicModel = newRandomMusics[randomIndex];

    while (usedMusics.some((music: MusicModel) => music === correctMusic)) {
      randomIndex = randomizeIndex(newRandomMusics.length);
      correctMusic = newRandomMusics[randomIndex];
    }

    setCorrectMusic(correctMusic);
    setRandomMusics(newRandomMusics);
    setUsedMusics([correctMusic, ...usedMusics]);
  }, []);

  useEffect(() => {
    if (endRound) {
      if (checkCorrectChoice(choicedMusic, correctMusic))
        addPoints(POSSIBLE_POINTS_BY_ROUND);
      setTimeout(() => {
        onRoundEnd();
      }, 3000);
    }
  }, [endRound]);

  return (
    <div className="flex flex-col gap-6 py-0 px-3">
      {correctMusic && (
        <div className="w-2/3 md:w-1/2 m-auto flex flex-col items-center p-4 md:p-8 gap-3 md:gap-6 lg:gap-8 bg-black/70 rounded-b-xl">
          <p className="text-xl md:text-3xl lg:text-4xl font-bold text-amber-400">
            Rodada {round}
          </p>
          <p className="text-base md:text-xl lg:text-2xl text-red-100">
            Pontos: {currentPoints}
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
              endRound
                ? music.trackId === correctMusic?.trackId
                  ? "bg-green-500"
                  : "bg-black/70"
                : choicedMusic?.trackId === music.trackId
                ? "bg-blue-700/90"
                : "bg-black/70"
            }`}
            onClick={() => (endRound ? null : setChoicedMusic(music))}
          >
            <p className="text-lg md:text-2xl font-bold">{music.trackName}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
