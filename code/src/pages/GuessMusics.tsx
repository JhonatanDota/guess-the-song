import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArtistModel, ARTISTS } from "../data/artists";
import Countdown from "../components/Countdown";
import getMusicsByArtist from "../requests/getMusicsByArtist";
import GuessMusic from "../components/GuessMusic";


import {musicsTest} from "../data/musicsTest.js";

export default function GuessMusics() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState<ArtistModel>();
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [isCountdownDone, setIsCountdownDone] = useState<boolean>(false);

  const [musics, setMusics] = useState<{}[]>([]);

  function handleStart() {
    setStartCountdown(true);
    if (artist) fetchArtistMusics(artist.name);
  }

  function handleIsDoneCountdown() {
    setIsCountdownDone(true);
  }

  async function fetchArtistMusics(artistName: string) {
    setMusics(musicsTest);
    // try {
    //   const musics = await getMusicsByArtist(artistName);
    //   setMusics(musics.data.results);
    // } catch (error) {}
  }

  useEffect(() => {
    const findedArtist = ARTISTS.find((artist) => artist.slug === slug);

    if (findedArtist === undefined) navigate("/");

    setArtist(findedArtist);
  }, []);

  return (
    <>
      {isCountdownDone ? (
        <GuessMusic musics={musics} />
      ) : (
        <div className="text-white">
          <button onClick={handleStart}>Comecar</button>

          {startCountdown && (
            <Countdown seconds={5} onCountdownDone={handleIsDoneCountdown} />
          )}

          {isCountdownDone && <h1 className="text-white">Acabouuuuu</h1>}
        </div>
      )}
    </>
  );
}
