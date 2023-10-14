import { useState, useMemo } from "react";
import ArtistsCard from "../components/ArtistCard";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";
import GenreFilter from "../components/GenreFilter";

export default function Home() {
  const [artists, setArtists] = useState<ArtistModel[]>([]);
  const [bgImage, setBgImage] = useState<string | null>(null);

  function setImage(newImage: string | null) {
    setBgImage(null);

    setTimeout(function () {
      setBgImage(newImage);
    }, 200);
  }

  const memoizedGenreFilter = useMemo(
    () => <GenreFilter artists={ARTISTS} setArtists={setArtists} />,
    [artists]
  );

  return (
    <div className="flex flex-col text-white p-6 md:p-8 lg:p-12 gap-4 md:gap-6">
      <h1 className="font-bold text-center text-4xl md:text-5xl font-display">
        Guess the Music
      </h1>
      {memoizedGenreFilter}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artists.map((artist: ArtistModel) => (
          <ArtistsCard
            key={artist.slug}
            artist={artist}
            setBgImage={setImage}
          />
        ))}
      </div>

      <div
        className={`fixed top-0 left-0 h-screen w-full bg-cover bg-no-repeat z-[-5] transition-opacity delay-100 ${
          bgImage ? "opacity-50" : "opacity-0"
        }`}
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
    </div>
  );
}
