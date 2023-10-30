import FiltersPropsModel from "../models/FiltersPropsModel";
import GenreFilter from "./filters/GenreFilter";
import SearchNameFilter from "./filters/SearchNameFilter";

export default function Filters(props: FiltersPropsModel) {
  const { setFilters } = props;

  return (
    <div className="w-full flex flex-col">
      <GenreFilter setFilters={setFilters} />
      <SearchNameFilter setFilters={setFilters} />
    </div>
  );
}
