import FiltersProps from "../models/FiltersProps";
import GenreFilter from "./filters/GenreFilter";
import SearchNameFilter from "./filters/SearchNameFilter";

export default function Filters(props: FiltersProps) {
  const { artists, setArtists } = props;

  return (
    <div className="w-full flex flex-col">
      {/* <GenreFilter artists={artists} setArtists={setArtists} /> */}
      <SearchNameFilter artists={artists} setArtists={setArtists} />
    </div>
  );
}
