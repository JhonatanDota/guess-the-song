import { useNavigate } from "react-router-dom";
import ArtistModel from "../models/ArtistModel";
import { BsFillHouseDoorFill } from "react-icons/bs";

type EndGameProps = {
  artist: ArtistModel;
  points: number;
  possiblePoints: number;
  rounds: number;
};

export default function EndGame(props: EndGameProps) {
  const { artist, points, possiblePoints, rounds } = props;

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-8 mt-24 md:mt-28">
      <div className="w-4/5 lg:w-1/2 flex flex-col items-center p-8 md:p-10 lg:p-14 gap-4 md:gap-6 lg:gap-10 bg-black/60 text-white rounded-lg">
        <p className="text-amber-500 text-4xl md:text-6xl font-bold tracking-wider">
          Fim de jogo
        </p>
        <p className="text-3xl md:text-5xl font-bold tracking-wider">
          {artist.name}
        </p>

        <div className="flex flex-col items-center gap-1 md:gap-3">
          <div className="font-semibold text-xl md:text-3xl">
            <span className="tracking-wider">Pontos: </span>
            <span className="text-green-400"> {points}</span>/{possiblePoints}
          </div>
          <div className="font-semibold text-xl md:text-3xl">
            <span className="tracking-wider">Rodadas: </span>
            <span>{rounds}</span>
          </div>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        className="flex justify-between items-center p-5 md:p-6 rounded-md text-white bg-[#ff8a15f2]"
      >
        <BsFillHouseDoorFill className="text-2xl md:text-4xl" fill="white" />
      </button>
    </div>
  );
}
