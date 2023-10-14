import { useState } from "react";
import { MUSIC_GENRES_LIST } from "../data/artists";
import ArtistModel from "../models/ArtistModel";

type GenreFilterProps = {
  setArtists: (artists: ArtistModel[]) => void;
};

export default function GenreFilter(props: GenreFilterProps) {
  const { setArtists } = props;

  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);

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
      <div className="flex justify-center gap-3 w-1/2 m-auto">
        {MUSIC_GENRES_LIST.map((genre: string) => (
          <div
            key={genre}
            onClick={() => handleGenre(genre)}
            className={`rounded-lg text-black p-3 cursor-pointer ${
              isGenreFiltered(genre) ? "bg-blue-200" : "bg-green-100"
            }`}
          >
            <p>{genre}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
