import { useEffect, useState } from "react";
import {
  FilterStateModel,
  DEFAULT_FILTER_STATE,
} from "../models/FilterStateModel";
import ArtistsCard from "../components/ArtistCard";
import ArtistModel from "../models/ArtistModel";
import ARTISTS from "../data/artists";
import Filters from "../components/Filters";

export default function Home() {
  const [artists, setArtists] = useState<ArtistModel[]>(ARTISTS);
  const [filters, setFilters] =
    useState<FilterStateModel>(DEFAULT_FILTER_STATE);

  function handleFilterChange(filter: Partial<FilterStateModel>): void {
    setFilters({ ...filters, ...filter });
  }

  useEffect(() => {
    applyFilters(filters);
  }, [filters]);

  function applyFilters(toFilter: FilterStateModel): void {
    let filteredArtists: ArtistModel[] = ARTISTS;

    if (toFilter.searchName.haveFilter)
      filteredArtists = toFilter.searchName.func(filteredArtists);

    if (toFilter.genre.haveFilter)
      filteredArtists = toFilter.genre.func(filteredArtists);

    setArtists(filteredArtists);
  }

  return (
    <div className="flex flex-col text-white p-6 md:p-8 lg:p-12 gap-4 md:gap-6">
      <h1 className="font-bold text-center text-4xl md:text-5xl font-display">
        Guess the Music
      </h1>
      <Filters setFilters={handleFilterChange} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {artists.map((artist: ArtistModel) => (
          <ArtistsCard key={artist.slug} artist={artist} />
        ))}
      </div>
    </div>
  );
}
