import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";
import Countdown from "../components/Countdown";
import getMusicsByArtist from "../requests/getMusicsByArtist";
import GuessMusic from "../components/GuessMusic";
import { COUNTDOWN_SECONDS } from "../commom/constants";
import { BsPlayFill } from "react-icons/bs";

import { musicsTest } from "../data/musicsTest.js";
import MusicModel from "../models/MusicModel";

export default function GuessMusics() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [points, setPoints] = useState<number>(0);

  const [artist, setArtist] = useState<ArtistModel>();
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [isCountdownDone, setIsCountdownDone] = useState<boolean>(false);

  const [musics, setMusics] = useState<MusicModel[]>([]);

  useEffect(() => {
    const findedArtist: ArtistModel | undefined = ARTISTS.find(
      (artist: ArtistModel) => artist.slug === slug
    );

    if (findedArtist === undefined) navigate("/");

    setArtist(findedArtist);
  }, []);

  async function fetchArtistMusics(artistName: string) {
    setMusics(musicsTest);
    // try {
    //   const musics = await getMusicsByArtist(artistName);
    //   setMusics(musics.data.results);
    // } catch (error) {}
  }

  function handleStartRound() {
    if (artist) fetchArtistMusics(artist.name);
    setIsCountdownDone(false);
    setStartCountdown(true);
  }

  function addPoints(newPoints: number): void {
    setPoints(points + newPoints);
  }

  return (
    <>
      {isCountdownDone ? (
        <GuessMusic
          musics={musics}
          onRoundEnd={handleStartRound}
          addPoints={addPoints}
        />
      ) : (
        <>
          {startCountdown ? (
            <Countdown
              seconds={COUNTDOWN_SECONDS}
              onCountdownDone={() => setIsCountdownDone(true)}
            />
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex w-full justify-around">
              <button
                className="text-2xl border-2 border-yellow-300/80 bg-yellow-300/70 tracking-widest p-4 font-display"
              >
                Voltar
              </button>
              <button
                className="flex items-center text-2xl text-zinc-100/80  border-2 border-zinc-100/80 rounded-md bg-green-600/70 p-4 font-display"
                onClick={handleStartRound}
              >
                Start
                <BsPlayFill/>
              </button>
            </div>
          )}
        </>
      )}

      <div
        className="fixed top-0 left-0 h-screen w-full bg-cover bg-center bg-no-repeat z-[-5] opacity-40"
        style={{ backgroundImage: `url(${artist?.image})` }}
      ></div>
    </>
  );
}
