import { useState, useEffect } from "react";
import ARTISTS, { MUSIC_GENRES_LIST } from "../data/artists";
import ArtistModel from "../models/ArtistModel";

type GenreFilterProps = {
  artists: ArtistModel[];
  setArtists: (artists: ArtistModel[]) => void;
};

export default function GenreFilter(props: GenreFilterProps) {
  const { artists, setArtists } = props;

  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);

  useEffect(() => {
    if (filteredGenres.length) filterArtists();
    else setArtists(ARTISTS);
  }, [filteredGenres]);

  function filterArtists(): void {
    const filteredArtists: ArtistModel[] = artists.filter(
      (artist: ArtistModel) => toFilterArtist(artist)
    );

    setArtists(filteredArtists);
  }

  function toFilterArtist(artist: ArtistModel): boolean {
    const toFilter: boolean = artist.genres.some((genre: string) =>
      filteredGenres.includes(genre)
    );

    return toFilter;
  }

  function handleGenre(genre: string): void {
    let newFilteredGenres: string[] = [...filteredGenres];
    const genreAlreadyAdded: boolean = isGenreFiltered(genre);

    if (genreAlreadyAdded) {
      newFilteredGenres.splice(newFilteredGenres.indexOf(genre), 1);
    } else {
      newFilteredGenres = [...newFilteredGenres, genre];
    }

    setFilteredGenres(newFilteredGenres);
  }

  function isGenreFiltered(toFindGenre: string): boolean {
    return !!filteredGenres.find(
      (filteredGenre: string) => filteredGenre == toFindGenre
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-3 md:gap-6 text-center">
        {MUSIC_GENRES_LIST.map((genre: string) => (
          <div
            key={genre}
            onClick={() => handleGenre(genre)}
            className={`rounded-full text-black text-sm md:text-base lg:text-lg font-bold p-2 md:p-3 cursor-pointer transition-colors delay-75 ${
              isGenreFiltered(genre) ? "bg-green-500" : "bg-slate-400/80"
            }`}
          >
            <p className="select-none">{genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
