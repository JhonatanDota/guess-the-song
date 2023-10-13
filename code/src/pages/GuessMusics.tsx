import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";
import Countdown from "../components/Countdown";
import getMusicsByArtist from "../requests/getMusicsByArtist";
import GuessMusic from "../components/GuessMusic";
import { COUNTDOWN_SECONDS } from "../commom/constants";

import { musicsTest } from "../data/musicsTest.js";
import Music from "../models/Music";

export default function GuessMusics() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [points, setPoints] = useState<number>(0);

  const [artist, setArtist] = useState<ArtistModel>();
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [isCountdownDone, setIsCountdownDone] = useState<boolean>(false);

  const [musics, setMusics] = useState<Music[]>([]);

  function handleStart() {
    setIsCountdownDone(false);
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
    const findedArtist: ArtistModel | undefined = ARTISTS.find(
      (artist: ArtistModel) => artist.slug === slug
    );

    if (findedArtist === undefined) navigate("/");

    setArtist(findedArtist);
  }, []);

  return (
    <>
      {isCountdownDone ? (
        <GuessMusic
          musics={musics}
          onRoundEnd={handleStart}
          currentPoints={points}
          setPoints={setPoints}
        />
      ) : (
        <>
          {startCountdown ? (
            <Countdown
              seconds={COUNTDOWN_SECONDS}
              onCountdownDone={handleIsDoneCountdown}
            />
          ) : (
            <button
              className="border-2 border-black bg-yellow-300 p-4 font-display"
              onClick={handleStart}
            >
              Start
            </button>
          )}
        </>
      )}
    </>
  );
}
