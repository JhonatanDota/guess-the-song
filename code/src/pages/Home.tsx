import ArtistsCard from "../components/ArtistCard";
import { ArtistModel, ARTISTS } from "../data/artists";

export default function Home() {
  return (
    <div>
      <div className="flex gap-3 p-4">
        {ARTISTS.map((artist: ArtistModel) => (
          <ArtistsCard artist={artist} />
        ))}
      </div>
    </div>
  );
}
