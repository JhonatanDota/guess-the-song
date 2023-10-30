import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import FiltersPropsModel from "../../models/FiltersPropsModel";

export default function SearchNameFilter(props: FiltersPropsModel) {
  const { setFilters } = props;

  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    setFilters({ searchName: search });
  }, [search]);

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
