import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ArtistModel, ARTISTS } from "../data/artists";
import Countdown from "../components/Countdown";

export default function GuessMusics() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState<ArtistModel>();
  const [startCountdown, setStartCountdown] = useState<boolean>(false);
  const [isCountdownDone, setIsCountdownDone] = useState<boolean>(false);

  function handleStartCountdown() {
    setStartCountdown(true);
  }

  function handleIsDoneCountdown() {
    setIsCountdownDone(true);
  }

  useEffect(() => {
    const findedArtist = ARTISTS.find((artist) => artist.slug === slug);

    if (findedArtist === undefined) navigate("/");

    setArtist(findedArtist);
  }, []);

  return (
    <div>
      {artist && (
        <div className="text-white">
          <h1>{artist.name}</h1>
          <button onClick={handleStartCountdown}>Comecar</button>

          {startCountdown && (
            <Countdown seconds={5} onCountdownDone={handleIsDoneCountdown} />
          )}

          {
            isCountdownDone && <h1 className="text-white">Acabouuuuu</h1>
          }
        </div>
      )}
    </div>
  );
}
