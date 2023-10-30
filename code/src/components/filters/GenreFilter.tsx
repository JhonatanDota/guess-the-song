import { useState, useEffect } from "react";
import { MUSIC_GENRES_LIST } from "../../data/artists";
import FiltersPropsModel from "../../models/FiltersPropsModel";

export default function GenreFilter(props: FiltersPropsModel) {
  const { setFilters } = props;

  const [filteredGenres, setFilteredGenres] = useState<string[]>([]);

  useEffect(() => {
    setFilters({ genre: filteredGenres });
  }, [filteredGenres]);

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
      (filteredGenre: string) => filteredGenre === toFindGenre
    );
  }

  return (
    <>
      <div className="grid grid-cols-3 gap-3 text-center p-4">
        {MUSIC_GENRES_LIST.map((genre: string) => (
          <div
            key={genre}
            onClick={() => handleGenre(genre)}
            className={`rounded-full text-black text-sm md:text-base font-bold p-2 md:p-3 cursor-pointer transition-colors delay-75 ${
              isGenreFiltered(genre) ? "bg-green-500" : "bg-slate-400/80"
            }`}
          >
            <p className="select-none">{genre}</p>
          </div>
        ))}
      </div>
    </>
  );
}
