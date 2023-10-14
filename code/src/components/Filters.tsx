import { useState } from "react";
import FiltersProps from "../models/FiltersProps";
import GenreFilter from "./filters/GenreFilter";
import SearchNameFilter from "./filters/SearchNameFilter";

export default function Filters(props: FiltersProps) {
  const { artists, setArtists } = props;

  const [haveSearchByName, setHaveSearchByName] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col">
      <GenreFilter
        artists={artists}
        setArtists={setArtists}
        haveSearchByName={haveSearchByName}
      />
      <SearchNameFilter
        artists={artists}
        setArtists={setArtists}
        setHaveSearchByName={setHaveSearchByName}
      />
    </div>
  );
}
