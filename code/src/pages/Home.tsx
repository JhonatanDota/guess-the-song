import ArtistsCard from "../components/ArtistCard";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";

export default function Home() {
  return (
    <div className="flex flex-col text-white p-6 gap-4">
      <h1 className="font-bold text-center text-4xl">Guess the Music</h1>
      <div className="grid grid-cols-1 gap-6">
        {ARTISTS.map((artist: ArtistModel) => (
          <ArtistsCard artist={artist} />
        ))}
      </div>
    </div>
  );
}
