import { useState, useEffect } from "react";

type GuessMusicProps = {
  musics: {}[];
  onChoice: () => void;
};

export default function GuessMusic(props: GuessMusicProps) {
  const { musics, onChoice } = props;
  const MAX_RANDOM_MUSICS_LENGTH = 4;

  const [correctMusic, setCorrectMusic] = useState<any>({});
  const [randomMusics, setRandomMusics] = useState<any[]>([]);

  useEffect(() => {
    const newRandomMusics: {}[] = [];

    for (let i = 0; i < MAX_RANDOM_MUSICS_LENGTH; i++) {
        let alreadyAddedMusic: boolean = true;

        while (alreadyAddedMusic) {
            let randomMusic: any = randomizeMusic();


            alreadyAddedMusic = !!newRandomMusics.find((music: any) => music.trackId === randomMusic.trackId);
        };

        newRandomMusics.push({});
    };

    setCorrectMusic(newRandomMusics[randomIndex(newRandomMusics.length)]);
    setRandomMusics(newRandomMusics);

    console.log(musics);
  }, [musics]);

  function randomizeMusic(): {} {
    const musicsLength = musics.length;
    const index = randomIndex(musicsLength);

    return musics[index];
  }

  function randomIndex(length: number){
    return Math.floor(Math.random() * length);
  }

  return (
    <div className="flex flex-col gap-3">
      {randomMusics.map((music: any) => (
        <div className="border-2" onClick={onChoice}>
            <h1 className="text-white">{music.trackName} - {music.trackId} </h1>
        </div>
      ))}
      <h1 className="text-3xl text-red-300">{correctMusic.trackName}</h1>
    </div>
  );
}
