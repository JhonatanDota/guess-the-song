import { useState, useEffect } from "react";
import Music from "../models/Music";
import MusicPlayer from "./MusicPlayer";

type GuessMusicProps = {
  musics: Music[];
  onRoundEnd: () => void;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, onRoundEnd } = props;
  const MAX_RANDOM_MUSICS_LENGTH = 4;
  const MAX_PLAY_MUSIC_SECONDS = 15;

  const [randomMusics, setRandomMusics] = useState<Music[]>([]);

  const [correctMusic, setCorrectMusic] = useState<Music>();
  const [currentTime, setCurrentTime] = useState<number>(0);

  const [selectedMusic, setSelectedMusic] = useState<Music>();
  const [canChoice, setCanChoice] = useState<boolean>(true);

  const timesUp = currentTime >= MAX_PLAY_MUSIC_SECONDS;

  useEffect(() => {
    const newRandomMusics: Music[] = [];

    for (let i: number = 0; i < MAX_RANDOM_MUSICS_LENGTH; i++) {
      let alreadyAddedMusic: boolean = true;
      let randomMusic: Music = randomizeMusic();

      while (alreadyAddedMusic) {
        randomMusic = randomizeMusic();

        alreadyAddedMusic = checkMusicAlreadyAdded(
          randomMusic,
          newRandomMusics
        );
      }

      newRandomMusics.push(randomMusic);
    }

    setCorrectMusic(newRandomMusics[randomIndex(newRandomMusics.length)]);
    setRandomMusics(newRandomMusics);
  }, [musics]);

  function randomizeMusic(): Music {
    const musicsLength = musics.length;
    const index = randomIndex(musicsLength);

    return musics[index];
  }

  function randomIndex(length: number) {
    return Math.floor(Math.random() * length);
  }

  function checkMusicAlreadyAdded(music: Music, musicList: Music[]): boolean {
    const isAdded = !!musicList.find((musicFinded: Music) =>
      musicFinded.trackName.includes(music.trackName)
    );

    return isAdded;
  }

  function choiceMusic(music: Music): void {
    setSelectedMusic(music);
  }

  if (timesUp) {
    setTimeout(() => {
      onRoundEnd();
    }, 3000);
  }

  return (
    <div className="flex flex-col gap-3">
      {correctMusic && (
        <MusicPlayer
          music={correctMusic}
          maxPlayTime={MAX_PLAY_MUSIC_SECONDS}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
      )}
      {randomMusics.map((music: Music) => (
        <button
          disabled={timesUp}
          className={`border-2 p-4 text-white ${
            timesUp && correctMusic?.trackId === music.trackId
              ? "bg-green-600"
              : "disabled:bg-gray-400"
          }`}
          onClick={() => choiceMusic(music)}
        >
          {music.trackName} - {music.trackId}{" "}
        </button>
      ))}
    </div>
  );
}
