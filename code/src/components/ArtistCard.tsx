import ArtistModel from "../models/ArtistModel";
import { NavLink } from "react-router-dom";

type ArtistsCardProps = {
  artist: ArtistModel;
  setBgImage: (bgImage: string | null) => void;
};

export default function ArtistsCard(props: ArtistsCardProps) {
  const { artist, setBgImage } = props;

  return (
    <NavLink to={`/guess/${artist.slug}/`}>
      <div
        onMouseEnter={() => setBgImage(artist.image)}
        onMouseLeave={() => setBgImage(null)}
        className="relative rounded-md cursor-pointer border-2 border-slate-900/30 h-48 md:h-64 lg:h-80 w-full transition-all delay-75 hover:scale-105"
      >
        <img
          className="rounded-md h-full w-full object-cover"
          src={artist.image}
          alt=""
        />
        <div className="absolute p-2 bg-black/60 bottom-0 w-full text-center">
          <p className="text-white text-xl md:text-2xl lg:text-3xl font-bold">
            {artist.name}
          </p>
        </div>
      </div>
    </NavLink>
  );
}
