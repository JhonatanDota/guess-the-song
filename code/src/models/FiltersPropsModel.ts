import { FilterStateModel } from "./FilterStateModel";

export default interface FiltersPropsModel {
  setFilters: (filter: Partial<FilterStateModel>) => void;
}
