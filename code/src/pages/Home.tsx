import ArtistsCard from "../components/ArtistCard";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";

export default function Home() {
  return (
    <div className="flex flex-col text-white p-6 md:p-8 lg:p-12 gap-4 md:gap-6 lg:gap-10">
      <h1 className="font-bold text-center text-4xl md:text-5xl font-display">
        Guess the Music
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ARTISTS.map((artist: ArtistModel) => (
          <ArtistsCard artist={artist} />
        ))}
      </div>
    </div>
  );
}
