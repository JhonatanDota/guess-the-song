import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import ArtistModel from "../../models/ArtistModel";
import FiltersProps from "../../models/FiltersProps";

export default function SearchNameFilter(props: FiltersProps) {
  const { artists, setArtists } = props;

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setArtists(filterArtistsByName(search));
  }, [search]);

  function filterArtistsByName(name: string): ArtistModel[] {
    const filteredArtists: ArtistModel[] = [...artists].filter(
      (artist: ArtistModel) =>
        artist.name.toLowerCase().includes(name.toLowerCase())
    );

    return filteredArtists;
  }

  return (
    <div className="flex items-center rounded-full bg-slate-800">
      <input
        className="w-full rounded-full font-bold px-4 py-3 bg-slate-800/50 focus:outline-none"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <BsSearch fill="white" className="mr-4" />
    </div>
  );
}
