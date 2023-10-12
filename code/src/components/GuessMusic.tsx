import { useState, useEffect } from "react";
import Music from "../models/Music";

type GuessMusicProps = {
  musics: Music[];
  onChoice: () => void;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, onChoice } = props;
  const MAX_RANDOM_MUSICS_LENGTH = 4;

  const [randomMusics, setRandomMusics] = useState<Music[]>([]);

  const [correctMusic, setCorrectMusic] = useState<Music>();
  const [selectedMusic, setSelectedMusic] = useState<Music>();

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

  return (
    <div className="flex flex-col gap-3">
      {randomMusics.map((music: any) => (
        <div className="border-2" onClick={() => choiceMusic(music)}>
          <h1 className="text-white">
            {music.trackName} - {music.trackId}{" "}
          </h1>
        </div>
      ))}
    </div>
  );
}
