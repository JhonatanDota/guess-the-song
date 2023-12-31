import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";
import Countdown from "../components/Countdown";
import getMusicsByArtist from "../requests/getMusicsByArtist";
import Round from "../components/Round";
import {
  COUNTDOWN_SECONDS,
  MAX_ROUNDS_COUNT,
  POSSIBLE_POINTS_BY_ROUND,
} from "../commom/constants";
import { BsPlayFill, BsFillReplyFill } from "react-icons/bs";
import MusicModel from "../models/MusicModel";
import EndGame from "../components/EndGame";

export default function GuessMusics() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [round, setRound] = useState<number>(0);
  const [points, setPoints] = useState<number>(0);
  const [endGame, setEndGame] = useState<boolean>(false);

  const [artist, setArtist] = useState<ArtistModel>();
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [isCountdownDone, setIsCountdownDone] = useState<boolean>(false);

  const [musics, setMusics] = useState<MusicModel[]>([]);
  const [usedMusics, setUsedMusics] = useState<MusicModel[]>([]);

  useEffect(() => {
    const findedArtist: ArtistModel | undefined = ARTISTS.find(
      (artist: ArtistModel) => artist.slug === slug
    );

    if (findedArtist === undefined) return navigate("/");

    setArtist(findedArtist);
    fetchArtistMusics(findedArtist.name);
  }, []);

  async function fetchArtistMusics(artistName: string) {
    try {
      const musics = await getMusicsByArtist(artistName);
      setMusics(musics.data.results);
    } catch (error) {}
  }

  function handleStartRound() {
    if (round === MAX_ROUNDS_COUNT) setEndGame(true);
    else setRound(round + 1);

    setIsCountdownDone(false);
    setStartCountdown(true);
  }

  function addPoints(newPoints: number): void {
    setPoints(points + newPoints);
  }

  return (
    <>
      {endGame && artist ? (
        <EndGame
          artist={artist}
          points={points}
          possiblePoints={MAX_ROUNDS_COUNT * POSSIBLE_POINTS_BY_ROUND}
          rounds={round}
        />
      ) : isCountdownDone ? (
        <>
          <Round
            musics={musics}
            usedMusics={usedMusics}
            setUsedMusics={setUsedMusics}
            currentPoints={points}
            addPoints={addPoints}
            onRoundEnd={handleStartRound}
            round={round}
          />
        </>
      ) : (
        <>
          {startCountdown ? (
            <Countdown
              seconds={COUNTDOWN_SECONDS}
              onCountdownDone={() => setIsCountdownDone(true)}
            />
          ) : (
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/4 md:w-1/4 lg:w-1/5">
              <div className="flex flex-col gap-6 md:gap-10">
                <button
                  className="uppercase flex justify-between items-center p-2 md:p-4 rounded-md text-2xl md:text-3xl lg:text-4xl text-white bg-[#008000] font-bold"
                  onClick={handleStartRound}
                >
                  <p className="m-auto">Iniciar</p>
                  <div className="bg-[#38b000] rounded-r-md">
                    <BsPlayFill className="inline-block m-2" fill="white" />
                  </div>
                </button>

                <button
                  onClick={() => navigate("/")}
                  className="uppercase flex justify-between items-center p-2 md:p-4 rounded-md text-2xl md:text-3xl lg:text-4xl text-white bg-[#ff8a15fd] font-bold"
                >
                  <div className="bg-[#f6a437] rounded-l-md">
                    <BsFillReplyFill
                      className="inline-block m-2"
                      fill="white"
                    />
                  </div>
                  <p className="m-auto">Voltar</p>
                </button>
              </div>
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
