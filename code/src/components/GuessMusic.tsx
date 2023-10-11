import { useState, useEffect } from "react";

type GuessMusicProps = {
  musics: {}[];
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics } = props;
  const MAX_RANDOM_MUSICS_LENGTH = 4;

  const [randomMusics, setRandomMusics] = useState<{}[]>([]);

  useEffect(() => {
    const newRandomMusics: {}[] = [];

    for (let i = 0; i < MAX_RANDOM_MUSICS_LENGTH; i++) {
      newRandomMusics.push(randomizeMusic());
    }

    setRandomMusics(newRandomMusics);

    console.log(musics);
  }, [musics]);

  function randomizeMusic(): {} {
    const musicsLength = musics.length;
    const randomIndex = Math.floor(Math.random() * musicsLength);

    return musics[randomIndex];
  }

  return (
    <div>
      {randomMusics.map((music: any) => (
        <h1 className="text-white">{music.trackName}</h1>
      ))}
    </div>
  );
}
