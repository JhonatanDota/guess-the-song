import { ArtistModel } from "../data/artists";

type ArtistsCardProps = {
  artist: ArtistModel;
};

export default function ArtistsCard(props: ArtistsCardProps) {
  const { artist } = props;

  return (
    <div className="flex flex-col items-center w-52 border-2 cursor-pointer transition delay-100 hover:scale-105">
      <img className="h-full" src={artist.image} alt="" />
      <p className="text-white font-bold p-2">{artist.name}</p>
    </div>
  );
}
