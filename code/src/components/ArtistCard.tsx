import { useState } from "react";
import { NavLink } from "react-router-dom";
import ArtistModel from "../models/ArtistModel";

type ArtistsCardProps = {
  artist: ArtistModel;
};

export default function ArtistsCard(props: ArtistsCardProps) {
  const { artist } = props;
  const [bgImage, setBgImage] = useState<string | null>(null);

  function setImage(newImage: string | null) {
    setBgImage(null);

    setTimeout(function () {
      setBgImage(newImage);
    }, 200);
  }

  return (
    <>
      <NavLink to={`/guess/${artist.slug}/`}>
        <div
          onMouseEnter={() => setImage(artist.image)}
          onMouseLeave={() => setImage(null)}
          className="relative rounded-md cursor-pointer border-2 border-slate-900/30 h-48 md:h-64 lg:h-80 w-full transition-all delay-75 hover:scale-[1.02]"
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

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-cover bg-center bg-no-repeat z-[-5] transition-opacity delay-100 ${
          bgImage ? "opacity-50" : "opacity-0"
        }`}
      >
        {bgImage && (
          <img
            className="block w-screen h-screen object-cover"
            src={bgImage}
            alt=""
          />
        )}
      </div>
    </>
  );
}
